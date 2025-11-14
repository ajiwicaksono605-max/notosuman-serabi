import { useEffect, useState } from "react";

function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Munculkan elemen setelah sedikit delay
    const timer = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="beranda"
      className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden min-h-[90vh]"
    >
      {/* Ornamen batik lembut */}
      <img
        src={process.env.PUBLIC_URL +"/batik.jpg"}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />

      {/* Bagian kiri: teks */}
      <div
        className={`md:w-1/2 text-center md:text-left space-y-6 relative z-10 transition-all duration-1000 ease-out ${show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
          }`}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight font-serif">
          Serabi Notosuman, <br />
          <span className="text-green-700 italic">
            Kelezatan Legendaris dari Solo
          </span>
        </h1>

        <p className="text-gray-700 text-lg max-w-md mx-auto md:mx-0 leading-relaxed font-[Merriweather]">
          Rasakan keaslian rasa serabi tradisional yang telah melegenda sejak 1923.
          Dibuat dari bahan alami pilihan dengan resep turun-temurun yang tetap dijaga keasliannya
        </p>

        <button
          onClick={() => {
            const menuSection = document.getElementById("menu");
            if (menuSection) {
              menuSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="bg-green-800 text-white px-7 py-3 rounded-full shadow-md hover:bg-green-900 transition transform hover:scale-105"
        >
          Lihat Menu
        </button>
      </div>

      {/* Bagian kanan: gambar */}
      <div
        className={`md:w-1/2 mt-10 md:mt-0 flex justify-center relative z-10 transition-all duration-1000 ease-out delay-300 ${show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
          }`}
      >
        <div className="p-4 bg-white rounded-2xl shadow-lg">
          <img
            src={process.env.PUBLIC_URL +"/serabi.jpeg"}
            alt="Serabi Notosuman"
            className="w-80 md:w-[420px] rounded-xl"
          />
        </div>
      </div>

      {/* Gradasi putih di bawah */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

export default Hero;
