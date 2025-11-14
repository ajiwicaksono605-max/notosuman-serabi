import React, { useState, useEffect } from "react";
import Navbar from './components/navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Location from './components/Location';
import Footer from './components/Footer';
import VisitorButton from './components/VisitorButton'; // ✅ Import komponen baru

import { db } from "./firebaseConfig";
import { ref, get, set } from "firebase/database";

function App() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const countRef = ref(db, "visitorCount");

    get(countRef).then((snapshot) => {
      if (snapshot.exists()) {
        const current = snapshot.val();
        setVisitorCount(current + 1);
        set(countRef, current + 1);
      } else {
        set(countRef, 1);
        setVisitorCount(1);
      }
    });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Location />
      <Footer />
      <VisitorButton count={visitorCount} />
    </div>
  );
}

export default App;
