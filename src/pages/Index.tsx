import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ScheduleSection from "@/components/ScheduleSection";
import StandingsSection from "@/components/StandingsSection";
import StatsSection from "@/components/StatsSection";
import TribunalSection from "@/components/TribunalSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ScheduleSection />
        <StandingsSection />
        <StatsSection />
        <TribunalSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
