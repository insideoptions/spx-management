import PageSchema from "@/components/redesign/page-schema";
import { PageHero, Eyebrow, Arrow } from "@/components/redesign/pages";
import ContactForm from "@/components/redesign/contact-form";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("/contact");
export default function Contact() {
  return (
    <>
      <PageSchema path="/contact" />
      <PageHero
        eyebrow="LET’S TALK"
        title={
          <>
            Every partnership starts
            <br />
            <em>with a conversation.</em>
          </>
        }
        text="Learn more about the firm, our investment approach, and whether we’re the right fit for your objectives."
      />
      <section id="contact" className="contact-grid wrap">
        <div className="contact-details">
          <Eyebrow>GET IN TOUCH</Eyebrow>
          <a className="contact-email" href="mailto:David@spxmgmt.com">
            David@spxmgmt.com <Arrow />
          </a>
          <div className="address">
            <span className="eyebrow">SPX MGMT LLC</span>
            <p>
              3827 S Carson St #3169
              <br />
              Carson City, NV 89701
            </p>
          </div>
          <p className="fineprint">
            Investment opportunities are intended for accredited investors and
            are subject to qualification and applicable offering documents.
          </p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
