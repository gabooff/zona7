import logo from "@/assets/logo-zona7.png";

const HeroSection = () => {
  return (
    <section id="inicio" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="zona-card-highlight text-center py-12 md:py-16">
          <img 
            src={logo} 
            alt="Zona 7" 
            className="w-48 md:w-64 mx-auto mb-8 animate-float"
          />
          <h1 className="zona-section-title text-4xl md:text-6xl mb-4">
            ¿QUIÉNES SOMOS?
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Somos una comunidad que vive el fútbol 7 con intensidad, pasión y respeto. 
            En <span className="zona-accent-text">Zona 7</span> disfrutamos de competencias 
            emocionantes, sorteos exclusivos y actividades que hacen de cada temporada 
            una experiencia inolvidable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
