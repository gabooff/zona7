import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type ResultMatch = {
  id: number;
  round: number;
  match_date: string;
  match_time: string;
  home_team: string;
  away_team: string;
  home_score: number;
  away_score: number;
};

const LatestResultsSection = () => {
  const [results, setResults] = useState<ResultMatch[]>([]);

  const loadResults = async () => {
    const { data, error } = await supabase
      .from("latest_results")
      .select("*")
      .limit(6);

    if (error) {
      console.error("Error cargando últimos resultados:", error);
    } else {
      setResults(data || []);
    }
  };

  useEffect(() => {
    loadResults();

    const channel = supabase
      .channel("latest-results-refresh")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "matches",
        },
        async () => {
          await loadResults();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <section id="ultimos-resultados" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="zona-section-title mb-12 text-center text-3xl md:text-5xl">
          ÚLTIMOS RESULTADOS
        </h2>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {results.length === 0 ? (
            <div className="zona-card col-span-full text-center text-white">
              Aún no hay resultados registrados.
            </div>
          ) : (
            results.map((match) => (
              <div key={match.id} className="zona-card-highlight py-8 text-center">
                <p className="mb-2 text-sm text-muted-foreground">
                  Fecha {match.round} · {match.match_date} · {match.match_time}
                </p>

                <div className="mb-3 flex items-center justify-center gap-4">
                  <span className="font-semibold text-foreground">
                    {match.home_team}
                  </span>

                  <span className="text-2xl font-bold text-primary">
                    {match.home_score} : {match.away_score}
                  </span>

                  <span className="font-semibold text-foreground">
                    {match.away_team}
                  </span>
                </div>

                <p className="text-xs text-muted-foreground">
                  Estadio San Jorge
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestResultsSection;