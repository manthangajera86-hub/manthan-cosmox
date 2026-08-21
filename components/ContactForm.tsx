"use client";

/* Not wired to a backend yet — it says so rather than failing silently.
   Point the form at a service (Formspree, Basin, a route handler) and delete
   the onSubmit handler below. */

import { useState } from "react";

const NOT_WIRED =
  "This form is not connected to a backend yet. Please email " +
  "info@cosmoxchemicals.com, or call +91 92659 43799, +91 87581 94050 " +
  "or +91 92650 18813 in the meantime.";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  return (
    <form
      id="enquiry-form"
      className="contact-card"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        setStatus(NOT_WIRED);
      }}
    >
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
          <select id="f-subject" name="subject" defaultValue="Sales &amp; business enquiry">
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
      <div className="btn-row">
        <button className="btn btn--gold" type="submit">
          Send enquiry
        </button>
      </div>
      <p className={`form-note${status ? " is-live" : ""}`} role="status" aria-live="polite">
        {status ??
          "This form needs a backend or form service connected before it can deliver messages."}
      </p>
    </form>
  );
}
