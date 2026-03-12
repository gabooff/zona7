import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdminResultsSection from "@/components/AdminResultsSection";

const ADMIN_PASSWORD = "Roccosingirikokiri54321.";

const AdminResultados = () => {
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === ADMIN_PASSWORD) {
      setAuthorized(true);
      setError("");
    } else {
      setError("Contraseña incorrecta");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-16">
        {authorized ? (
          <AdminResultsSection />
        ) : (
          <section className="container mx-auto px-4">
            <div className="zona-card mx-auto max-w-md">
              <h2 className="zona-section-title mb-8 text-center text-3xl md:text-4xl">
                ACCESO ADMIN
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="zona-table-header block">
                  INGRESA LA CONTRASEÑA
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border-2 border-primary bg-muted px-4 py-3 text-foreground outline-none"
                  placeholder="Contraseña"
                />

                {error && (
                  <p className="text-sm font-medium text-red-500">{error}</p>
                )}

                <button
                  type="submit"
                  className="w-full rounded-lg border border-primary bg-primary px-4 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
                >
                  Entrar
                </button>
              </form>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default AdminResultados;