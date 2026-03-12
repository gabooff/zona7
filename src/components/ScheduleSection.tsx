import { Calendar, ChevronDown, Sun } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";

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

type Match = {
  id: number;
  round: number;
  match_date: string;
  match_time: string;
  home_team: string;
  away_team: string;
  home_score: number | null;
  away_score: number | null;
};

const ScheduleSection = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [selectedRound, setSelectedRound] = useState<number>(1);

  const loadFixture = async () => {
    const { data, error } = await supabase
      .from("fixture")
      .select("*")
      .order("round", { ascending: true })
      .order("match_date", { ascending: true })
      .order("match_time", { ascending: true });

    if (error) {
      console.error("Error cargando fixture:", error);
    } else {
      setMatches(data || []);
    }
  };

  useEffect(() => {
    loadFixture();

    const channel = supabase
      .channel("fixture-refresh")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "matches",
        },
        async () => {
          await loadFixture();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const groupedMatches = useMemo(() => {
    return matches.reduce<Record<number, Match[]>>((acc, match) => {
      if (!acc[match.round]) acc[match.round] = [];
      acc[match.round].push(match);
      return acc;
    }, {});
  }, [matches]);

  const availableRounds = Object.keys(groupedMatches)
    .map(Number)
    .sort((a, b) => a - b);

  const currentMatches = groupedMatches[selectedRound] || [];

  return (
    <section id="fixture" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="zona-section-title mb-12 text-center text-3xl md:text-5xl">
          ¿DÓNDE Y CUÁNDO JUGAMOS?
        </h2>

        <div className="mx-auto mb-16 grid max-w-4xl gap-6 md:grid-cols-2">
          {schedules.map((schedule, index) => (
            <div
              key={index}
              className="zona-card-highlight py-8 text-center transition-transform duration-300 hover:scale-105"
            >
              <schedule.icon className="mx-auto mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-4 font-display text-2xl tracking-wider text-primary">
                {schedule.title}
              </h3>
              <p className="mb-1 font-semibold text-foreground">
                {schedule.location}
              </p>
              <p className="text-sm text-muted-foreground">{schedule.address}</p>
            </div>
          ))}
        </div>

        <h2 className="zona-section-title mb-10 text-center text-3xl md:text-5xl">
          FIXTURE
        </h2>

        <p className="mb-6 text-center text-sm text-muted-foreground">
          📍 Estadio San Jorge · Paul Harris 9388, Las Condes
        </p>

        <div className="mx-auto mb-8 max-w-4xl">
          <label className="zona-table-header mb-3 block">SELECCIONAR FECHA</label>
          <div className="relative">
            <select
              value={selectedRound}
              onChange={(e) => setSelectedRound(Number(e.target.value))}
              className="w-full appearance-none rounded-lg border-2 border-primary bg-muted px-4 py-3 pr-12 font-medium text-foreground outline-none"
            >
              {availableRounds.map((round) => (
                <option key={round} value={round}>
                  Fecha {round}
                </option>
              ))}
            </select>

            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-primary" />
          </div>
        </div>

        <div className="mx-auto max-w-4xl space-y-8">
          <div className="zona-card">
            <h3 className="mb-6 text-2xl font-bold text-primary">
              FECHA {selectedRound}
            </h3>

            <div className="space-y-4">
              {currentMatches.length === 0 ? (
                <p className="text-center text-muted-foreground">
                  No hay partidos disponibles para esta fecha.
                </p>
              ) : (
                currentMatches.map((match) => (
                  <div
                    key={match.id}
                    className="flex items-center justify-between border-b border-border pb-3"
                  >
                    <div className="font-semibold text-foreground">
                      {match.home_team}
                    </div>

                    <div className="min-w-[90px] text-center text-2xl font-bold tracking-widest text-primary">
                      {match.home_score === 0 && match.away_score === 0
                        ? "vs"
                        : `${match.home_score} : ${match.away_score}`}
                    </div>

                    <div className="font-semibold text-foreground">
                      {match.away_team}
                    </div>

                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">
                        {match.match_time}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Estadio San Jorge
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;