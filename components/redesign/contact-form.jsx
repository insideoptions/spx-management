"use client";
import { useState } from "react";
export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  async function submit(event) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("timestamp", new Date().toISOString());
    data.append("source", "SPX Management Website");
    setStatus("sending");
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_URL ||
          "https://hooks.zapier.com/hooks/catch/13379760/u1w3v6x/",
        { method: "POST", body: data },
      );
      if (!response.ok) throw new Error("Submission failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }
  return (
    <form
      className="inquiry-form"
      onSubmit={submit}
      aria-busy={status === "sending"}
    >
      <h2>Tell us a little about yourself.</h2>
      <div className="form-row">
        <label>
          First name
          <input
            name="firstName"
            autoComplete="given-name"
            required
            maxLength="80"
            placeholder="First name"
          />
        </label>
        <label>
          Last name
          <input
            name="lastName"
            autoComplete="family-name"
            required
            maxLength="80"
            placeholder="Last name"
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          Email address
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength="180"
            placeholder="you@company.com"
          />
        </label>
        <label>
          Phone number
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            maxLength="40"
            placeholder="Phone number"
          />
        </label>
      </div>
      <label>
        Your message
        <textarea
          name="message"
          required
          rows="5"
          maxLength="4000"
          placeholder="What would you like to discuss?"
        />
      </label>
      <p className="fineprint">
        Your details will be used to respond to your inquiry. Please do not
        include sensitive financial information.
      </p>
      <button className="button" disabled={status === "sending"} type="submit">
        {status === "sending" ? "Sending…" : "Send inquiry"}
        <span aria-hidden="true">↗</span>
      </button>
      {status === "sent" && (
        <p className="form-status success" role="status">
          Thank you. Your inquiry has been submitted.
        </p>
      )}
      {status === "error" && (
        <p className="form-status error" role="alert">
          Your inquiry could not be submitted. Please try again or email{" "}
          <a href="mailto:David@spxmgmt.com">David@spxmgmt.com</a>.
        </p>
      )}
    </form>
  );
}
