import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StandingsSection from "@/components/StandingsSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Clasificacion = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <StandingsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Clasificacion;