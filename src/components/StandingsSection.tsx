import { ChevronDown } from "lucide-react";

const teams = [
  { pos: 1, name: "Equipo 1", pj: 4, gf: 15, gc: 8, pts: 10 },
  { pos: 2, name: "Equipo 2", pj: 4, gf: 12, gc: 6, pts: 9 },
  { pos: 3, name: "Equipo 3", pj: 4, gf: 10, gc: 7, pts: 7 },
  { pos: 4, name: "Equipo 4", pj: 4, gf: 9, gc: 9, pts: 6 },
  { pos: 5, name: "Equipo 5", pj: 4, gf: 7, gc: 10, pts: 4 },
  { pos: 6, name: "Equipo 6", pj: 4, gf: 5, gc: 12, pts: 3 },
  { pos: 7, name: "Equipo 7", pj: 4, gf: 5, gc: 12, pts: 3 },
  { pos: 8, name: "Equipo 8", pj: 4, gf: 5, gc: 12, pts: 3 }
];

const StandingsSection = () => {
  return (
    <section id="clasificacion" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="zona-section-title text-center text-3xl md:text-5xl mb-12">
          CLASIFICACIÓN
        </h2>

        <div className="zona-card max-w-4xl mx-auto">
          {/* Filters */}
          <div className="mb-6 space-y-4">
            <p className="zona-table-header">FILTRAR POR TORNEO</p>
            <button className="w-full flex items-center justify-between bg-muted border-2 border-primary rounded-lg px-4 py-3 text-foreground font-medium">
              <span>TORNEO APERTURA 2026</span>
              <ChevronDown className="w-5 h-5 text-primary" />
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="zona-table-header text-left py-3 px-2">POS</th>
                  <th className="zona-table-header text-left py-3 px-2">EQUIPO</th>
                  <th className="zona-table-header text-center py-3 px-2">PJ</th>
                  <th className="zona-table-header text-center py-3 px-2">GF</th>
                  <th className="zona-table-header text-center py-3 px-2">GC</th>
                  <th className="zona-table-header text-center py-3 px-2">PTS</th>
                </tr>
              </thead>
              <tbody>
                {teams.map((team) => (
                  <tr 
                    key={team.pos} 
                    className="border-b border-border hover:bg-muted/50 transition-colors"
                  >
                    <td className={`py-4 px-2 font-bold ${team.pos <= 3 ? 'text-primary' : 'text-foreground'}`}>
                      {team.pos}
                    </td>
                    <td className="py-4 px-2 font-semibold text-foreground">
                      {team.name}
                    </td>
                    <td className="py-4 px-2 text-center text-muted-foreground">{team.pj}</td>
                    <td className="py-4 px-2 text-center text-muted-foreground">{team.gf}</td>
                    <td className="py-4 px-2 text-center text-muted-foreground">{team.gc}</td>
                    <td className="py-4 px-2 text-center font-bold text-foreground">{team.pts}</td>
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

export default StandingsSection;
