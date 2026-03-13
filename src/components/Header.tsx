import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Calendar,
  Trophy,
  BarChart3,
  Gavel,
  CircleHelp,
} from "lucide-react";
import logo from "@/assets/logo-zona7.png";

const navItems = [
  { name: "Inicio", icon: Home, href: "/" },
  { name: "Preguntas Frecuentes", icon: CircleHelp, href: "/preguntas-frecuentes" },
  { name: "Fixture", icon: Calendar, href: "/fixture" },
  { name: "Clasificación", icon: Trophy, href: "/clasificacion" },
  { name: "Resultados", icon: Trophy, href: "/resultados" },
  { name: "Estadísticas", icon: BarChart3, href: "/estadisticas" },
  { name: "Tribunal", icon: Gavel, href: "/tribunal" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getDesktopClass = (itemHref: string) => {
    const isActive = location.pathname === itemHref;

    return `transition-colors font-medium text-sm uppercase tracking-wide ${
      isActive
        ? "text-primary"
        : "text-muted-foreground hover:text-primary"
    }`;
  };

  const getMobileClass = (itemHref: string) => {
    const isActive = location.pathname === itemHref;

    return `flex items-center gap-3 transition-colors font-display text-xl tracking-wider ${
      isActive
        ? "text-primary"
        : "text-foreground hover:text-primary"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Zona 7" className="h-14 w-auto" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={getDesktopClass(item.href)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg bg-muted p-2 transition-colors hover:bg-muted/80 md:hidden"
          aria-label="Abrir menú"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container mx-auto flex flex-col items-center gap-6 px-4 py-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={getMobileClass(item.href)}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;