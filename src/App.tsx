import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Fixture from "@/pages/Fixture";
import Clasificacion from "@/pages/Clasificacion";
import Resultados from "@/pages/Resultados";
import Estadisticas from "@/pages/Estadisticas";
import Tribunal from "@/pages/Tribunal";
import ReglasConducta from "@/pages/ReglasConducta";
import PreguntasFrecuentes from "@/pages/PreguntasFrecuentes";
import AdminResultados from "@/pages/AdminResultados";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Index />} />
          <Route path="/fixture" element={<Fixture />} />
          <Route path="/clasificacion" element={<Clasificacion />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/estadisticas" element={<Estadisticas />} />
          <Route path="/tribunal" element={<Tribunal />} />
          <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
          <Route path="/reglas-conducta" element={<ReglasConducta />} />
          <Route path="/admin-zona7-resultados" element={<AdminResultados />} />

          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;