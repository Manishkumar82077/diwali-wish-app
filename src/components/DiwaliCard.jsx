// src/components/DiwaliCard.jsx
import React from "react";
import { motion } from "framer-motion";
import Message from "../components/Massage.jsx"; // Make sure to import your Message component

const DiwaliCard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-300 via-orange-300 to-red-400 p-4 md:p-8">
      {/* Animated Greeting Card */}
      <motion.div
        className="bg-white rounded-lg shadow-xl p-8 max-w-md text-center relative overflow-hidden border-4 border-yellow-400"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Enhanced Animated Border */}
        <motion.div
          className="absolute inset-0 rounded-lg border-4 animate-pulse"
          style={{
            borderImage:
              "linear-gradient(90deg, #FFD700, #FFF, #4FD1C5, #FF1493) 1", // Using complementary colors
            backgroundSize: "200% 200%",
          }}
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        ></motion.div>

        {/* Main Greeting Text */}
        <h1 className="text-4xl font-extrabold text-orange-500 mb-2 z-10">
          Happy Diwali 🪔
        </h1>

        {/* Name with Festive Font Style */}
        <h2 className="text-3xl font-bold text-yellow-600 mb-4 tracking-wide z-10">
          Sakshi
        </h2>

        {/* Message */}
        <Message />

        {/* Animated Diya (Flame Animation) */}
        <motion.div
          className="text-6xl mb-4 z-10"
          initial={{ scale: 0.9 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, type: "spring" }}
        >
          🪔
        </motion.div>

        {/* Animated Celebrate Button */}
        <motion.button
          className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-2 px-6 rounded-lg font-semibold shadow-lg transform hover:scale-105 hover:shadow-xl focus:outline-none transition duration-300 ease-in-out z-10"
          whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
          transition={{ duration: 0.4 }}
        >
          Celebrate Diwali!
        </motion.button>
      </motion.div>
    </div>
  );
};

export default DiwaliCard;
