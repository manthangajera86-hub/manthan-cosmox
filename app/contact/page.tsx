import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import T from "@/components/T";
import HeroTitle from "@/components/HeroTitle";

export const metadata: Metadata = {
  title: { absolute: "Contact — Cosmox Chemicals" },
  description: "Contact Cosmox International Pvt. Ltd. in Surat, Gujarat for sales, technical support, R&D collaboration and export enquiries.",
};

export default function ContactPage() {
  return (
    <>


    <section className="page-hero bg-page-contact">
      <div className="page-hero__media" aria-hidden="true"></div>
      <div className="page-hero__scrim" aria-hidden="true"></div>
      <div className="page-hero__inner">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/"><T>Home</T></Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page"><T>Contact</T></span>
        </nav>
        <h1 className="page-hero__title"><HeroTitle light="Contact" bold="Us" /></h1>
        <p className="page-hero__lede">Whether you are a potential client, partner, supplier or researcher, our team is ready to provide support, answer your queries and guide you through our products and services.</p>
      </div>
    </section>

    <section className="pad-sm">
      <div className="wrap grid">
        <div className="grid grid-2" style={{ alignItems: "start" }}>

          <div className="contact-card">
            <span className="eyebrow">Corporate office</span>
            <h3>Cosmox International Pvt. Ltd.</h3>
            <div className="contact-line">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" /><circle cx="12" cy="10" r="2.6" /></svg>
              <address>
                A2/N-59, 18/A, B, C/1, C/2, B/5, B/6<br />
                Ekta Industrial Estate, Tempa Gali<br />
                N.H. 8, Mangrol, Pipodara<br />
                Surat, Gujarat 394110, India
              </address>
            </div>
            <div className="contact-line">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>
              <span><a href="tel:+919265943799">+91 92659 43799</a><br /><a href="tel:+918758194050">+91 87581 94050</a></span>
            </div>
            <div className="contact-line">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5" /><path d="m3 7 9 6 9-6" /></svg>
              {/* TODO: replace with the live address, e.g. info@yourdomain.com */}
              <span className="tbd">General email — to be confirmed</span>
            </div>
          </div>

          <div className="figure figure--wide bg-media-industries" aria-hidden="true"></div>

        </div>

        <div className="grid grid-3">
          <div className="contact-card">
            <h3>Sales &amp; business enquiries</h3>
            <p style={{ fontSize: ".95rem" }}>Product availability, quotations, exports and bulk orders.</p>
            {/* TODO: add the sales email and direct line */}
            <p className="tbd" style={{ fontSize: ".92rem" }}>Direct line and email to be confirmed — meanwhile, please use the corporate numbers above.</p>
          </div>
          <div className="contact-card">
            <h3>Technical &amp; R&amp;D support</h3>
            <p style={{ fontSize: ".95rem" }}>Technical assistance, application guidance and research collaboration.</p>
            {/* TODO: add the technical support email and direct line */}
            <p className="tbd" style={{ fontSize: ".92rem" }}>Direct line and email to be confirmed.</p>
          </div>
          <div className="contact-card">
            <h3>Export &amp; international</h3>
            <p style={{ fontSize: ".95rem" }}>For global clients and international distributors.</p>
            {/* TODO: add the export email and direct line */}
            <p className="tbd" style={{ fontSize: ".92rem" }}>Direct line and email to be confirmed.</p>
          </div>
        </div>

      </div>
    </section>

    <section className="pad-sm bg-sand">
      <div className="wrap wrap--narrow">
        <div className="section-head center">
          <span className="eyebrow">General enquiry</span>
          <h2>Send us a message</h2>
          <p>Questions, feedback or partnership requests — tell us what you need and the right team will get back to you.</p>
        </div>
        <ContactForm />
      </div>
    </section>

    <section className="pad-sm">
      <div className="wrap">
        <div className="cta">
          <div>
            <h2>Here to connect, support and partner with you globally</h2>
            <p>Reach out today for world-class service, expertise and support in specialty chemicals.</p>
          </div>
          <div className="btn-row">
            <a className="btn btn--gold" href="tel:+919265943799">Call +91 92659 43799</a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
