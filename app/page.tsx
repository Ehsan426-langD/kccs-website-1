export default function KCCSWebsite() {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-white min-h-screen text-gray-800">
      {/* Frosted Navbar */}
      <nav className="backdrop-blur-md bg-white/30 sticky top-0 z-50 shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="KCCS Logo" className="h-10 w-auto" />
          <h1 className="text-2xl font-bold">Kabul Central Cold Storage</h1>
        </div>
        <div className="space-x-6">
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[url('/cold-storage.jpg')] bg-cover bg-center text-white h-[90vh] flex flex-col items-center justify-center text-center px-4 relative">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">Preserving Freshness</h2>
          <p className="text-xl mt-4">Modern cold storage solutions in the heart of Kabul</p>
          <div className="mt-6 space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded">Request Storage</button>
            <button className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-blue-600">Contact Us</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 md:px-24 bg-white/70 backdrop-blur-md">
        <h3 className="text-3xl font-semibold mb-6">About Us</h3>
        <p>
          Kabul Central Cold Storage (KCCS) offers state-of-the-art storage solutions for perishable goods,
          serving Afghan businesses with reliable, efficient, and temperature-controlled facilities.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 md:px-24">
        <h3 className="text-3xl font-semibold mb-10 text-center">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {['Cold & Frozen Storage', 'Controlled Environments', '24/7 Monitoring', 'Logistics Support', 'Bulk Storage Solutions', 'Temperature Tracking'].map((service, idx) => (
            <div key={idx} className="rounded shadow bg-white/60 p-6 text-center font-medium">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 md:px-24 bg-blue-50">
        <h3 className="text-3xl font-semibold mb-6 text-center">Contact Us</h3>
        <form className="max-w-xl mx-auto space-y-4">
          <input type="text" className="border p-3 w-full rounded" placeholder="Your Name" />
          <input type="email" className="border p-3 w-full rounded" placeholder="Your Email" />
          <textarea className="border p-3 w-full rounded" placeholder="Message"></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-4 text-gray-600 bg-white/40 backdrop-blur-md">
        © {new Date().getFullYear()} Kabul Central Cold Storage. All rights reserved.
      </footer>
    </div>
  );
}
