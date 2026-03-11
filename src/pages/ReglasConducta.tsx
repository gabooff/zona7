export default function ReglasConducta() {
  return (
  <>
    <Header />

    <main className="min-h-screen bg-secondary py-12">
      <section className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">

          <h1 className="font-display text-2xl md:text-3xl mb-8 text-gray-900">
            Reglamento de Disciplina y Conducta
          </h1>

          {/* PRINCIPIOS GENERALES */}
          <section className="mb-8">
            <h2 className="font-display text-xl mb-3">Principios Generales</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                Todos los partidos se jugarán bajo las Reglas del Fútbol 7,
                adaptadas al carácter amateur del torneo.
              </li>
              <li>
                Las decisiones arbitrales son inapelables durante el partido.
              </li>
              <li>
                El respeto entre jugadores, árbitros y organización es
                obligatorio.
              </li>
              <li>
                La organización se reserva el derecho de aplicar sanciones
                adicionales cuando corresponda.
              </li>
            </ul>
          </section>

          {/* TARJETAS */}
          <section className="mb-8">
            <h2 className="font-display text-xl mb-3">
              Tarjetas y Sanciones Disciplinarias
            </h2>

            <div className="mb-4">
              <h3 className="font-display text-lg mb-2">
                🟨 Tarjeta Amarilla
              </h3>
              <p className="text-gray-700 mb-2">
                Se aplicará por faltas antideportivas, reclamos reiterados,
                demoras deliberadas o conducta inadecuada leve.
              </p>
              <p className="text-gray-700">
                La acumulación de <strong>3 tarjetas amarillas</strong> implica:
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-700">
                <li>1 partido de suspensión automática</li>
                <li>El conteo se reinicia tras cumplir la sanción</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-lg mb-2">🟥 Tarjeta Roja</h3>

              <p className="font-semibold mb-1">🔴 Roja directa:</p>
              <ul className="list-disc pl-5 text-gray-700 mb-2">
                <li>Conducta violenta</li>
                <li>Insultos graves</li>
                <li>Agresión física o intento de agresión</li>
                <li>Juego brusco grave</li>
                <li>Escupir a un rival o árbitro</li>
              </ul>

              <p className="text-gray-700 mb-2">
                <strong>Sanción mínima:</strong> 1 fecha de suspensión.
              </p>
              <p className="text-gray-700">
                La organización podrá aumentar la sanción según informe
                arbitral.
              </p>

              <p className="mt-2 font-semibold">
                🔴 Doble amarilla: 1 fecha de suspensión automática.
              </p>
            </div>
          </section>

          {/* FALTAS GRAVES Y MUY GRAVES */}
          <section className="mb-8">
            <h2 className="font-display text-xl mb-3">
              Faltas Graves y Muy Graves
            </h2>

            <div className="mb-4">
              <h3 className="font-display text-lg mb-2">
                Faltas Graves
              </h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Reclamos agresivos</li>
                <li>Insultos reiterados</li>
                <li>Abandono de cancha sin autorización</li>
                <li>Negarse a continuar el partido</li>
              </ul>
              <p className="mt-2 text-gray-700">
                <strong>Sanción:</strong> 1 a 2 fechas de suspensión.
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg mb-2">
                Faltas Muy Graves
              </h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Agresión física</li>
                <li>Amenazas</li>
                <li>Intento de agresión a árbitro u organización</li>
                <li>Daños a la infraestructura</li>
                <li>Racismo, xenofobia u homofobia</li>
              </ul>
              <p className="mt-2 text-gray-700">
                <strong>Sanción:</strong> Expulsión del torneo y posible veto.
              </p>
            </div>
          </section>

          {/* CONDUCTA DE LOS EQUIPOS */}
          <section className="mb-8">
            <h2 className="font-display text-xl mb-3">
              Conducta de los Equipos
            </h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                Cada equipo es responsable de jugadores, cuerpo técnico y
                acompañantes.
              </li>
              <li>
                El capitán es el único autorizado para dialogar con el árbitro.
              </li>
              <li>
                El ingreso a la cancha de personas no inscritas está prohibido.
              </li>
            </ul>
          </section>

          {/* PUNTUALIDAD Y PRESENTACIÓN */}
          <section className="mb-8">
            <h2 className="font-display text-xl mb-3">
              Puntualidad y Presentación
            </h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Presentarse 10 minutos antes del partido.</li>
              <li>Máximo 5 minutos de espera.</li>
              <li>Inasistencia implica W.O. (3–0).</li>
              <li>Tres W.O. implican expulsión del torneo.</li>
            </ul>
          </section>

          {/* SANCIONES ADMINISTRATIVAS */}
          <section className="mb-8">
            <h2 className="font-display text-xl mb-3">
              Sanciones Administrativas
            </h2>
            <p className="text-gray-700">
              La organización podrá aplicar descuento de puntos, multas
              internas, suspensión de jugadores o expulsión del equipo cuando
              exista reincidencia o conductas que afecten el desarrollo del
              torneo.
            </p>
          </section>

          {/* ALCOHOL Y DROGAS */}
          <section className="mb-8">
            <h2 className="font-display text-xl mb-3">Alcohol y Drogas</h2>
            <p className="text-gray-700">
              Está prohibido jugar bajo los efectos del alcohol o drogas. El
              árbitro podrá impedir la participación del jugador.
            </p>
          </section>

          {/* APELACIONES */}
          <section className="mb-8">
            <h2 className="font-display text-xl mb-3">Apelaciones</h2>
            <p className="text-gray-700">
              Las sanciones disciplinarias podrán ser revisadas solo por la
              organización dentro de las 24 horas posteriores al partido y
              únicamente mediante el capitán del equipo.
            </p>
          </section>

          {/* ESPÍRITU DEL TORNEO */}
          <section>
            <h2 className="font-display text-xl mb-3">
              Espíritu del Torneo
            </h2>
            <p className="text-gray-700">
              Zona 7 es una liga competitiva y recreativa donde se privilegia el
              juego limpio, el respeto y la sana convivencia.
            </p>
          </section>
          
        </div>
      </section>
    </main>

    <Footer />
   </>
  );
}
