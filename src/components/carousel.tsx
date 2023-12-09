import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel, { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

type PropType = {
  slides: any[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const [selInd, setSelInd] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onInit = useCallback((emblaApi: EmblaCarouselType) => setScrollSnaps(emblaApi.scrollSnapList()), []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => setSelInd(emblaApi.selectedScrollSnap()), []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className='o-hidden' ref={emblaRef}>
      <div className='d-flex'>
        {slides.map((slide, index) => (
          <div className='p-05' style={{ flex: '0 0 calc(100% - 0.5em)' }} key={index}>
            {slide}
          </div>
        ))}
      </div>
      <div>
        {scrollSnaps.map((_, index) => (
          <button
            className={`bg-light-gray pointer m-05 ${index === selInd ? 'bg-light' : ''}`}
            style={{ width: 20, height: 20 }}
            key={index}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
