import React, { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import alfaLogo from '@/assets/alfa.png';
import caveralLogo from '@/assets/caveral.png';
import gpwlLogo from '@/assets/gpwl.png';
import guliverLogo from '@/assets/guliver.png';
import optimaLogo from '@/assets/optima.png';
import palomoLogo from '@/assets/palomo.png';
import ritexLogo from '@/assets/ritex.png';


const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    dragFree: true
  });

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const intervalId = setInterval(autoplay, 3000);
    return () => clearInterval(intervalId);
  }, [emblaApi, autoplay]);

  const logos = [
    { src: alfaLogo, alt: "Alfa Forwarding" },
    { src: caveralLogo, alt: "Caveral" },
    { src: gpwlLogo, alt: "GPW Logistics" },
    { src: guliverLogo, alt: "Guliver Transport & Spedycja" },
    { src: optimaLogo, alt: "Optima Logistics Group" },
    { src: palomoLogo, alt: "Palomo Solutions" },
    { src: ritexLogo, alt: "Ritex Cargo" }
  ];

  return (
    <section className="bg-[rgba(249,249,249,1)] self-stretch w-full mt-[135px] px-[200px] py-[100px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <h2 className="text-czarny text-center text-[42px] font-barlow-condensed font-semibold tracking-[1.26px] max-md:max-w-full">
        Z systemu korzysta już ponad{" "}
        <span style={{color: 'rgba(102,188,152,1)'}}>800 spedytorów</span>,
        zaufali nam m.in.:
      </h2>
      <div className="overflow-hidden mt-20 max-md:mt-10" ref={emblaRef}>
        <div className="flex gap-[150px] max-md:gap-[80px]">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-[0_0_auto] flex items-center justify-center min-w-[150px]">
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain h-[60px] w-auto max-w-[200px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
