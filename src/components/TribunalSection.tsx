import { ChevronDown } from "lucide-react";

const sanctions = [
  {
    player: "Juan Pérez",
    team: "Unidos FC",
    redCards: 1,
    matchday: "Fecha 3",
    suspension: "1 fecha",
  },
  {
    player: "Roberto Castro",
    team: "Estrella Roja",
    redCards: 1,
    matchday: "Fecha 4",
    suspension: "2 fechas",
  },
];

const TribunalSection = () => {
  return (
    <section id="tribunal" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="zona-section-title text-center text-3xl md:text-5xl mb-12">
          TRIBUNAL DE DISCIPLINA
        </h2>

        <div className="zona-card max-w-4xl mx-auto">
          {/* Filter */}
          <div className="mb-6 space-y-4">
            <p className="zona-table-header">FILTRAR POR DÍA</p>
            <button className="w-full flex items-center justify-between bg-muted border-2 border-primary rounded-lg px-4 py-3 text-foreground font-medium">
              <span>TODOS LOS DÍAS</span>
              <ChevronDown className="w-5 h-5 text-primary" />
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="zona-table-header text-left py-3 px-2">JUGADOR</th>
                  <th className="zona-table-header text-left py-3 px-2">EQUIPO</th>
                  <th className="zona-table-header text-center py-3 px-2">ROJAS</th>
                  <th className="zona-table-header text-center py-3 px-2">FECHA EXPULSIÓN</th>
                  <th className="zona-table-header text-center py-3 px-2">SANCIÓN</th>
                </tr>
              </thead>
              <tbody>
                {sanctions.map((sanction, index) => (
                  <tr 
                    key={index}
                    className="border-b border-border hover:bg-muted/50 transition-colors"
                  >
                    <td className="py-4 px-2 font-semibold text-foreground">
                      {sanction.player}
                    </td>
                    <td className="py-4 px-2 text-muted-foreground">{sanction.team}</td>
                    <td className="py-4 px-2 text-center text-destructive font-bold">
                      {sanction.redCards}
                    </td>
                    <td className="py-4 px-2 text-center text-muted-foreground">
                      {sanction.matchday}
                    </td>
                    <td className="py-4 px-2 text-center text-foreground">
                      {sanction.suspension}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TribunalSection;
