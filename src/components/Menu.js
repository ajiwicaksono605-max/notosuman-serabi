import { useEffect, useState } from "react";

function Menu() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("menu");
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) setShow(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menus = [
    {
      nama: "5 Serabi Original",
      jenis: "Serabi Original",
      deskripsi:
        "Serabi dengan rasa original, lembut dan gurih, disajikan dengan saus gula merah khas.",
      harga: "Rp 15.000 / Pax",
      gambar: process.env.PUBLIC_URL +"/serabi-original.jpg",
      terlaris: true,
    },
    {
      nama: "5 Serabi Coklat",
      jenis: "Serabi Coklat",
      deskripsi:
        "Serabi dengan taburan coklat leleh yang manis dan legit, cocok untuk pencinta coklat.",
      harga: "Rp 17.000 / Pax",
      gambar: process.env.PUBLIC_URL +"/serabi-coklat.jpg",
      terlaris: false,
    },
    {
      nama: "5 Serabi Campur",
      jenis: "Serabi Campur",
      deskripsi: "Serabi dengan rasa original dan rasa coklat.",
      harga: "Rp 15.000 / Pax",
      gambar: process.env.PUBLIC_URL +"/serabi-campur.jpg",
      terlaris: false,
    },
    {
      nama: "10 Serabi Original",
      jenis: "Serabi Original",
      deskripsi:
        "Serabi dengan rasa original, lembut dan gurih, disajikan dengan saus gula merah khas.",
      harga: "Rp 30.000 / Pax",
      gambar: process.env.PUBLIC_URL +"/serabi-original.jpg",
      terlaris: true,
    },
    {
      nama: "10 Serabi Coklat",
      jenis: "Serabi Coklat",
      deskripsi:
        "Serabi dengan taburan coklat leleh yang manis dan legit, cocok untuk pencinta coklat.",
      harga: "Rp 34.000 / Pax",
      gambar: process.env.PUBLIC_URL +"/serabi-coklat.jpg",
      terlaris: false,
    },
    {
      nama: "10 Serabi Campur",
      jenis: "Serabi Campur",
      deskripsi: "Serabi dengan rasa original dan rasa coklat.",
      harga: "Rp 30.000 / Pax",
      gambar: process.env.PUBLIC_URL +"/serabi-campur.jpg",
      terlaris: false,
    },
  ];

  return (
    <section
      id="menu"
      className="relative bg-gradient-to-b from-white to-gray-50 py-24 px-8 md:px-20 overflow-hidden"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 font-serif">
          Menu Andalan Kami
        </h2>
        <p className="text-gray-600 mt-2">
          Pilihan serabi legendaris kami yang dibuat dengan bahan alami dan cita rasa turun-temurun
        </p>
        <span className="block w-24 h-1 bg-green-700 mt-4 mx-auto rounded-full"></span>
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ease-out ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {menus.map((item, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* Label Terlaris */}
            {item.terlaris && (
              <div className="absolute top-3 left-3 bg-green-700 text-white text-xs px-3 py-1 rounded-full shadow-md">
                ⭐ Terlaris
              </div>
            )}

            {/* Gambar zoom effect */}
            <div className="overflow-hidden">
              <img
                src={item.gambar}
                alt={item.nama}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Isi card */}
            <div className="p-5 space-y-2">
              <h3 className="text-xl font-bold text-green-800">{item.nama}</h3>
              <p className="text-gray-600 text-sm">{item.jenis}</p>
              <p className="text-gray-700 text-base">{item.deskripsi}</p>
              <p className="text-green-700 font-semibold">{item.harga}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
