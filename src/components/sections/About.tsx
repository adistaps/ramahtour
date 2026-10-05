"use client";

import Image from "next/image";
import { Compass, UserCheck, Sparkles, CalendarCheck } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const FEATURES = [
    {
        number: "01",
        title: "Jelajah Alam Eksotis",
        description: "Eksplorasi pantai pasir putih, perbukitan hijau Bukit Merese, dan kejernihan laut pulau gili Lombok.",
        icon: Compass,
    },
    {
        number: "02",
        title: "Guide & Driver Ramah",
        description: "Didampingi oleh tim lokal berpengalaman dan profesional yang siap memastikan perjalanan Anda nyaman.",
        icon: UserCheck,
    },
    {
        number: "03",
        title: "Destinasi Hidden Gems",
        description: "Temukan spot-spot foto tersembunyi dan lokasi otentik di Lombok yang jarang diketahui wisatawan umum.",
        icon: Sparkles,
    },
    {
        number: "04",
        title: "Booking Cepat & Mudah",
        description: "Proses pemesanan praktis via WhatsApp, itinerary fleksibel, serta harga transparan tanpa biaya tersembunyi.",
        icon: CalendarCheck,
    },
];

export default function AboutSection() {
    return (
        <section id="tentang" className="py-10 sm:py-24 lg:py-32 bg-white text-slate-900 font-sans">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">

                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-end pb-6 sm:pb-10 border-b border-slate-100 mb-8 sm:mb-14">
                    <ScrollReveal direction="up" delay={0.1} className="lg:col-span-7">
                        <h2 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.2] lg:leading-[1.15] text-black">
                            Liburan Impian Lombok<br className="hidden sm:block" /> Tinggal Satu Langkah
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal direction="up" delay={0.2} className="lg:col-span-5">
                        <p className="text-slate-500 text-xs sm:text-base leading-relaxed">
                            Layanan private trip Lombok eksklusif yang dirancang untuk menyegarkan pikiran Anda. Dari pantai yang tenang hingga resort pilihan terbaik, kami siap mengantar Anda dengan nyaman.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">

                    {/* Kolom Kiri */}
                    <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-6">
                        {FEATURES.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <ScrollReveal key={index} direction="up" delay={0.1 * index}>
                                    <div className="bg-slate-50/80 hover:bg-slate-50 rounded-2xl sm:rounded-3xl p-3.5 sm:p-7 border border-slate-100/80 flex flex-col justify-between transition-all duration-300 hover:shadow-md h-full">
                                        <div className="flex items-center justify-between mb-4 sm:mb-8">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-orange-100/80 text-orange-600 flex items-center justify-center">
                                                <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </div>
                                            <span className="text-[10px] sm:text-xs font-bold text-slate-400 tracking-widest">
                                                {item.number}
                                            </span>
                                        </div>

                                        <div>
                                            <h3 className="text-xs sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2 leading-tight">
                                                {item.title}
                                            </h3>
                                            <p className="text-[10px] sm:text-sm text-slate-500 leading-normal sm:leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>

                    {/* Kolom Kanan */}
                    <ScrollReveal direction="left" delay={0.3} className="lg:col-span-6 min-h-[260px] sm:min-h-[480px]">
                        <div className="relative w-full h-full min-h-[260px] sm:min-h-[480px] rounded-2xl sm:rounded-3xl lg:rounded-[2rem] overflow-hidden bg-slate-100">
                            <Image
                                src="/11.webp"
                                alt="Keindahan Alam Pantai dan Laut Lombok bersama RAMAH Tour"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </ScrollReveal>

                </div>

            </div>
        </section>
    );
}