'use client';

import React from "react";
import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";

const DESTINATIONS = {
    left: {
        title: "Bukit Merese",
        location: "Lombok Tengah, NTB",
        image: "/1.webp",
    },
    top1: {
        title: "Gili Trawangan",
        location: "Lombok Utara, NTB",
        image: "/2.webp",
    },
    top2: {
        title: "Pink Beach",
        location: "Lombok Timur, NTB",
        image: "/3.webp",
    },
    bottom: {
        title: "Tanjung Aan Beach",
        location: "Lombok Tengah, NTB",
        image: "/4.webp",
    }
};

export default function Gallery() {
    return (
        <section id="galeri" className="w-full bg-white py-6 sm:py-16 font-sans select-none">
            <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">

                <div className="grid grid-cols-12 gap-2 sm:gap-5 items-stretch">

                    {/* KARTU KIRI */}
                    <ScrollReveal direction="right" delay={0.1} className="col-span-5 relative min-h-[260px] sm:min-h-[400px] lg:min-h-[540px] rounded-xl sm:rounded-3xl overflow-hidden shadow-sm border border-slate-100 pointer-events-none">
                        <Image
                            src={DESTINATIONS.left.image}
                            alt={DESTINATIONS.left.title}
                            fill
                            sizes="(max-width: 1024px) 40vw, 40vw"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                        <div className="absolute bottom-0 inset-x-0 p-2.5 sm:p-7">
                            <h3 className="text-sm sm:text-3xl font-bold text-white tracking-tight leading-tight">
                                {DESTINATIONS.left.title}
                            </h3>
                            <p className="text-[10px] sm:text-sm text-slate-300 font-normal mt-0.5 sm:mt-1">
                                {DESTINATIONS.left.location}
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* KOLOM KANAN */}
                    <div className="col-span-7 flex flex-col gap-2 sm:gap-5">

                        <div className="grid grid-cols-2 gap-2 sm:gap-5">
                            {/* Kartu Top 1 */}
                            <ScrollReveal direction="up" delay={0.2} className="relative h-[125px] sm:h-[255px] rounded-xl sm:rounded-3xl overflow-hidden shadow-sm border border-slate-100 pointer-events-none">
                                <Image
                                    src={DESTINATIONS.top1.image}
                                    alt={DESTINATIONS.top1.title}
                                    fill
                                    sizes="(max-width: 640px) 30vw, 30vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                                <div className="absolute bottom-0 inset-x-0 p-2 sm:p-5">
                                    <h3 className="text-xs sm:text-xl font-bold text-white tracking-tight leading-tight">
                                        {DESTINATIONS.top1.title}
                                    </h3>
                                    <p className="text-[9px] sm:text-xs text-slate-300 font-normal mt-0.5 truncate">
                                        {DESTINATIONS.top1.location}
                                    </p>
                                </div>
                            </ScrollReveal>

                            {/* Kartu Top 2 */}
                            <ScrollReveal direction="up" delay={0.3} className="relative h-[125px] sm:h-[255px] rounded-xl sm:rounded-3xl overflow-hidden shadow-sm border border-slate-100 pointer-events-none">
                                <Image
                                    src={DESTINATIONS.top2.image}
                                    alt={DESTINATIONS.top2.title}
                                    fill
                                    sizes="(max-width: 640px) 30vw, 30vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                                <div className="absolute bottom-0 inset-x-0 p-2 sm:p-5">
                                    <h3 className="text-xs sm:text-xl font-bold text-white tracking-tight leading-tight">
                                        {DESTINATIONS.top2.title}
                                    </h3>
                                    <p className="text-[9px] sm:text-xs text-slate-300 font-normal mt-0.5 truncate">
                                        {DESTINATIONS.top2.location}
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Baris Bawah */}
                        <ScrollReveal direction="up" delay={0.4} className="relative h-[125px] sm:h-[265px] rounded-xl sm:rounded-3xl overflow-hidden shadow-sm border border-slate-100 pointer-events-none">
                            <Image
                                src={DESTINATIONS.bottom.image}
                                alt={DESTINATIONS.bottom.title}
                                fill
                                sizes="(max-width: 1024px) 60vw, 60vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                            <div className="absolute bottom-0 inset-x-0 p-2.5 sm:p-6">
                                <h3 className="text-xs sm:text-2xl font-bold text-white tracking-tight leading-tight">
                                    {DESTINATIONS.bottom.title}
                                </h3>
                                <p className="text-[9px] sm:text-sm text-slate-300 font-normal mt-0.5">
                                    {DESTINATIONS.bottom.location}
                                </p>
                            </div>
                        </ScrollReveal>

                    </div>

                </div>

            </div>
        </section>
    );
}