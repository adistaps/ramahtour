'use client';

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Calendar, Star, Palmtree, X, Check, Send, User, Phone, Clock, Users } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const packages = [
    {
        id: "3d2n-lombok-escape",
        name: "3D2N Lombok Escape",
        subtitle: "Nikmati keindahan Kuta Lombok, Bukit Merese, dan sunset dinner seru.",
        price: "IDR 2.950.000",
        period: "/ PAX",
        duration: "3 Hari 2 Malam",

        category: "Lombok South",
        badge: "Lombok, ID",
        image: "/1.webp",
        features: [
            "Hotel 2 malam",
            "Airport pick up & drop off",
            "Wisata Kuta Lombok",
            "Eksplor Pantai Tanjung Aan",
            "Sunset di Bukit Merese",
            "Sunset dinner romantis",
            "Private transport + driver"
        ]
    },
    {
        id: "4d3n-luxury-lombok",
        name: "4D3N Luxury Lombok",
        subtitle: "Pengalaman liburan mewah island hopping Gili, Pink Beach, dan villa/hotel premium.",
        price: "IDR 4.950.000",
        period: "/ PAX",
        duration: "4 Hari 3 Malam",

        category: "Luxury & Gili",
        badge: "Lombok, ID",
        image: "/2.webp",
        features: [
            "Hotel / Villa premium",
            "Island hopping (Gili Trawangan & Meno)",
            "Eksplor sirkuit & pantai Mandalika",
            "Wisata Pink Beach",
            "Pantai Tanjung Aan",
            "Private boat island hopping",
            "Dokumentasi foto & video",
            "Private transport full AC"
        ]
    },
    {
        id: "girls-trip-ladies-getaway",
        name: "Girls Trip · Ladies Getaway",
        subtitle: "Liburan aesthetic & santai bersama sahabat lengkap dengan floating breakfast & photoshoot.",
        price: "IDR 3.950.000",
        period: "/ PAX",
        duration: "Fleksibel",

        category: "Girls Getaway",
        badge: "Lombok, ID",
        image: "/9.webp",
        features: [
            "Aesthetic hotel pilihan",
            "Beach hopping destinasi hits",
            "Floating breakfast",
            "Gili trip island hopping",
            "Sunset dinner",
            "Dokumentasi foto & video",
            "Itinerary santai & fleksibel"
        ]
    },
    {
        id: "honeymoon-lombok",
        name: "Honeymoon Lombok",
        subtitle: "Momen bulan madu tak terlupakan di private villa dengan romantic candlelight dinner.",
        price: "IDR 5.950.000",
        period: "/ PAX",
        duration: "Fleksibel",

        category: "Honeymoon",
        badge: "Lombok, ID",
        image: "/7.webp",
        features: [
            "Private villa mewah",
            "Romantic dinner eksklusif",
            "Couple photoshoot",
            "Island hopping private boat",
            "Sunset experience",
            "Airport transfer in & out",
            "Private transport full service"
        ]
    }
];

