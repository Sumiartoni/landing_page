import { Navigation } from "@/sections/Navigation";
import { Hero } from "@/sections/Hero";
import { Features } from "@/sections/Features";
import { AppShowcase } from "@/sections/AppShowcase";
import { DownloadCTA } from "@/sections/DownloadCTA";
import { Footer } from "@/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      <Navigation />
      <main>
        <Hero />
        <section id="fitur">
          <Features />
        </section>
        <section id="galeri">
          <AppShowcase />
        </section>
        <section id="download">
          <DownloadCTA />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
;
