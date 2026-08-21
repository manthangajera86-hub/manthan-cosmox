"use client";

/* Wired to Web3Forms — a hosted form endpoint, so the site stays static and no
   route handler or mail transport is needed. The access key below is the
   public half of the pair (it identifies the destination inbox, it does not
   authorise anything), which is why it ships in client JS by design.

   Web3Forms mails every field it receives, and treats four names specially:
   `subject` becomes the email's subject line, `from_name` its display name,
   `email` its reply-to, and `botcheck` is the honeypot. Everything else — name,
   company, phone, department, message — arrives as a labelled row in the body. */

import { useState } from "react";

const ACCESS_KEY = "237ab7ee-311d-4bde-b654-2000447eade6";

const SENT =
  "Thank you — your enquiry has been sent. The right team will get back to you shortly.";

/* A failed send has to leave the visitor somewhere to go, so it repeats the
   inbox and the numbers rather than just saying no. */
const FAILED =
  "Sorry — that could not be sent. Please email info@cosmoxchemicals.com, " +
  "or call +91 92659 43799, +91 87581 94050 or +91 92650 18813.";

type Status = { text: string; ok: boolean } | null;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>(null);
  const [sending, setSending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    data.append("access_key", ACCESS_KEY);
    /* The department on its own is a subject line with no context in an inbox
       that receives other post; the department is still sent as its own field. */
    data.append("subject", `Cosmox enquiry — ${data.get("department") ?? "General"}`);
    data.append("from_name", String(data.get("name") ?? "Cosmox website"));

    setSending(true);
    setStatus(null);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const body = await res.json();
      if (body.success) {
        setStatus({ text: SENT, ok: true });
        form.reset();
      } else {
        setStatus({ text: FAILED, ok: false });
      }
    } catch {
      setStatus({ text: FAILED, ok: false });
    } finally {
      setSending(false);
    }
  }

  return (
    <form id="enquiry-form" className="contact-card" onSubmit={onSubmit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="f-name">Name</label>
          <input id="f-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="f-company">Company / organisation</label>
          <input id="f-company" name="company" type="text" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="f-email">Email address</label>
          <input id="f-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor="f-phone">Phone number</label>
          <input id="f-phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="field full">
          <label htmlFor="f-subject">Subject / department</label>
          <select id="f-subject" name="department" defaultValue="Sales &amp; business enquiry">
            <option>Sales &amp; business enquiry</option>
            <option>Technical &amp; R&amp;D support</option>
            <option>Export &amp; international</option>
            <option>Partnership or supplier enquiry</option>
            <option>General question</option>
          </select>
        </div>
        <div className="field full">
          <label htmlFor="f-message">Message</label>
          <textarea id="f-message" name="message" required />
        </div>
      </div>
      {/* Web3Forms' honeypot: a real field a person never sees and a bot fills
          in. Hidden in the stylesheet, not with an inline style. */}
      <input className="form-bot" type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
      <div className="btn-row">
        <button className="btn btn--gold" type="submit" disabled={sending}>
          {sending ? "Sending…" : "Send enquiry"}
        </button>
      </div>
      <p
        className={`form-note${status ? " is-live" : ""}${status && !status.ok ? " is-error" : ""}`}
        role="status"
        aria-live="polite"
      >
        {status?.text ?? "We reply to every enquiry — usually within one working day."}
      </p>
    </form>
  );
}
