"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";

export default function FooterFull() {
    return (
        <section className="relative w-full h-screen min-h-[750px] lg:min-h-[850px] flex flex-col justify-end bg-white overflow-hidden">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/16.webp"
                    alt="Latar Belakang Footer"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute top-0 inset-x-0 h-[50vh] md:h-[60vh] bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-black/20 z-0" />
            </div>

            {/* RAMAH Text Overlay */}
            <div className="absolute inset-x-0 bottom-[40%] md:bottom-[35%] z-10 flex items-center justify-center pointer-events-none overflow-hidden select-none w-full">
                <h1
                    className="w-full text-center font-black text-white/50 uppercase mix-blend-overlay drop-shadow-xl"
                    style={{ fontSize: "28vw", lineHeight: "0.75", letterSpacing: "-0.01em" }}
                >
                    RAMAH
                </h1>
            </div>

            {/* Footer Box */}
            <div className="relative z-20 w-full px-2 sm:px-6 pb-2 sm:pb-6">
                <ScrollReveal direction="up" delay={0.1}>
                    <footer className="mx-auto w-full bg-[#1A1A1A] text-white rounded-2xl md:rounded-[2rem] px-8 py-10 sm:px-12 sm:pt-14 sm:pb-8 shadow-2xl">

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 mb-16">

                            {/* Kolom 1: GENERAL */}
                            <div className="flex flex-col">
                                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-6">General</span>
                                <nav className="flex flex-col gap-3 text-xs sm:text-sm text-zinc-300">
                                    <a href="#hero" className="hover:text-white transition-colors">Home</a>
                                    <a href="#tentang" className="hover:text-white transition-colors">About Us</a>
                                    <a href="#keunggulan" className="hover:text-white transition-colors">Why Us</a>
                                    <a href="#testimoni" className="hover:text-white transition-colors">Testimonials</a>
                                </nav>
                            </div>

                            {/* Kolom 2: LAYANAN */}
                            <div className="flex flex-col">
                                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-6">Layanan</span>
                                <nav className="flex flex-col gap-3 text-xs sm:text-sm text-zinc-300">
                                    <a href="#paket" className="hover:text-white transition-colors">Paket Tour</a>
                                    <a href="#destinasi" className="hover:text-white transition-colors">Destinasi Impian</a>
                                    <a href="#alur-trip" className="hover:text-white transition-colors">Alur Trip</a>
                                </nav>
                            </div>

                            {/* Kolom 3: RESOURCE */}
                            <div className="flex flex-col">
                                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-6">Resource</span>
                                <nav className="flex flex-col gap-3 text-xs sm:text-sm text-zinc-300">
                                    <a href="#galeri" className="hover:text-white transition-colors">Gallery</a>
                                    <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
                                </nav>
                            </div>

                            {/* Kolom 4: CONTACT */}
                            <div className="flex flex-col lg:col-span-2">
                                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-6">Contact</span>
                                <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                                    <p className="mb-4">
                                        Lombok, Nusa Tenggara Barat<br />
                                        Indonesia
                                    </p>
                                    <a href="https://wa.me/6282342200038" target="_blank" rel="noreferrer" className="hover:text-white transition-colors block font-semibold text-emerald-400">
                                        +62 823 4220 0038
                                    </a>
                                </div>
                            </div>

                        </div>

                        {/* Hak Cipta */}
                        <div className="w-full border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] sm:text-xs font-medium text-zinc-500">
                            <p>
                                Powered by RAMAH Tour Lombok
                            </p>
                            <div className="flex items-center gap-4 sm:gap-6">
                                <a href="#faq" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
                                <a href="#faq" className="hover:text-zinc-300 transition-colors">Terms & Conditions</a>
                            </div>
                        </div>

                    </footer>
                </ScrollReveal>
            </div>

        </section>
    );
}