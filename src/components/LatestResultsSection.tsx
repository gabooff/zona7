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

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-CL");
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
    <section id="ultimos-resultados" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="zona-section-title mb-8 text-center text-3xl md:text-5xl">
          ÚLTIMOS RESULTADOS
        </h2>

        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-6">
          {results.length === 0 ? (
            <div className="zona-card w-full text-center text-white">
              Aún no hay resultados registrados.
            </div>
          ) : (
            results.map((match) => (
              <div
                key={match.id}
                className="zona-card-highlight w-full max-w-xl py-10 text-center"
              >
                <p className="mb-3 text-sm text-muted-foreground">
                  Fecha {match.round} · {match.match_time}
                </p>

                <div className="mb-4 flex items-center justify-center gap-5">
                  <span
                    className={`text-lg font-semibold ${
                      match.home_score > match.away_score
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {match.home_team}
                  </span>

                  <span className="min-w-[110px] text-center text-4xl font-bold tracking-widest text-primary">
                    {match.home_score} : {match.away_score}
                  </span>

                  <span
                    className={`text-lg font-semibold ${
                      match.away_score > match.home_score
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {match.away_team}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground">
                  {formatDate(match.match_date)} · Estadio San Jorge
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