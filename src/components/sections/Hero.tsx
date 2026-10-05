'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ScrollReveal from '../ui/ScrollReveal';

const HERO_SLIDES = [
    {
        src: '/5.webp',
        alt: 'Pemandangan pantai dan perbukitan Lombok',
    },
    {
        src: '/6.webp',
        alt: 'Pantai Eksotis Lombok',
    },
    {
        src: '/7.webp',
        alt: 'Keindahan Alam Lombok',
    },
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-slide Hero setiap 5 detik
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    };

    return (
        <section id="hero" className="relative w-full z-30 font-sans select-none overflow-hidden h-screen min-h-[700px]">

            <h1 className="sr-only">
                Find Your Perfect Destination - RAMAH Tour Lombok
            </h1>

            {/* Background Image Slider */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
                {HERO_SLIDES.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                    >
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            fill
                            priority={index === 0}
                            fetchPriority={index === 0 ? "high" : "auto"}
                            sizes="100vw"
                            className="object-cover object-center brightness-90"
                        />
                    </div>
                ))}
            </div>

            {/* Container Utama */}
            <div className="relative z-20 h-full max-w-[1400px] mx-auto w-full flex flex-col justify-between px-6 md:px-12 lg:px-20 pt-32 pb-8">

                {/* Headline & Sub-headline */}
                <div className="flex-1 flex flex-col justify-center items-end w-full">
                    <div className="max-w-2xl text-left w-full md:w-auto md:mr-10 lg:mr-20 mt-10 md:mt-0">
                        <ScrollReveal direction="down" delay={0.1}>
                            <h2 className="text-6xl sm:text-7xl lg:text-[7rem] font-bold tracking-tight leading-[1] text-white drop-shadow-xl">
                                Find Your<br />
                                Perfect<br />
                                Destination
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal direction="up" delay={0.3}>
                            <p className="mt-6 text-sm sm:text-base lg:text-[17px] text-white/95 leading-relaxed max-w-[28rem] font-medium drop-shadow-md">
                                Discover breathtaking destinations, plan your perfect itinerary, and book your trip with ease — all in one place.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Bottom Left Membership Card */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end w-full gap-6">
                    <ScrollReveal direction="right" delay={0.4}>
                        <div
                            onClick={handleNextSlide}
                            title="Klik untuk lihat foto berikutnya"
                            className="bg-white rounded-[1.5rem] p-3 flex items-center gap-4 shadow-2xl max-w-sm hover:scale-105 transition-transform cursor-pointer"
                        >
                            <div className="relative w-[84px] h-[84px] rounded-2xl overflow-hidden shrink-0 shadow-inner">
                                <Image
                                    src={HERO_SLIDES[(currentSlide + 1) % HERO_SLIDES.length].src}
                                    alt="Thumbnail"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="pr-4">
                                <div className="flex items-center -space-x-2.5 mb-2">
                                    <div className="w-7 h-7 rounded-full bg-gray-200 border-2 border-white relative overflow-hidden z-30">
                                        <Image src="/1.webp" alt="User 1" fill className="object-cover" />
                                    </div>
                                    <div className="w-7 h-7 rounded-full bg-gray-300 border-2 border-white relative overflow-hidden z-20">
                                        <Image src="/2.webp" alt="User 2" fill className="object-cover" />
                                    </div>
                                    <div className="w-7 h-7 rounded-full bg-gray-400 border-2 border-white relative overflow-hidden z-10">
                                        <Image src="/3.webp" alt="User 3" fill className="object-cover" />
                                    </div>
                                    <div className="w-7 h-7 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-700 z-0 shadow-sm">
                                        +
                                    </div>
                                </div>

                                <p className="text-[13px] font-bold text-slate-900 leading-tight tracking-tight">
                                    12K+ Membership
                                </p>
                                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                                    enjoy our facility
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

            </div>
        </section>
    );
}