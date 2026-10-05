"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const reviews = [
    ["Siti & Ahmad", "Couple Trip", "Pelayanan RAMAH Tour luar biasa! Driver mas Deni ramah banget, dokumentasi fotonya bagus, dan jadwalnya santai nggak keburu-buru."],
    ["Keluarga Pratama", "Family Vacation", "Liburan keluarga ke Lombok jadi tenang banget. Hotel bagus, mobil bersih full AC, dan anak-anak senang banget island hopping ke Gili."],
    ["Clarissa & Friends", "Girls Trip", "Definisi liburan aesthetic bareng bestie! Floating breakfast-nya lucu banget, spot fotonya instagrammable semua. Terima kasih RAMAH Tour!"],
    ["Rian & Maya", "Honeymoon", "Romantic dinner di Bukit Merese tak terlupakan. Privasi terjaga dan pelayanannya sangat berkesan."],
    ["Bintang Setiawan", "Island Hopping", "Snorkeling di Gili Meno dan Trawangan seru banget. Guide airnya sangat membantu nemuin penyu."],
    ["Dewi & Tim", "Custom Itinerary", "Custom itinerary sesuai request kami dipenuhi 100%. Komunikasi via WA fast response dan transparan."]
] as const;

export default function Testimonials() {
    const duplicatedReviews = [...reviews, ...reviews];

    return (
        <section id="testimoni" className="w-full bg-white py-16 sm:py-24 text-[#0F172A] font-sans overflow-hidden select-none">

            {/* Header Section */}
            <ScrollReveal direction="up" delay={0.1} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 flex flex-col items-center text-center">
                <h2 className="max-w-3xl text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black leading-[1.2]">
                    Pulang Membawa Momen Indah<br />
                    & Cerita Baru
                </h2>
            </ScrollReveal>

            {/* Marquee Track */}
            <ScrollReveal direction="up" delay={0.25}>
                <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div
                        className="flex shrink-0 gap-6 pr-6"
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 35,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {duplicatedReviews.map(([name, city, quote], index) => (
                            <figure
                                key={`${name}-${index}`}
                                className="w-[300px] sm:w-[360px] shrink-0 rounded-2xl border border-slate-200/80 bg-[#F8FAFC] p-6 flex flex-col justify-between transition-all duration-300 hover:border-slate-300 hover:bg-white hover:shadow-md"
                            >
                                <div>
                                    <div className="mb-4 flex gap-1 text-amber-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                    <blockquote className="text-sm sm:text-base font-medium leading-relaxed text-slate-700">
                                        “{quote}”
                                    </blockquote>
                                </div>

                                <figcaption className="mt-6 border-t border-slate-200/60 pt-4 text-xs sm:text-sm">
                                    <strong className="font-bold text-[#0F172A]">{name}</strong>
                                    <span className="ml-2 font-mono text-slate-400">· {city}</span>
                                </figcaption>
                            </figure>
                        ))}
                    </motion.div>
                </div>
            </ScrollReveal>

        </section>
    );
}