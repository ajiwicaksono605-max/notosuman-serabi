import { useEffect, useState } from "react";

function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Animasi muncul halus saat di-scroll
    const handleScroll = () => {
      const section = document.getElementById("tentang");
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) setVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="tentang"
      className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Ornamen lembut di background */}
      <img
        src={process.env.PUBLIC_URL +"/ornamen-batik.png"}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />

      {/* Gambar kiri */}
      <div
        className={`md:w-1/2 mb-10 md:mb-0 flex justify-center transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`}
      >
        <img
          src={process.env.PUBLIC_URL +"/serabi-tradisional.jpg"}
          alt="Proses Pembuatan Serabi"
          className="rounded-2xl shadow-lg w-80 md:w-[420px] object-cover"
        />
      </div>

      {/* Teks kanan */}
      <div
        className={`md:w-1/2 text-center md:text-left space-y-5 transition-all duration-1000 ease-out delay-300 ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 font-serif relative inline-block">
          Tentang Serabi Notosuman
          <span className="block w-24 h-1 bg-green-700 mt-2 mx-auto md:mx-0 rounded-full"></span>
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed font-[Merriweather]">
          Serabi Notosuman adalah usaha kuliner legendaris yang telah berdiri
          sejak 1923 di Solo, Jawa Tengah. Dengan resep turun-temurun yang
          dijaga keasliannya, kami menghadirkan cita rasa serabi tradisional
          yang autentik dan tak terlupakan.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed font-[Merriweather]">
          Nama <strong>"Notosuman"</strong> sendiri berasal dari lokasi awal
          berdirinya usaha ini di daerah Notosuman, Solo. Selama hampir seabad,
          Serabi Notosuman telah menjadi bagian dari warisan kuliner Kota Solo
          yang dicintai oleh masyarakat lokal maupun wisatawan.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed font-[Merriweather] italic">
          Kami menggunakan bahan-bahan pilihan dan proses pembuatan yang masih
          tradisional, menjadikan setiap gigitan Serabi Notosuman sebagai
          perjalanan rasa yang mengingatkan pada cita rasa masa lalu.
        </p>

        <blockquote className="text-green-800 italic border-l-4 border-green-700 pl-4 mt-6">
          “Dari dapur kecil di Notosuman, rasa legendaris ini lahir untuk
          menciptakan kenangan di setiap gigitan.”
        </blockquote>
      </div>
    </section>
  );
}

export default About;
