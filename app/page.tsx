"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function KCCSWebsite() {
  const [lang, setLang] = useState("en");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const translations = { /* ... existing translations ... */ };
  const t = translations[lang];

  const galleryImages = [1, 2, 3, 4, 5, 6].map((n) => ({
    src: `/gallery/image${n}.jpg`,
    alt: `Gallery ${n}`
  }));

  return (
    <div className="bg-gradient-to-br from-blue-100 to-white min-h-screen text-gray-800">
      {/* Navbar, Hero, About, Services... */}

      {/* Gallery Section */}
      <section className="py-16 px-6 md:px-24 bg-white/80">
        <h3 className="text-3xl font-semibold mb-10 text-center">Gallery</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              className="rounded shadow object-cover w-full h-60 cursor-pointer"
              onClick={() => {
                setLightboxIndex(index);
                setLightboxOpen(true);
              }}
            />
          ))}
        </div>
        {lightboxOpen && (
          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            slides={galleryImages.map((img) => ({ src: img.src }))}
            index={lightboxIndex}
          />
        )}
      </section>

      {/* Contact and Footer remain the same */}
    </div>
  );
}
