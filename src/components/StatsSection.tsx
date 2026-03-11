import { Target, Star, Award } from "lucide-react";

const stats = [
  {
    icon: Target,
    value: "12",
    label: "MÁXIMO GOLEADOR",
    player: "Carlos Mendoza",
    team: "Los Guerreros FC",
  },
  {
    icon: Star,
    value: "5",
    label: "MVP DEL TORNEO",
    player: "Diego Fuentes",
    team: "Deportivo Norte",
  },
  {
    icon: Award,
    value: "3",
    label: "MEJOR PORTERO",
    player: "Andrés Silva",
    team: "Real Santiago",
  },
];

const StatsSection = () => {
  return (
    <section id="estadisticas" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="zona-section-title text-center text-3xl md:text-5xl mb-12">
          ESTADÍSTICAS
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="zona-card text-center py-10 hover:zona-card-highlight transition-all duration-300"
            >
              <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <p className="font-display text-6xl text-primary mb-2">{stat.value}</p>
              <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
                {stat.label}
              </p>
              <p className="font-semibold text-foreground">{stat.player}</p>
              <p className="text-muted-foreground text-sm">{stat.team}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
