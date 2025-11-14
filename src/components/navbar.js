import { useState } from "react";
import { scroller } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Beranda", to: "beranda" },
    { name: "Tentang Kami", to: "tentang" },
    { name: "Menu", to: "menu" },
    { name: "Lokasi Kami", to: "lokasi" },
  ];

  const handleScroll = (target) => {
    const element = document.getElementById(target);
    if (!element) {
      console.warn(`⚠️ Section "${target}" tidak ditemukan`);
      return;
    }

    scroller.scrollTo(target, {
      duration: 600,
      delay: 0,
      smooth: true,
      offset: -80,
    });

    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Kiri: Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="Logo Serabi"
            className="w-12 h-12 object-contain"
          />
          <div>
            <h1 className="text-lg font-bold text-gray-800">Serabi Notosuman</h1>
            <p className="text-sm text-gray-500 -mt-1">
              Legenda Rasa sejak 1923
            </p>
          </div>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-gray-700 font-medium">
            {menuItems.map((item) => (
              <li key={item.name} className="relative cursor-pointer group">
                <button
                  onClick={() => handleScroll(item.to)}
                  className="hover:text-green-700 transition duration-300"
                >
                  {item.name}
                </button>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-700 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Tombol Hamburger */}
        <button
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-medium">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleScroll(item.to)}
                  className="hover:text-green-700 transition duration-300"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
