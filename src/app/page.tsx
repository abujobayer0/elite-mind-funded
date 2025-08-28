import { Header, HeroSection, Footer } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}
