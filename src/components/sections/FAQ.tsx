"use client";

import React from "react";
import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const faqs = [
    {
        question: "Layanan apa saja yang ditawarkan RAMAH Tour Lombok?",
        answer: "Kami melayani private trip, custom itinerary, airport transfer, hotel & villa, island hopping, serta dokumentasi foto & video, untuk couple trip, liburan keluarga, girls trip, dan honeymoon."
    },
    {
        question: "Apakah itinerary bisa disesuaikan dengan keinginan saya?",
        answer: "Bisa. Selain paket yang tersedia, kamu bisa meminta custom itinerary. Ceritakan jenis trip, tanggal, dan destinasi impianmu, lalu kami susun perjalanannya."
    },
    {
        question: "Apakah harga paket dihitung per orang?",
        answer: "Ya, harga yang tertera adalah harga mulai dari (start from) per pax. Harga final bisa berbeda tergantung tanggal, jumlah peserta, dan pilihan hotel atau villa. Hubungi admin untuk penawaran terbaik."
    },
    {
        question: "Destinasi apa saja yang bisa dikunjungi?",
        answer: "Beberapa favorit kami: Kuta Lombok, Tanjung Aan, Bukit Merese, Mandalika, Pink Beach, dan Gili Trawangan. Destinasi lain bisa ditambahkan lewat custom itinerary."
    },
    {
        question: "Apakah tersedia jemput bandara dan transportasi selama trip?",
        answer: "Tersedia. Airport transfer dan private transport sudah tercantum di paket 3D2N Lombok Escape, 4D3N Luxury Lombok (private transport), dan Honeymoon Lombok. Untuk paket lain, silakan konfirmasi ke admin."
    },
    {
        question: "Bagaimana cara booking?",
        answer: "Hubungi kami lewat WhatsApp di 0823 4220 0038, sebutkan paket, tanggal, dan jumlah peserta. Admin akan membantu cek ketersediaan dan menjelaskan langkah selanjutnya."
    }
];

export default function FAQ() {
    const handleContact = () => {
        const message = encodeURIComponent("Halo Admin RAMAH Tour Lombok 👋, saya punya beberapa pertanyaan seputar paket tour & itinerary Lombok.");
        window.open(`https://wa.me/6282342200038?text=${message}`, "_blank");
    };

    return (
        <section id="faq" className="w-full bg-white py-12 sm:py-24 font-sans text-black select-none">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8 mb-10 md:mb-20">
                    <ScrollReveal direction="up" delay={0.1} className="w-full md:w-1/2">
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight max-w-lg">
                            Nikmati Kualitas Tour & Pengalaman Terbaik
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={0.2} className="w-full md:w-1/2 flex flex-col items-start md:items-end text-left md:text-right">
                        <p className="text-xs sm:text-base text-slate-500 leading-relaxed max-w-md mb-6">
                            Punya pertanyaan sebelum merencanakan liburanmu? Temukan semua informasi lengkap seputar layanan, fasilitas, dan kemudahan mengatur perjalanan bersama RAMAH Tour Lombok.
                        </p>
                        <button
                            onClick={handleContact}
                            className="w-full sm:w-auto rounded-full border border-black bg-transparent px-8 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-black hover:text-white cursor-pointer"
                        >
                            Hubungi Kami
                        </button>
                    </ScrollReveal>
                </div>

                {/* FAQ Grid */}
                <ScrollReveal direction="up" delay={0.25} className="w-full mb-12 md:mb-24">
                    <Accordion type="single" collapsible className="w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24">
                            {faqs.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="border-b border-slate-200 px-0"
                                >
                                    <AccordionTrigger className="flex w-full items-center justify-between py-4 sm:py-6 text-left text-sm md:text-base font-medium text-black hover:no-underline [&[data-state=open]>svg]:rotate-180">
                                        <span className="pr-4 leading-snug">
                                            {index + 1}. {item.question}
                                        </span>
                                        <ChevronDown className="h-4 w-4 shrink-0 text-black transition-transform duration-200" />
                                    </AccordionTrigger>

                                    <AccordionContent className="pb-5 pt-1 text-xs sm:text-sm text-slate-500 leading-relaxed pr-4 sm:pr-8">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </div>
                    </Accordion>
                </ScrollReveal>

                {/* Bottom Image Banner */}
                <ScrollReveal direction="up" delay={0.3} className="relative w-full h-[250px] sm:h-[450px] md:h-[600px] rounded-xl sm:rounded-[2rem] overflow-hidden shadow-xl sm:shadow-2xl">
                    <Image
                        src="/15.webp"
                        alt="Pemandangan Alam Lombok"
                        fill
                        className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                </ScrollReveal>

            </div>
        </section>
    );
}