import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Calendar,
  Trophy,
  BarChart3,
  Users,
  Gavel,
  CircleHelp,
} from "lucide-react";
import logo from "@/assets/logo-zona7.png";

const navItems = [
  { name: "Inicio", icon: Home, href: "#inicio" },
  { name: "Preguntas Frecuentes", icon: CircleHelp, href: "/preguntas-frecuentes" },
  { name: "Fixture", icon: Calendar, href: "#fixture" },
  { name: "Clasificación", icon: Trophy, href: "#clasificacion" },
  { name: "Estadísticas", icon: BarChart3, href: "#estadisticas" },
  { name: "Equipos", icon: Users, href: "#equipos" },
  { name: "Tribunal", icon: Gavel, href: "#tribunal" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getDesktopClass = (itemHref: string) => {
    const isPageLink = !itemHref.startsWith("#");
    const isActive = isPageLink && location.pathname === itemHref;

    return `transition-colors font-medium text-sm uppercase tracking-wide ${
      isActive
        ? "text-primary"
        : "text-muted-foreground hover:text-primary"
    }`;
  };

  const getMobileClass = (itemHref: string) => {
    const isPageLink = !itemHref.startsWith("#");
    const isActive = isPageLink && location.pathname === itemHref;

    return `flex items-center gap-3 transition-colors font-display text-xl tracking-wider ${
      isActive
        ? "text-primary"
        : "text-foreground hover:text-primary"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Zona 7" className="h-14 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) =>
            item.href.startsWith("#") ? (
              <a
                key={item.name}
                href={location.pathname === "/" ? item.href : `/${item.href}`}
                className={getDesktopClass(item.href)}
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className={getDesktopClass(item.href)}
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
          aria-label="Abrir menú"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-6 flex flex-col items-center gap-6">
            {navItems.map((item) =>
              item.href.startsWith("#") ? (
                <a
                  key={item.name}
                  href={location.pathname === "/" ? item.href : `/${item.href}`}
                  onClick={() => setIsOpen(false)}
                  className={getMobileClass(item.href)}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={getMobileClass(item.href)}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;