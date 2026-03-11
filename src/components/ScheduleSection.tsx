import { Calendar, Sun } from "lucide-react";

const schedules = [
  {
    icon: Calendar,
    title: "TODOS LOS SÁBADOS",
    location: "Estadio San Jorge",
    address: "Paul Harris 9388, Las Condes, Región Metropolitana",
  },
  {
    icon: Sun,
    title: "¿EN QUÉ HORARIOS?",
    location: "En Bloques Rotativos",
    address: "(12:00 - 13:00), (13:30 - 14:30), (15:00 - 16:00), (16:30 - 17:30).",
  },
];

const ScheduleSection = () => {
  return (
    <section id="fixture" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="zona-section-title text-center text-3xl md:text-5xl mb-12">
          ¿DÓNDE Y CUÁNDO JUGAMOS?
        </h2>
        
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {schedules.map((schedule, index) => (
            <div 
              key={index}
              className="zona-card-highlight text-center py-8 hover:scale-105 transition-transform duration-300"
            >
              <schedule.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-display text-2xl text-primary mb-4 tracking-wider">
                {schedule.title}
              </h3>
              <p className="font-semibold text-foreground mb-1">
                {schedule.location}
              </p>
              <p className="text-muted-foreground text-sm">
                {schedule.address}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