export default function Pricing() {
    const [selectedPackage, setSelectedPackage] = useState<typeof packages[0] | null>(null);
    const [activeMobileSlide, setActiveMobileSlide] = useState(0);
    const [mounted, setMounted] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        date: "",
        guests: "2",
        notes: ""
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    // Lock background scroll when popup is active
    useEffect(() => {
        if (selectedPackage) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
            document.body.style.touchAction = 'none';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            document.body.style.touchAction = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            document.body.style.touchAction = '';
        };
    }, [selectedPackage]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleOpenModal = (pkg: typeof packages[0]) => {
        setSelectedPackage(pkg);
    };

    const handleCloseModal = () => {
        setSelectedPackage(null);
    };

    const handleScrollMobile = (e: React.UIEvent<HTMLDivElement>) => {
        const container = e.currentTarget;
        const scrollPosition = container.scrollLeft;
        const width = container.clientWidth;
        if (width > 0) {
            const index = Math.round(scrollPosition / width);
            setActiveMobileSlide(index);
        }
    };

    const scrollToSlide = (index: number) => {
        const container = document.getElementById('pricing-scroll-container');
        if (container) {
            container.scrollTo({
                left: index * container.clientWidth,
                behavior: 'smooth'
            });
        }
    };

    const handleSubmitWhatsApp = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedPackage) return;

        const message =
            `Halo Admin RAMAH Tour Lombok 👋\n\n` +
            `Saya ingin memesan paket tour:\n` +
            `📌 *Paket:* ${selectedPackage.name}\n` +
            `💰 *Harga:* ${selectedPackage.price} ${selectedPackage.period}\n\n` +
            `*Data Pemesan:*\n` +
            `👤 *Nama:* ${formData.name}\n` +
            `📱 *WhatsApp:* ${formData.phone}\n` +
            `📅 *Rencana Tanggal:* ${formData.date}\n` +
            `👥 *Jumlah Peserta:* ${formData.guests}\n` +
            (formData.notes ? `📝 *Catatan:* ${formData.notes}\n\n` : `\n`) +
            `Mohon info ketersediaan dan rincian selanjutnya ya. Terima kasih!`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/6282342200038?text=${encodedMessage}`, "_blank");
        handleCloseModal();
    };

    // Modal JSX rendered via Portal to escape all parent stacking contexts & overlays navbar completely
    const renderModal = () => {
        if (!selectedPackage || !mounted) return null;

        return createPortal(
            <div
                className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
                onClick={handleCloseModal}
            >
                <div
                    className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden my-auto border border-slate-100 animate-in zoom-in-95 duration-200"
                    onClick={(e) => e.stopPropagation()}
                >

                    {/* Modal Header */}
                    <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-100 bg-slate-50/80">
                        <div>
                            <h3 className="text-base sm:text-lg font-bold text-slate-900">Form Pemesanan Paket</h3>
                            <p className="text-xs text-slate-500">{selectedPackage.name}</p>
                        </div>
                        <button
                            onClick={handleCloseModal}
                            aria-label="Tutup Form"
                            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Modal Body */}
                    <div className="p-4 sm:p-6 max-h-[78vh] overflow-y-auto space-y-4 sm:space-y-5">

                        {/* Ringkasan Paket & Benefit */}
                        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                            <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-200/60">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Fasilitas Termasuk</span>
                                <span className="text-sm font-extrabold text-slate-900">{selectedPackage.price} <span className="text-xs font-normal text-slate-500">{selectedPackage.period}</span></span>
                            </div>
                            <ul className="space-y-2">
                                {selectedPackage.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                                        <div className="flex-shrink-0 w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-0.5">
                                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                                        </div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Form Isian Pemesan */}
                        <form onSubmit={handleSubmitWhatsApp} className="space-y-3.5 sm:space-y-4">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                                    <User className="w-3.5 h-3.5 text-slate-400" /> Nama Lengkap
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Contoh: Budi Santoso"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-slate-900 transition-colors"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                                        <Phone className="w-3.5 h-3.5 text-slate-400" /> Nomor WhatsApp
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        placeholder="081234567890"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-slate-900 transition-colors"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5 text-slate-400" /> Rencana Tanggal
                                    </label>
                                    <input
                                        type="text"
                                        name="date"
                                        required
                                        placeholder="Contoh: 15 Juli 2026"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-slate-900 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                                    <Users className="w-3.5 h-3.5 text-slate-400" /> Jumlah Peserta
                                </label>
                                <select
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleInputChange}
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-slate-900 transition-colors bg-white"
                                >
                                    <option value="2">2 Orang (Couple / Pair)</option>
                                    <option value="3-5">3 - 5 Orang (Small Group)</option>
                                    <option value="6-10">6 - 10 Orang (Medium Group)</option>
                                    <option value=">10">Lebih dari 10 Orang (Large Group)</option>
                                </select>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-700">Catatan Tambahan (Opsional)</label>
                                <textarea
                                    name="notes"
                                    rows={2}
                                    placeholder="Tuliskan jika ada request khusus (request hotel, makanan, dll)..."
                                    value={formData.notes}
                                    onChange={handleInputChange}
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-slate-900 transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-2 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-bold py-3 px-5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/20 cursor-pointer"
                            >
                                <Send className="w-4 h-4" />
                                <span>Lanjutkan ke WhatsApp</span>
                            </button>
                        </form>

                    </div>

                </div>
            </div>,
            document.body
        );
    };

    return (
        <section id="paket" className="w-full bg-white py-12 sm:py-24 font-sans text-slate-900 select-none">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">

                {/* Header Section */}
                <ScrollReveal direction="up" delay={0.1}>
                    <div className="mb-6 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black">
                                Fuel Your Wanderlust
                            </h2>
                            <p className="mt-2 sm:mt-3 text-xs sm:text-base text-slate-500 max-w-2xl">
                                Pilih paket private tour Lombok favorit Anda untuk menciptakan pengalaman liburan impian yang tak terlupakan.
                            </p>
                        </div>

                        {/* Petunjuk Geser Khusus Mobile */}
                        <p className="text-[11px] font-semibold text-emerald-600 sm:hidden flex items-center gap-1 mt-1">
                            Geser untuk melihat paket lainnya ➔
                        </p>
                    </div>
                </ScrollReveal>

                {/* Container: Horizontal Scroll di Mobile, Grid 4 Kolom di Desktop */}
                <div
                    id="pricing-scroll-container"
                    onScroll={handleScrollMobile}
                    className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory sm:snap-none no-scrollbar pb-4 sm:pb-0 -mx-5 px-5 sm:mx-0 sm:px-0"
                >
                    {packages.map((item, index) => (
                        <ScrollReveal key={item.id} direction="up" delay={0.1 * index} className="shrink-0 w-[85vw] sm:w-auto snap-center flex flex-col">
                            <article className="bg-white rounded-3xl p-4 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between h-full">
                                <div>
                                    {/* Frame Gambar & Badge Lokasi */}
                                    <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden mb-4">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover transition-transform duration-500 hover:scale-105"
                                            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 25vw"
                                        />
                                        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 text-[11px] font-semibold text-slate-800 shadow-sm z-10">
                                            <Palmtree className="w-3.5 h-3.5 text-emerald-600" />
                                            <span>{item.badge}</span>
                                        </div>
                                    </div>

                                    {/* Judul & Subtitle */}
                                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug line-clamp-1">
                                        {item.name}
                                    </h3>
                                    <p className="text-xs text-slate-500 mt-1 font-normal leading-relaxed line-clamp-2 min-h-[32px]">
                                        {item.subtitle}
                                    </p>

                                    {/* Meta Bar */}
                                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                                            <span>{item.duration}</span>
                                        </div>
                                    </div>

                                    {/* List Benefit */}
                                    <div className="mt-4 space-y-2">
                                        {item.features.slice(0, 4).map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                                                <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                                                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                                                </div>
                                                <span className="truncate">{feature}</span>
                                            </div>
                                        ))}
                                        {item.features.length > 4 && (
                                            <p className="text-[11px] text-emerald-600 font-semibold pt-1">
                                                + {item.features.length - 4} fasilitas lainnya
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Card Footer */}
                                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                                    <div>
                                        <span className="text-base font-extrabold text-slate-900 block leading-none">
                                            {item.price}
                                        </span>
                                        <span className="text-[10px] text-slate-400 font-medium">
                                            {item.period}
                                        </span>
                                    </div>

                                    <button
                                        onClick={() => handleOpenModal(item)}
                                        className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all duration-200 active:scale-95 shadow-md shadow-slate-900/10 cursor-pointer"
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </article>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Indikator Titik Dots Khusus Mobile */}
                <div className="flex justify-center items-center gap-2 mt-4 sm:hidden">
                    {packages.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollToSlide(idx)}
                            aria-label={`Lihat paket ${idx + 1}`}
                            className={`h-2 rounded-full transition-all duration-300 ${activeMobileSlide === idx ? 'w-6 bg-slate-900' : 'w-2 bg-slate-200'
                                }`}
                        />
                    ))}
                </div>

            </div>

            {/* Portal Modal */}
            {renderModal()}
        </section>
    );
}