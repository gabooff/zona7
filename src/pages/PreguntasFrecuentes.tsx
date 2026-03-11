import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type FAQItem = {
  question: string;
  answer?: string;
  link?: string;
  linkLabel?: string;
  customContent?: React.ReactNode;
};

const faqData: FAQItem[] = [
  {
    question: "¿Cómo es el proceso de inscripción?",
    answer:
      "La Liga Zona 7 funciona bajo modalidad de preinscripción sin pago inicial. El torneo se confirma únicamente cuando se completa el mínimo de 8 equipos inscritos. Una vez confirmado el campeonato, cada equipo tendrá un plazo de 48 horas para pagar la inscripción y asegurar su cupo. En caso de no completarse los equipos necesarios, no se solicitará ningún pago, evitando devoluciones y molestias.",
  },
  {
    question: "¿Dónde puedo inscribir a mi equipo?",
    answer:
      "La inscripción se realiza a través de nuestro formulario oficial de preinscripción disponible en esta página. Una vez completado, la organización se pondrá en contacto con el capitán del equipo para confirmar el cupo y enviar los detalles del pago. Los cupos se asignan por orden de confirmación.",
  },
  {
    question: "¿Cuál es la modalidad del campeonato?",
    answer:
      "El campeonato Zona 7 se juega en formato todos contra todos ida y vuelta. Cada equipo enfrentará a los demás equipos en dos oportunidades a lo largo del torneo. Todos los partidos suman puntos para la tabla general, que definirá las posiciones finales del campeonato.",
  },
  {
    question: "¿Qué precio tiene la liga?",
    answer:
      "El valor de inscripción será informado directamente por la organización durante el proceso de confirmación del torneo, una vez completado el mínimo de equipos necesarios para iniciar la competencia.",
  },
  {
    question: "¿Cuántas fechas son?",
    answer:
      "La liga está compuesta por 14 fechas oficiales con la participación de 8 equipos. En cada fecha se disputan 4 partidos, asegurando que todos los equipos compitan en cada jornada. Cada equipo tiene 14 partidos garantizados durante el campeonato, todos con arbitraje oficial incluido en la inscripción.",
  },
  {
    question: "¿Qué días y a qué hora se juega?",
    customContent: (
      <div className="space-y-4 text-gray-300">
        <p className="text-[17px] leading-8">
          Los partidos se disputan los días <strong className="text-white">sábado</strong>, en uno de los
          siguientes bloques horarios:
        </p>

        <ul className="list-disc space-y-2 pl-6 text-[17px] leading-8 marker:text-red-500">
          <li>12:00 a 13:00</li>
          <li>13:30 a 14:30</li>
          <li>15:00 a 16:00</li>
          <li>16:30 a 17:30</li>
        </ul>

        <p className="text-[17px] leading-8">
          Cada fecha contempla 4 partidos con 30 minutos de intervalo entre encuentros.
          Los horarios se asignan de forma aleatoria y rotativa para asegurar una
          distribución equitativa durante el campeonato.
        </p>
      </div>
    ),
  },
  {
    question: "¿Dónde se juega?",
    answer:
      "Los partidos se disputan en el Estadio San Jorge, ubicado en Paul Harris 9388. El recinto cuenta con estacionamientos al interior del estadio; sin embargo, durante los fines de semana existe alta demanda, por lo que no es posible garantizar disponibilidad. De todas maneras, en el exterior del estadio existen zonas de estacionamiento en los alrededores para quienes no alcancen cupo dentro del recinto.",
    link: "https://maps.app.goo.gl/xbDoitjatH6baWu39?g_st=ic",
    linkLabel: "Ver ubicación en Google Maps",
  },
  {
    question: "¿Qué me puedo ganar?",
    customContent: (
      <div className="space-y-8 text-gray-300">
        <p className="text-[17px] leading-8">
          En Zona 7 premiamos el rendimiento durante todo el campeonato. Estos son los
          premios oficiales:
        </p>

        <div className="space-y-3">
          <h4 className="text-xl font-bold text-white">🥇 Primer Lugar</h4>
          <ul className="list-disc space-y-2 pl-6 text-[17px] leading-8 marker:text-red-500">
            <li>Copa de campeón</li>
            <li>Medallas para todos los integrantes</li>
            <li>2 botellas de Pisco Alto del Carmen 1,5L</li>
            <li>$200.000 para el asado de los campeones</li>
          </ul>
          <p className="text-[17px] leading-8">
            El monto en dinero será entregado al equipo para que lo administren libremente
            en su celebración.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-xl font-bold text-white">🥈 Segundo Lugar</h4>
          <ul className="list-disc space-y-2 pl-6 text-[17px] leading-8 marker:text-red-500">
            <li>Medallas para todos los integrantes</li>
            <li>2 botellas de Pisco Alto del Carmen 1,5L</li>
            <li>24 cervezas Patagonia Hoppy Lager lata 470cc</li>
            <li>Pack asado, que incluye:</li>
            <li>2 kg Costillar de Cerdo</li>
            <li>2 kg Lomo Vetado</li>
            <li>2 kg Chorizo Parrillero</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-xl font-bold text-white">🥉 Tercer Lugar</h4>
          <ul className="list-disc space-y-2 pl-6 text-[17px] leading-8 marker:text-red-500">
            <li>Medallas para todos los integrantes</li>
            <li>2 botellas de Pisco Alto del Carmen 1,5L</li>
            <li>24 cervezas Patagonia Hoppy Lager lata 470cc</li>
          </ul>
        </div>

        <p className="text-[17px] leading-8">
          Las cervezas podrán ser reemplazadas por otra marca de categoría similar, previa
          coordinación con la organización.
        </p>
      </div>
    ),
  },
  {
    question: "¿Cuándo comienza la liga?",
    answer:
      "La temporada comienza el 11 de abril y está programada para finalizar el 11 de julio, completando las 14 fechas del campeonato. En caso de que alguna jornada deba suspenderse por motivos externos a la organización, como condiciones climáticas o disponibilidad del recinto, la fecha será reprogramada para garantizar el cumplimiento total del torneo.",
  },
];

function FAQAccordionItem({
  question,
  answer,
  link,
  linkLabel,
  customContent,
}: {
  question: string;
  answer?: string;
  link?: string;
  linkLabel?: string;
  customContent?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-900 shadow-md transition hover:border-red-500 hover:shadow-lg">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between bg-transparent px-6 py-5 text-left transition hover:bg-neutral-800"
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        <span className="ml-4 text-2xl font-bold text-red-500">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="bg-neutral-900 px-6 pb-6 pt-1">
          {customContent ? (
            customContent
          ) : (
            <p className="text-[17px] leading-8 text-gray-300">{answer}</p>
          )}

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-105 hover:bg-red-700"
            >
              {linkLabel || "Ver más"}
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function PreguntasFrecuentes() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-black py-16">
        <section className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
              Zona 7
            </p>
            <h1 className="mt-4 text-4xl font-extrabold text-white md:text-5xl">
              Preguntas Frecuentes
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-400">
              Resuelve tus dudas sobre inscripción, formato del torneo, horarios,
              premios y funcionamiento general de la liga.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6">
            {faqData.map((item) => (
              <FAQAccordionItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                link={item.link}
                linkLabel={item.linkLabel}
                customContent={item.customContent}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}