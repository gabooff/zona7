import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";

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

const MatchEditor = ({
  match,
  onSaved,
}: {
  match: Match;
  onSaved: () => void;
}) => {
  const [homeScore, setHomeScore] = useState<number>(match.home_score ?? 0);
  const [awayScore, setAwayScore] = useState<number>(match.away_score ?? 0);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);

    const { error } = await supabase
      .from("matches")
      .update({
        home_score: homeScore,
        away_score: awayScore,
      })
      .eq("id", match.id);

    if (error) {
      console.error("Error guardando resultado:", error);
      alert("No se pudo guardar el resultado");
    } else {
      onSaved();
    }

    setSaving(false);
  };

  return (
    <div className="grid items-center gap-4 rounded-xl border border-border bg-muted/20 px-4 py-4 md:grid-cols-[1fr_auto_1fr_auto]">
      <div className="font-semibold text-foreground">{match.home_team}</div>

      <div className="flex items-center gap-2">
        <input
          type="number"
          min="0"
          value={homeScore}
          onChange={(e) => setHomeScore(Number(e.target.value))}
          className="w-16 rounded-md border border-primary bg-background px-2 py-1 text-center text-foreground"
        />
        <span className="font-bold text-primary">:</span>
        <input
          type="number"
          min="0"
          value={awayScore}
          onChange={(e) => setAwayScore(Number(e.target.value))}
          className="w-16 rounded-md border border-primary bg-background px-2 py-1 text-center text-foreground"
        />
      </div>

      <div className="font-semibold text-foreground">{match.away_team}</div>

      <button
        onClick={handleSave}
        disabled={saving}
        className="rounded-lg border border-primary bg-primary px-4 py-2 font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
      >
        {saving ? "Guardando..." : "Guardar"}
      </button>
    </div>
  );
};

const AdminResultsSection = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [selectedRound, setSelectedRound] = useState<number>(1);

  const loadMatches = async () => {
    const { data, error } = await supabase
      .from("fixture")
      .select("*")
      .order("round", { ascending: true })
      .order("match_date", { ascending: true })
      .order("match_time", { ascending: true });

    if (error) {
      console.error("Error cargando fixture admin:", error);
    } else {
      setMatches(data || []);
    }
  };

  useEffect(() => {
    loadMatches();
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
    <section className="py-16" id="admin-resultados">
      <div className="container mx-auto px-4">
        <h2 className="zona-section-title mb-10 text-center text-3xl md:text-5xl">
          PANEL DE RESULTADOS
        </h2>

        <div className="zona-card mx-auto max-w-5xl">
          <div className="mb-8">
            <label className="zona-table-header mb-3 block">
              SELECCIONAR FECHA
            </label>
            <select
              value={selectedRound}
              onChange={(e) => setSelectedRound(Number(e.target.value))}
              className="w-full rounded-lg border-2 border-primary bg-muted px-4 py-3 font-medium text-foreground outline-none"
            >
              {availableRounds.map((round) => (
                <option key={round} value={round}>
                  Fecha {round}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-4">
            {currentMatches.length === 0 ? (
              <p className="text-center text-muted-foreground">
                No hay partidos en esta fecha.
              </p>
            ) : (
              currentMatches.map((match) => (
                <MatchEditor
                  key={match.id}
                  match={match}
                  onSaved={loadMatches}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminResultsSection;