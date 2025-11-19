import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Location() {
  const branches = [
    {
      id: 1,
      name: "Widuran Solo",
      fullName: "Serabi Notosuman Widuran Solo",
      address:
        "Jl. Sutan Syahrir No.106, Kepatihan Kulon, Kec. Jebres, Kota Surakarta, Jawa Tengah, 57129",
      phone: "+6287854136892",
      hours: "05.00 - 12.00 WIB",
      latitude: -7.564619155562401,
      longitude: 110.82889795331597,
      services: "Dine-in, Takeaway, Delivery",
      contact: "http://wa.me/6287783847886",
    },
    {
      id: 2,
      name: "Pusat Solo",
      fullName: "Serabi Notosuman Pusat Solo",
      address:
        "Jl. Moh. Yamin No.28, Jayengan, Kec. Serengan, Kota Surakarta, Jawa Tengah 57152",
      phone: "0271651852",
      hours: "05.00 - 17.00 WIB",
      latitude: -7.577267159761813,
      longitude: 110.82008519564495,
      services: "Dine-in, Takeaway",
      contact: "http://wa.me/6287783847886",
    },
    {
      id: 3,
      name: "Boyolali",
      fullName: "Serabi Notosuman Boyolali",
      address:
        "Jl. Pandanaran No.233, Recosari, Banaran, Kec. Boyolali, Kabupaten Boyolali, Jawa Tengah 57313",
      phone: "(0276) 3293482",
      hours: "05.00 - 17.00 WIB",
      latitude: -7.524969,
      longitude: 110.599801,
      services: "Dine-in, Takeaway",
      contact: "http://wa.me/6285785113556",
    },
    {
      id: 4,
      name: "Yogyakarta",
      fullName: "Serabi Notosuman Yogyakarta",
      address:
        "Jl. Bhayangkara No.62, Ngampilan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55261",
      phone: "0851-0144-0484",
      hours: "05.00 - 17.00 WIB",
      latitude: -7.797093,
      longitude: 110.362206,
      services: "Dine-in, Takeaway",
      contact: "http://wa.me/6287727920908",
    },
    {
      id: 5,
      name: "Kudus",
      fullName: "Serabi Notosuman Kudus",
      address:
        "Jl. Sunan Muria No.52, Glantengan, Kec. Kota Kudus, Kabupaten Kudus, Jawa Tengah 59313",
      phone: "(0291) 445928",
      hours: "05.00 - 17.00 WIB",
      latitude: -6.800976,
      longitude: 110.844592,
      services: "Dine-in, Takeaway",
      contact: "http://wa.me/6287783847886",
    },
    {
      id: 6,
      name: "Ponorogo",
      fullName: "Serabi Notosuman Ponorogo",
      address:
        "Jl. Gajah Mada No.2a, Krajan, Bangunsari, Kec. Ponorogo, Kabupaten Ponorogo, Jawa Timur 63416",
      phone: "0852-2531-5858",
      hours: "05.00 - 17.00 WIB",
      latitude: -7.871729,
      longitude: 111.470708,
      services: "Dine-in, Takeaway",
      contact: "http://wa.me/6287783847886",
    },
  ];

  const [selectedBranch, setSelectedBranch] = useState(branches[0]);

  return (
    <section id="lokasi" className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 font-serif">
          Lokasi Kami
        </h2>
        <p className="text-gray-600 mt-2">
          Temukan cabang Serabi Notosuman terdekat dan nikmati rasa legendaris kami
        </p>
        <span className="block w-24 h-1 bg-green-700 mt-4 mx-auto rounded-full"></span>
      </div>

      {/* Tag pilihan cabang */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {branches.map((branch) => (
          <button
            key={branch.id}
            onClick={() => setSelectedBranch(branch)}
            className={`px-5 py-2 rounded-full border transition-all duration-300 ${
              selectedBranch.id === branch.id
                ? "bg-green-700 text-white border-green-700 shadow-md scale-105"
                : "bg-white text-green-800 border-green-600 hover:bg-green-100"
            }`}
          >
            {branch.name}
          </button>
        ))}
      </div>

      {/* Peta dan info */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedBranch.id}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Peta */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-md transition-transform"
          >
            <iframe
              title={selectedBranch.fullName}
              src={`https://www.google.com/maps?q=${selectedBranch.latitude},${selectedBranch.longitude}&hl=id&z=16&output=embed`}
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="space-y-3"
          >
            <h3 className="text-2xl font-bold text-green-800">
              {selectedBranch.fullName}
            </h3>
            <p className="text-gray-700">{selectedBranch.address}</p>
            <p className="text-gray-600">
              <strong>Jam Buka:</strong> {selectedBranch.hours}
            </p>
            <p className="text-gray-600">
              <strong>Telepon:</strong> {selectedBranch.phone}
            </p>
            <p className="text-gray-600">
              <strong>Layanan:</strong> {selectedBranch.services}
            </p>
            <a
              href={selectedBranch.contact}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 bg-green-700 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-800 transition"
            >
              Hubungi via WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default Location;
