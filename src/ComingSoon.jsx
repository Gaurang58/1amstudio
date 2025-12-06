import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ComingSoon() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatted = time.toLocaleTimeString();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-40"
            initial={{ x: Math.random() * 800 - 400, y: Math.random() * 800 - 400 }}
            animate={{
              y: [null, Math.random() * 800 - 400],
              x: [null, Math.random() * 800 - 400],
            }}
            transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, ease: "linear" }}
            style={{
              left: `${Math.random()*100}%`,
              top: `${Math.random()*100}%`,
              opacity: 0.06 + Math.random()*0.6
            }}
          />
        ))}
      </div>

      {/* Brand Name */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
        className="text-6xl font-bold tracking-widest mb-6"
      >
        1AM<span className="text-gray-400">STUDIO</span>
      </motion.h1>

      {/* Clock */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="text-5xl font-light tracking-widest mb-8"
      >
        {formatted}
      </motion.div>

      {/* Coming Soon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.6 }}
        className="text-2xl uppercase tracking-[.4em] text-gray-300"
      >
        Coming Soon
      </motion.div>

      {/* Neon Border Frame */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
        className="absolute rounded-3xl neon-frame w-[70vw] h-[70vh] pointer-events-none"
      />
    </div>
  );
}
