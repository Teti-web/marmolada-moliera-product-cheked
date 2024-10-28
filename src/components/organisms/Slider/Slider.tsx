'use client';

import React, { FC, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { SliderProps } from './Slider.type';
import Asset from '@/components/atoms/Assets/Asset';

const Slider: FC<SliderProps> = ({ sliders }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const intervalRef = useRef<number | null>(null);

  const animateSlides = () => {
    gsap.fromTo(
      slidesRef.current[currentSlide],
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
    gsap.to(
      slidesRef.current[(currentSlide - 1 + sliders.length) % sliders.length],
      { opacity: 0, duration: 1 }
    );
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % sliders.length);
    }, 10000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [sliders.length]);

  useEffect(() => {
    animateSlides();
  }, [currentSlide]);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {sliders.map((slide, index) => (
        <div
          key={index}
          ref={el => {
            if (el) slidesRef.current[index] = el;
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: index === currentSlide ? 1 : 0,
            transition: 'opacity 1s',
          }}
        >
          <Asset {...slide} />
        </div>
      ))}
    </div>
  );
};

export default Slider;
