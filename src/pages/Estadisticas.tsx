import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Estadisticas = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <StatsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Estadisticas;