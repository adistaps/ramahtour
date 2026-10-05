'use client';

import React from "react";
import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";

export default function Schedule() {
    const handleBookNow = () => {
        const message = encodeURIComponent("Halo Admin RAMAH Tour Lombok 👋, saya tertarik untuk pesan trip & eksplor destinasi impian di Lombok.");
        window.open(`https://wa.me/6282342200038?text=${message}`, "_blank");
    };

    return (
        <section id="destinasi" className="relative w-full py-16 sm:py-28 font-sans select-none overflow-hidden min-h-[850px] sm:min-h-[950px] flex flex-col justify-between">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/6.webp"
                    alt="Pantai Lombok"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-slate-900/15" />
                <div className="absolute bottom-0 inset-x-0 h-32 sm:h-48 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none" />
            </div>

            {/* Header Section */}
            <div className="relative z-20 mx-auto max-w-4xl px-4 text-center mt-6 sm:mt-10 flex flex-col items-center">
                <ScrollReveal direction="down" delay={0.1}>
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight drop-shadow-md">
                        Temukan Destinasi Impianmu<br className="hidden sm:inline" /> dalam Hitungan Menit
                    </h2>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.25}>
                    <button
                        onClick={handleBookNow}
                        className="mt-6 sm:mt-8 bg-[#FF652F] hover:bg-[#e25420] text-white font-medium text-xs sm:text-sm px-7 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 cursor-pointer"
                    >
                        Pesan Sekarang
                    </button>
                </ScrollReveal>
            </div>

            {/* 3 Floating Cards */}
            <div className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full mb-6 sm:mb-10 mt-12 sm:mt-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">

                    {/* Card 1: Surfing */}
                    <ScrollReveal direction="up" delay={0.1} className="relative h-48 sm:h-60 lg:h-64 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl group cursor-pointer">
                        <Image
                            src="/8.webp"
                            alt="Surfing & Watersport"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-5">
                            <h3 className="text-white font-semibold text-base sm:text-lg drop-shadow">
                                Surfing & Watersport Kuta
                            </h3>
                        </div>
                    </ScrollReveal>

                    {/* Card 2: Snorkeling */}
                    <ScrollReveal direction="up" delay={0.25} className="relative h-48 sm:h-60 lg:h-64 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl group cursor-pointer">
                        <Image
                            src="/13.webp"
                            alt="Island Hopping & Snorkeling"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-5">
                            <h3 className="text-white font-semibold text-base sm:text-lg drop-shadow">
                                Island Hopping & Snorkeling Gili
                            </h3>
                        </div>
                    </ScrollReveal>

                    {/* Card 3: Trekking */}
                    <ScrollReveal direction="up" delay={0.4} className="relative h-48 sm:h-60 lg:h-64 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl group cursor-pointer">
                        <Image
                            src="/14.webp"
                            alt="Trekking & Sunset Merese"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-5">
                            <h3 className="text-white font-semibold text-base sm:text-lg drop-shadow">
                                Trekking & Sunset Bukit Merese
                            </h3>
                        </div>
                    </ScrollReveal>

                </div>
            </div>

        </section>
    );
}