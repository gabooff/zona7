import { Instagram, Facebook, Mail, MapPin, Phone, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-zona7.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-neutral-900 border-t border-red-600 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          {/* Columna 1 */}
          <div className="flex flex-col items-center md:items-start gap-5">
            <img src={logo} alt="Zona 7" className="h-16 w-auto" />

            <div className="flex gap-4">
              <a
                href="https://instagram.com/zona7.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-neutral-800 hover:bg-red-600 transition"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-neutral-800 hover:bg-red-600 transition"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>

              <a
                href="mailto:contacto@zona7.cl"
                className="p-3 rounded-xl bg-neutral-800 hover:bg-red-600 transition"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Columna 2 */}
          <div className="text-center">
            <h3 className="text-red-500 font-bold uppercase tracking-wider mb-4">
              Enlaces rápidos
            </h3>

            <div className="flex flex-wrap justify-center gap-4 text-gray-300">
              <a href="#fixture" className="hover:text-red-500 transition">Fixture</a>
              <a href="#clasificacion" className="hover:text-red-500 transition">Clasificación</a>
              <a href="#estadisticas" className="hover:text-red-500 transition">Estadísticas</a>
              <a href="#equipos" className="hover:text-red-500 transition">Equipos</a>
              <a href="#tribunal" className="hover:text-red-500 transition">Tribunal</a>
              <Link to="/preguntas-frecuentes" className="hover:text-red-500 transition">
                Preguntas Frecuentes
              </Link>
              <Link to="/reglas-conducta" className="hover:text-red-500 transition">
                Reglas Conducta
              </Link>
            </div>
          </div>

          {/* Columna 3 */}
          <div className="text-center md:text-right">
            <h3 className="text-red-500 font-bold uppercase tracking-wider mb-4">
              Contacto
            </h3>

            <div className="space-y-3 text-gray-300">
              <p className="flex items-center justify-center md:justify-end gap-2">
                <MapPin className="w-4 h-4" />
                Complejo Deportivo Central - Santiago
              </p>

              <p className="flex items-center justify-center md:justify-end gap-2">
                <Phone className="w-4 h-4" />
                +56 9 1234 5678
              </p>

              <p className="flex items-center justify-center md:justify-end gap-2">
                <Mail className="w-4 h-4" />
                contacto.ligazona7@gmail.com
              </p>

              <p className="flex items-center justify-center md:justify-end gap-2">
                <Globe className="w-4 h-4" />
                www.zona7.cl
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;