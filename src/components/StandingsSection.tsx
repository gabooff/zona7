import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Team = {
  id: number;
  name: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goals_for: number;
  goals_against: number;
  goal_difference: number;
  points: number;
};

const StandingsSection = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    const loadStandings = async () => {
      const { data, error } = await supabase
        .from("standings")
        .select("*")
        .order("points", { ascending: false })
        .order("goal_difference", { ascending: false })
        .order("goals_for", { ascending: false });

      console.log("STANDINGS DATA:", data);
      console.log("STANDINGS ERROR:", error);

      if (error) {
        console.error("Error cargando standings:", error);
      } else {
        setTeams(data || []);
      }
    };

    loadStandings();
  }, []);

  return (
    <section id="clasificacion" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="zona-section-title mb-12 text-center text-3xl md:text-5xl">
          CLASIFICACIÓN
        </h2>

        <div className="zona-card mx-auto max-w-4xl">
          <div className="mb-6 space-y-4">
            <p className="zona-table-header">FILTRAR POR TORNEO</p>
            <button className="flex w-full items-center justify-between rounded-lg border-2 border-primary bg-muted px-4 py-3 font-medium text-foreground">
              <span>TORNEO APERTURA 2026</span>
              <ChevronDown className="h-5 w-5 text-primary" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="zona-table-header px-2 py-3 text-left">POS</th>
                  <th className="zona-table-header px-2 py-3 text-left">EQUIPO</th>
                  <th className="zona-table-header px-2 py-3 text-center">PJ</th>
                  <th className="zona-table-header px-2 py-3 text-center">GF</th>
                  <th className="zona-table-header px-2 py-3 text-center">GC</th>
                  <th className="zona-table-header px-2 py-3 text-center">PTS</th>
                </tr>
              </thead>

              <tbody>
                {teams.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-2 py-6 text-center text-white">
                      No hay datos disponibles
                    </td>
                  </tr>
                ) : (
                  teams.map((team, index) => (
                    <tr
                      key={team.id}
                      className="border-b border-border transition-colors hover:bg-muted/50"
                    >
                      <td
                        className={`px-2 py-4 font-bold ${
                          index < 3 ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {index + 1}
                      </td>

                      <td className="px-2 py-4 font-semibold text-foreground">
                        {team.name}
                      </td>

                      <td className="px-2 py-4 text-center text-muted-foreground">
                        {team.played}
                      </td>

                      <td className="px-2 py-4 text-center text-muted-foreground">
                        {team.goals_for}
                      </td>

                      <td className="px-2 py-4 text-center text-muted-foreground">
                        {team.goals_against}
                      </td>

                      <td className="px-2 py-4 text-center font-bold text-foreground">
                        {team.points}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandingsSection;