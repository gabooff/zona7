import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Sanction = {
  id: number;
  player_name: string;
  team_name: string;
  reason: string;
  matches_suspended: number;
  created_at?: string;
};

const TribunalSection = () => {
  const [sanctions, setSanctions] = useState<Sanction[]>([]);

  const loadSanctions = async () => {
    const { data, error } = await supabase
      .from("sanctions")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error cargando sanciones:", error);
    } else {
      setSanctions(data || []);
    }
  };

  useEffect(() => {
    loadSanctions();

    const channel = supabase
      .channel("sanctions-refresh")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "sanctions",
        },
        async () => {
          await loadSanctions();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <section id="tribunal" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="zona-section-title mb-12 text-center text-3xl md:text-5xl">
          TRIBUNAL
        </h2>

        <div className="zona-card mx-auto max-w-5xl">
          {sanctions.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No hay sanciones registradas.
            </p>
          ) : (
            <div className="space-y-4">
              {sanctions.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-border bg-muted/20 px-4 py-4"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-lg font-bold text-foreground">
                        {item.player_name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.team_name}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="font-semibold text-primary">
                        {item.matches_suspended} fecha
                        {item.matches_suspended > 1 ? "s" : ""} de suspensión
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-muted-foreground">
                    Motivo: {item.reason}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TribunalSection;