import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LatestResultsSection from "@/components/LatestResultsSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Resultados = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <LatestResultsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Resultados;