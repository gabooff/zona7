import { useEffect, useState } from "react";

type PhotoCarouselProps = {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
};

export default function PhotoCarousel({
  images,
  autoPlay = true,
  interval = 4000,
}: PhotoCarouselProps) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  if (!images.length) return null;

  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <div className="overflow-hidden rounded-2xl border border-red-500/40 shadow-lg">
        <img
          src={images[current]}
          alt={`Zona 7 ${current + 1}`}
          className="h-[260px] w-full object-cover transition duration-500 sm:h-[340px] md:h-[420px]"
        />
      </div>

      <button
        onClick={prevSlide}
        aria-label="Imagen anterior"
        className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-xl text-white transition hover:bg-red-600"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        aria-label="Imagen siguiente"
        className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-xl text-white transition hover:bg-red-600"
      >
        ❯
      </button>

      <div className="mt-5 flex justify-center gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a imagen ${index + 1}`}
            className={`h-3 w-3 rounded-full transition ${
              current === index
                ? "scale-125 bg-red-500"
                : "bg-gray-500 hover:bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}