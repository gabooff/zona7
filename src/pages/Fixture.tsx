import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScheduleSection from "@/components/ScheduleSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Fixture = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <ScheduleSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Fixture;