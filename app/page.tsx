import HeroSection from "@/components/hero-section";
import Features from "@/components/features-1";
import ContentSection from "@/components/content-1";
import FoundersSection from "@/components/founders-section";
import CallToAction from "@/components/call-to-action";
import FooterSection from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <ContentSection />
      <FoundersSection />
      <CallToAction />
      <FooterSection />
    </>
  );
}
