"use client";

import { useState } from "react";

export default function KCCSWebsite() {
  const [lang, setLang] = useState("en");

  const translations = {
    en: {
      company: "Kabul Central Cold Storage",
      about: "About",
      services: "Services",
      contact: "Contact",
      heroTitle: "Preserving Freshness",
      heroDesc: "Modern cold storage solutions in the heart of Kabul",
      requestStorage: "Request Storage",
      contactUs: "Contact Us",
      aboutTitle: "About Us",
      aboutText:
        "Kabul Central Cold Storage (KCCS) offers state-of-the-art storage solutions for perishable goods, serving Afghan businesses with reliable, efficient, and temperature-controlled facilities.",
      servicesTitle: "Our Services",
      serviceList: [
        "Cold & Frozen Storage",
        "Controlled Environments",
        "24/7 Monitoring",
        "Logistics Support",
        "Bulk Storage Solutions",
        "Temperature Tracking",
      ],
      contactTitle: "Contact Us",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Message",
      sendButton: "Send Message",
      phone: "Phone: +93 700 000 000",
      email: "Email: info@kccs.af"
    },
    ps: {
      company: "د کابل مرکزي سړخونه",
      about: "زموږ په اړه",
      services: "خدمات",
      contact: "اړیکه",
      heroTitle: "تازه والی وساتئ",
      heroDesc: "په کابل کې عصري سړخونې خدمات",
      requestStorage: "د یخچال غوښتنه",
      contactUs: "اړیکه ونیسئ",
      aboutTitle: "زموږ په اړه",
      aboutText:
        "د کابل مرکزي یخچال (KCCS) د خرابېدونکو توکو لپاره عصري یخچالي حلونه وړاندې کوي، چې د افغان سوداګرو لپاره باوري، مؤثر او د تودوخې کنټرول شوي تاسیسات برابروي.",
      servicesTitle: "زموږ خدمات",
      serviceList: [
        "یخ او منجمد ذخیره",
        "کنټرول شوې فضاوې",
        "۲۴/۷ څارنه",
        "لوژستیک ملاتړ",
        "په زیاته کچه ذخیره",
        "د تودوخې تعقیب",
      ],
      contactTitle: "اړیکه ونیسئ",
      namePlaceholder: "ستاسو نوم",
      emailPlaceholder: "ستاسو ایمیل",
      messagePlaceholder: "پیغام",
      sendButton: "پیغام ولیږئ",
      phone: "تلیفون: +93 700 000 000",
      email: "بریښنالیک: info@kccs.af"
    },
    fa: {
      company: "ذخیره‌گاه مرکزی کابل",
      about: "درباره ما",
      services: "خدمات",
      contact: "تماس",
      heroTitle: "تازه‌گی را حفظ کنید",
      heroDesc: "راه‌حل‌های مدرن ذخیره‌سازی در قلب کابل",
      requestStorage: "درخواست ذخیره‌سازی",
      contactUs: "تماس با ما",
      aboutTitle: "درباره ما",
      aboutText:
        "ذخیره‌گاه مرکزی کابل (KCCS) راه‌حل‌های مدرن ذخیره‌سازی برای کالاهای فاسدشدنی ارائه می‌دهد و با امکانات مطمئن و کنترل‌شده به تجارت‌های افغانستان خدمت می‌کند.",
      servicesTitle: "خدمات ما",
      serviceList: [
        "ذخیره‌سازی سرد و منجمد",
        "محیط‌های کنترل‌شده",
        "نظارت ۲۴/۷",
        "پشتیبانی لوژستیکی",
        "ذخیره‌سازی عمده",
        "ردیابی دما",
      ],
      contactTitle: "تماس با ما",
      namePlaceholder: "نام شما",
      emailPlaceholder: "ایمیل شما",
      messagePlaceholder: "پیام",
      sendButton: "ارسال پیام",
      phone: "تلفن: +93 700 000 000",
      email: "ایمیل: info@kccs.af"
    },
  };

  const t = translations[lang];
  const galleryImages = [1, 2, 3, 4, 5, 6].map((n) => ({
    src: `/gallery/image${n}.jpg`,
    alt: `Gallery ${n}`
  }));

  return (
    <div className="bg-gradient-to-br from-blue-100 to-white min-h-screen text-gray-800">
      {/* Navbar */}
      <nav className="backdrop-blur-md bg-white/30 sticky top-0 z-50 shadow-md p-4 flex justify-between items-center animate-fade-in">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="KCCS Logo" className="h-10 w-auto" onError={(e) => (e.currentTarget.style.display = 'none')} />
          <h1 className="text-2xl font-bold hover:text-blue-700 transition-colors duration-300">{t.company}</h1>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#about" className="hover:text-blue-700 transition-colors duration-300">{t.about}</a>
          <a href="#services" className="hover:text-blue-700 transition-colors duration-300">{t.services}</a>
          <a href="#contact" className="hover:text-blue-700 transition-colors duration-300">{t.contact}</a>
          <select value={lang} onChange={(e) => setLang(e.target.value)} className="bg-white/70 backdrop-blur p-1 rounded">
            <option value="en">EN</option>
            <option value="fa">FA</option>
            <option value="ps">PS</option>
          </select>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[url('/cold-storage.jpg')] bg-cover bg-center text-white h-[90vh] flex flex-col items-center justify-center text-center px-4 relative animate-fade-in">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg animate-slide-up">{t.heroTitle}</h2>
          <p className="text-xl mt-4 animate-fade-in delay-200">{t.heroDesc}</p>
          <div className="mt-6 space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition-transform hover:scale-105">{t.requestStorage}</button>
            <button className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-blue-600 transition-transform hover:scale-105">{t.contactUs}</button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-6 md:px-24 bg-white/70 backdrop-blur-md animate-fade-in">
        <h3 className="text-3xl font-semibold mb-6 hover:text-blue-700 transition-colors duration-300">{t.aboutTitle}</h3>
        <p>{t.aboutText}</p>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-6 md:px-24 animate-fade-in">
        <h3 className="text-3xl font-semibold mb-10 text-center hover:text-blue-700 transition-colors duration-300">{t.servicesTitle}</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {t.serviceList.map((service, idx) => (
            <div key={idx} className="rounded shadow bg-white/60 p-6 text-center font-medium hover:shadow-xl transition-shadow duration-300">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6 md:px-24 bg-white/80 animate-fade-in">
        <h3 className="text-3xl font-semibold mb-10 text-center hover:text-blue-700 transition-colors duration-300">Gallery</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              className="rounded shadow object-cover w-full h-60 hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 md:px-24 bg-blue-50 animate-fade-in">
        <h3 className="text-3xl font-semibold mb-6 text-center hover:text-blue-700 transition-colors duration-300">{t.contactTitle}</h3>
        <form className="max-w-xl mx-auto space-y-4">
          <input type="text" className="border p-3 w-full rounded focus:outline-blue-400" placeholder={t.namePlaceholder} />
          <input type="email" className="border p-3 w-full rounded focus:outline-blue-400" placeholder={t.emailPlaceholder} />
          <textarea className="border p-3 w-full rounded focus:outline-blue-400" placeholder={t.messagePlaceholder}></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition-transform hover:scale-105">{t.sendButton}</button>
        </form>
        <div className="text-center mt-6">
          <p>{t.phone}</p>
          <p>{t.email}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-4 text-gray-600 bg-white/40 backdrop-blur-md animate-fade-in">
        © {new Date().getFullYear()} Kabul Central Cold Storage. All rights reserved.
      </footer>
    </div>
  );
}
