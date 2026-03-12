import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type StatsSummary = {
  top_attack_team: string;
  top_attack_value: number;
  best_defense_team: string;
  best_defense_value: number;
  top_points_team: string;
  top_points_value: number;
  most_wins_team: string;
  most_wins_value: number;
  most_conceded_team: string;
  most_conceded_value: number;
  best_goal_diff_team: string;
  best_goal_diff_value: number;
  unbeaten_team: string | null;
  unbeaten_value: number | null;
  lowest_attack_team: string;
  lowest_attack_value: number;
};

const StatsSection = () => {
  const [stats, setStats] = useState<StatsSummary | null>(null);

  const loadStats = async () => {
    const { data, error } = await supabase
      .from("stats_summary")
      .select("*")
      .single();

    if (error) {
      console.error("Error cargando estadísticas:", error);
    } else {
      setStats(data);
    }
  };

  useEffect(() => {
    loadStats();

    const channel = supabase
      .channel("stats-refresh")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "matches",
        },
        async () => {
          await loadStats();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <section id="estadisticas" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="zona-section-title mb-12 text-center text-3xl md:text-5xl">
          ESTADÍSTICAS
        </h2>

        {!stats ? (
          <div className="zona-card mx-auto max-w-6xl text-center text-white">
            Cargando estadísticas...
          </div>
        ) : (
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="zona-card-highlight py-8 text-center">
              <h3 className="mb-3 text-xl font-bold text-primary">
                ATAQUE MÁS GOLEADOR
              </h3>
              <p className="mb-2 text-xl font-semibold text-foreground">
                {stats.top_attack_team}
              </p>
              <p className="text-muted-foreground">
                {stats.top_attack_value} goles
              </p>
            </div>

            <div className="zona-card-highlight py-8 text-center">
              <h3 className="mb-3 text-xl font-bold text-primary">
                MEJOR DEFENSA
              </h3>
              <p className="mb-2 text-xl font-semibold text-foreground">
                {stats.best_defense_team}
              </p>
              <p className="text-muted-foreground">
                {stats.best_defense_value} goles recibidos
              </p>
            </div>

            <div className="zona-card-highlight py-8 text-center">
              <h3 className="mb-3 text-xl font-bold text-primary">
                LÍDER DEL TORNEO
              </h3>
              <p className="mb-2 text-xl font-semibold text-foreground">
                {stats.top_points_team}
              </p>
              <p className="text-muted-foreground">
                {stats.top_points_value} puntos
              </p>
            </div>

            <div className="zona-card-highlight py-8 text-center">
              <h3 className="mb-3 text-xl font-bold text-primary">
                MÁS VICTORIAS
              </h3>
              <p className="mb-2 text-xl font-semibold text-foreground">
                {stats.most_wins_team}
              </p>
              <p className="text-muted-foreground">
                {stats.most_wins_value} triunfos
              </p>
            </div>

            <div className="zona-card-highlight py-8 text-center">
              <h3 className="mb-3 text-xl font-bold text-primary">
                EQUIPO MÁS GOLEADO
              </h3>
              <p className="mb-2 text-xl font-semibold text-foreground">
                {stats.most_conceded_team}
              </p>
              <p className="text-muted-foreground">
                {stats.most_conceded_value} goles recibidos
              </p>
            </div>

            <div className="zona-card-highlight py-8 text-center">
              <h3 className="mb-3 text-xl font-bold text-primary">
                MEJOR DIFERENCIA
              </h3>
              <p className="mb-2 text-xl font-semibold text-foreground">
                {stats.best_goal_diff_team}
              </p>
              <p className="text-muted-foreground">
                {stats.best_goal_diff_value > 0 ? "+" : ""}
                {stats.best_goal_diff_value} DG
              </p>
            </div>

            <div className="zona-card-highlight py-8 text-center">
              <h3 className="mb-3 text-xl font-bold text-primary">
                EQUIPO INVICTO
              </h3>
              <p className="mb-2 text-xl font-semibold text-foreground">
                {stats.unbeaten_team || "Sin invictos"}
              </p>
              <p className="text-muted-foreground">
                {stats.unbeaten_team && stats.unbeaten_value !== null
                  ? `${stats.unbeaten_value} partidos`
                  : "—"}
              </p>
            </div>

            <div className="zona-card-highlight py-8 text-center">
              <h3 className="mb-3 text-xl font-bold text-primary">
                ATAQUE MENOS EFECTIVO
              </h3>
              <p className="mb-2 text-xl font-semibold text-foreground">
                {stats.lowest_attack_team}
              </p>
              <p className="text-muted-foreground">
                {stats.lowest_attack_value} goles
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default StatsSection;