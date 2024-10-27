// src/components/DiwaliCard.jsx
import React from "react";
import { motion } from "framer-motion";

const DiwaliCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-400 to-orange-500">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold text-yellow-500 mb-4">
          Happy Diwali 🪔
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          May this Diwali bring you joy, prosperity, and endless light in your
          life! ✨ Let the celebrations begin!
        </p>

        <motion.div
          className="text-6xl mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, duration: 1, type: "spring" }}
        >
          🪔
        </motion.div>

        <motion.button
          className="bg-yellow-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-yellow-600 focus:outline-none"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Celebrate Diwali!
        </motion.button>
      </motion.div>
    </div>
  );
};

export default DiwaliCard;
