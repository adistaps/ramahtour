'use client';

import React from "react";
import ScrollReveal from "../ui/ScrollReveal";

const steps = [
    {
        num: "1",
        title: "Konsultasi & Custom Itinerary",
        description: "Ceritakan jenis trip dan destinasi impianmu lewat WhatsApp, lalu kami susun itinerary yang pas.",
    },
    {
        num: "2",
        title: "Jemput, Jelajah & Abadikan",
        description: "Dijemput di bandara, lanjut island hopping dan keliling destinasi, lengkap dengan dokumentasi foto & video.",
    },
    {
        num: "3",
        title: "Nikmati Momen, Kami yang Urus",
        description: "Kamu tinggal santai menikmati Lombok, urusan hotel, transport, dan jadwal sudah kami tangani.",
    },
];

export default function TripFlow() {
    const handleConsultation = () => {
        const message = encodeURIComponent("Halo Admin RAMAH Tour Lombok 👋, saya ingin konsultasi gratis mengenai paket & alur liburan di Lombok.");
        window.open(`https://wa.me/6282342200038?text=${message}`, "_blank");
    };

    return (
        <section id="alur-trip" className="relative w-full bg-white py-14 sm:py-24 font-sans select-none overflow-hidden">

            {/* Garis Latar Belakang Vertikal Transparan */}
            <div className="absolute inset-0 z-0 hidden md:flex justify-center pointer-events-none">
                <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-10 h-full">
                    <div className="grid grid-cols-3 h-full">
                        <div className="border-l border-slate-200 h-full"></div>
                        <div className="border-l border-slate-200 h-full"></div>
                        <div className="border-l border-slate-200 h-full"></div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-20 md:mb-32 gap-4 md:gap-8 md:pl-8">
                    <ScrollReveal direction="up" delay={0.1}>
                        <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-black leading-[1.15] max-w-2xl tracking-tight">
                            Proses &<br />
                            Alur Liburan
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal direction="up" delay={0.2}>
                        <p className="text-slate-500 max-w-sm text-xs sm:text-base leading-relaxed">
                            Tinggal terima beres. Sebuah kultur pelayanan yang dibangun atas kepedulian, memastikan setiap perjalanan disusun dengan saksama dan penuh dengan pengalaman yang tak terlupakan.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Steps Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
                    {steps.map((step, index) => (
                        <ScrollReveal key={index} direction="up" delay={0.15 * index} className="relative h-full">
                            <div className={`relative pl-8 sm:pl-10 lg:pl-14 pr-2 sm:pr-4 py-1 md:py-8 flex flex-col min-h-[160px] md:min-h-[260px] ${index === 1 ? 'md:mt-24' : ''}`}>

                                <div className="absolute left-0 top-1 bottom-1 md:top-8 md:bottom-8 flex flex-col items-center -translate-x-[50%]">
                                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-black bg-white text-base sm:text-lg font-bold text-black z-10 shadow-sm">
                                        {step.num}
                                    </div>
                                    <div className="flex-1 w-[1.5px] bg-black my-2"></div>
                                    <div className="h-2 w-5 sm:h-2.5 sm:w-6 rounded-full bg-orange-500 z-10 shadow-sm shrink-0"></div>
                                </div>

                                <div className="pt-0.5">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-4 leading-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm md:text-[15px] leading-relaxed text-slate-500">
                                        {step.description}
                                    </p>
                                </div>

                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Call to Action Button */}
                <ScrollReveal direction="up" delay={0.4} className="mt-12 sm:mt-20 md:mt-32 flex justify-center relative z-20">
                    <button
                        onClick={handleConsultation}
                        className="rounded-xl bg-black px-7 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-bold tracking-wide text-white transition-transform hover:-translate-y-1 hover:bg-slate-800 shadow-xl cursor-pointer"
                    >
                        Mulai Konsultasi Gratis
                    </button>
                </ScrollReveal>

            </div>
        </section>
    );
}