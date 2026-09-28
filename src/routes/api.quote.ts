import { createFileRoute } from "@tanstack/react-router";

// Quote form submissions are forwarded server-side to a GoHighLevel "Inbound Webhook" workflow
// trigger, so the URL isn't exposed in the page and there are no browser CORS issues.
// Paste the workflow's webhook URL below, or set the GHL_QUOTE_WEBHOOK_URL environment variable in Vercel.
// Until one is set, the form tells visitors to call/text or email instead (nothing is lost silently).
const DEFAULT_WEBHOOK_URL = "";

const FIELDS = [
  "first_name",
  "last_name",
  "email",
  "phone",
  "city",
  "service",
  "property_size",
  "frequency",
  "notes",
  "page_url",
] as const;

type QuoteField = (typeof FIELDS)[number];

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

export const Route = createFileRoute("/api/quote")({
  server: {
    handlers: {
      GET: () => json(405, { ok: false, error: "Use POST." }),
      POST: async ({ request }) => {
        let input: Record<string, unknown>;
        try {
          input = (await request.json()) as Record<string, unknown>;
        } catch {
          return json(400, { ok: false, error: "Invalid request." });
        }

        // Honeypot: real visitors never see or fill this field; bots usually do.
        if (typeof input["company_website"] === "string" && input["company_website"].trim()) {
          return json(200, { ok: true });
        }

        const data = {} as Record<QuoteField, string>;
        for (const key of FIELDS) {
          const value = input[key];
          data[key] =
            typeof value === "string" ? value.trim().slice(0, key === "notes" ? 2000 : 300) : "";
        }

        if (!data.first_name || !data.phone || !/^\S+@\S+\.\S+$/.test(data.email)) {
          return json(400, {
            ok: false,
            error: "Please add your first name, phone and a valid email.",
          });
        }

        const payload = {
          ...data,
          full_name: [data.first_name, data.last_name].filter(Boolean).join(" "),
          source: "Website Quote Form",
          submitted_at: new Date().toISOString(),
          summary: `Quote request: ${data.service} | ${data.property_size} | ${data.frequency} | ${data.city}. Notes: ${data.notes || "None"}`,
        };

        const webhookUrl = process.env["GHL_QUOTE_WEBHOOK_URL"] || DEFAULT_WEBHOOK_URL;
        if (!webhookUrl) {
          console.error("Quote form: no GHL webhook URL configured", payload.summary);
          return json(503, { ok: false, error: "not_configured" });
        }
        try {
          const res = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
            signal: AbortSignal.timeout(10_000),
          });
          if (!res.ok) {
            console.error("GHL webhook rejected quote request", res.status, await res.text());
            return json(502, { ok: false, error: "We couldn't send your request." });
          }
        } catch (error) {
          console.error("GHL webhook request failed", error);
          return json(502, { ok: false, error: "We couldn't send your request." });
        }

        return json(200, { ok: true });
      },
    },
  },
});
