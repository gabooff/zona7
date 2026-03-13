import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TribunalSection from "@/components/TribunalSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Tribunal = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <TribunalSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Tribunal;