import type { Metadata } from "next";
import Link from "next/link";
import T from "@/components/T";
import HeroTitle from "@/components/HeroTitle";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: { absolute: "Contact — Cosmox Chemicals" },
  description: "Cosmox International Pvt. Ltd., Ekta Industrial Estate, Mangrol, Surat, Gujarat, India. Sales, technical support and export enquiries.",
};

/* The three icons the contact lines take. They were inline in the markup and
   are used more than once now — the address and the numbers appear both beside
   the office and beside the form. */
function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

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

    {/* The office and the photograph as one panel, on the same terms as every
        other page's opener: the address sets the height and the picture takes
        it, rather than a card and a 16/9 figure agreeing about neither. */}
    <section className="pad-xs">
      <div className="wrap">
        <div className="pintro rise">
          <div className="pintro__copy">
            <span className="eyebrow">Corporate office</span>
            <h2>Cosmox International Pvt. Ltd.</h2>
            <div className="contact-line">
              <PinIcon />
              <address>
                A2/N-59, 18/A, B, C/1, C/2, B/5, B/6<br />
                Ekta Industrial Estate, Tempa Gali<br />
                N.H. 8, Mangrol, Pipodara<br />
                Surat, Gujarat 394110, India
              </address>
            </div>
            <div className="contact-line">
              <PhoneIcon />
              <span><a href="tel:+919265943799">+91 92659 43799</a><br /><a href="tel:+918758194050">+91 87581 94050</a></span>
            </div>
            <div className="contact-line">
              <MailIcon />
              {/* TODO: replace with the live address, e.g. info@yourdomain.com */}
              <span className="tbd">General email — to be confirmed</span>
            </div>
          </div>
          <div className="pintro__media bg-media-industries" aria-hidden="true"></div>
        </div>
      </div>
    </section>

    <section className="pad-sm">
      <div className="wrap">
        <div className="grid grid-3">
          <div className="contact-card contact-card--desk rise">
            <h3>Sales &amp; business enquiries</h3>
            <p className="contact-card__note">Product availability, quotations, exports and bulk orders.</p>
            {/* TODO: add the sales email and direct line */}
            <p className="contact-card__note tbd">Direct line and email to be confirmed — meanwhile, please use the corporate numbers above.</p>
          </div>
          <div className="contact-card contact-card--desk rise">
            <h3>Technical &amp; R&amp;D support</h3>
            <p className="contact-card__note">Technical assistance, application guidance and research collaboration.</p>
            {/* TODO: add the technical support email and direct line */}
            <p className="contact-card__note tbd">Direct line and email to be confirmed.</p>
          </div>
          <div className="contact-card contact-card--desk rise">
            <h3>Export &amp; international</h3>
            <p className="contact-card__note">For global clients and international distributors.</p>
            {/* TODO: add the export email and direct line */}
            <p className="contact-card__note tbd">Direct line and email to be confirmed.</p>
          </div>
        </div>
      </div>
    </section>

    {/* The form used to be an 860px card centred in a full-width band with
        nothing either side of it. Its heading, its standing line and the
        numbers to call instead now hold a column of their own, so the band is
        a band rather than a card on a background. */}
    <section className="pad-sm bg-sand">
      <div className="wrap">
        <div className="enquiry">
          <div className="enquiry__copy rise">
            <span className="eyebrow">General enquiry</span>
            <h2>Send us a message</h2>
            <p className="lede">Questions, feedback or partnership requests — tell us what you need and the right team will get back to you.</p>
            <div className="contact-line">
              <PhoneIcon />
              <span><a href="tel:+919265943799">+91 92659 43799</a><br /><a href="tel:+918758194050">+91 87581 94050</a></span>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>

    <section className="pad-sm">
      <div className="wrap">
        <div className="cta cta--night rise">
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
