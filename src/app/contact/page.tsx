import { Header, Footer, ContactSection } from "@/components";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
