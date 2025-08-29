import { motion } from "framer-motion";
import portrait from "@/assets/portrait.png";

export const HeroSection = () => {
  return (
    <section className="min-h-screen w-full relative overflow-hidden">
      {/* Fullscreen Portrait Background */}
      <motion.img
        src={portrait}
        alt="Low Poly Portrait"
        className="absolute inset-0 w-full h-full object-cover object-center"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-white tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Girish
        </motion.h1>

        <motion.p
          className="mt-4 text-xl md:text-2xl text-gray-200 italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Building ideas where logic meets creativity.
        </motion.p>
      </div>

      {/* Floating Blobs */}
      <div className="absolute top-20 left-20">
        <div className="w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="absolute bottom-20 right-20">
        <div className="w-32 h-32 bg-blue-400/20 rounded-full blur-3xl animate-ping"></div>
      </div>
      <div className="absolute top-1/2 right-1/4">
        <div className="w-24 h-24 bg-pink-500/20 rounded-full blur-2xl animate-bounce"></div>
      </div>
    </section>
  );
};
