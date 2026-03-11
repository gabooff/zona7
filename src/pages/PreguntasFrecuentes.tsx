import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
  linkLabel?: string;
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
    answer:
      "Los partidos se disputan los días sábado en uno de los siguientes bloques horarios: 12:00 a 13:00, 13:30 a 14:30, 15:00 a 16:00 o 16:30 a 17:30. Cada fecha contempla 4 partidos con 30 minutos de intervalo entre encuentros. Los horarios se asignan de forma aleatoria y rotativa para asegurar una distribución equitativa durante el campeonato.",
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
    answer:
      "En Zona 7 premiamos el rendimiento durante todo el campeonato. El primer lugar recibe la copa de campeón, medallas para todos los integrantes del equipo, 2 botellas de Pisco Alto del Carmen 1,5L y $200.000 para el asado de celebración. El segundo lugar recibe medallas, 2 botellas de Pisco Alto del Carmen 1,5L, 24 cervezas Patagonia Hoppy Lager y un pack de asado que incluye 2 kg de costillar de cerdo, 2 kg de lomo vetado y 2 kg de chorizo parrillero. El tercer lugar recibe medallas, 2 botellas de Pisco Alto del Carmen 1,5L y 24 cervezas Patagonia Hoppy Lager. Las cervezas podrán ser reemplazadas por otra marca de categoría similar, previa coordinación con la organización.",
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
}: {
  question: string;
  answer: string;
  link?: string;
  linkLabel?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-900 shadow-md transition hover:shadow-lg hover:border-red-500">
      <button
  type="button"
  onClick={() => setOpen(!open)}
  className="flex w-full items-center justify-between px-6 py-5 text-left bg-transparent hover:bg-neutral-800 transition"
>
        
        <span className="text-lg font-semibold text-white">{question}</span>
        <span className="ml-4 text-2xl font-bold text-red-500">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
  <div className="px-6 pb-5 pt-1 bg-neutral-900 text-gray-300">
          <p className="leading-7">{answer}</p>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 hover:scale-105"
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
        <section className="container mx-auto max-w-5xl px-4">
          <div className="rounded-3xl bg-gradient-to-br from-black to-neutral-900 p-10 md:p-14 border border-red-600 shadow-[0_0_20px_rgba(255,0,0,0.4)]">
            <h1 className="mb-10 text-3xl md:text-4xl font-bold uppercase tracking-widest text-white border-b border-red-600 pb-4">
              Preguntas Frecuentes
            </h1>

            <div className="space-y-4">
              {faqData.map((item, index) => (
                <FAQAccordionItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  link={item.link}
                  linkLabel={item.linkLabel}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}