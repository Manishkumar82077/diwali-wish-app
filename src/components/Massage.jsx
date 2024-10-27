import React from "react";
import { motion } from "framer-motion";

function Massage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <p className="text-lg text-gray-700 mb-6">
        May this Diwali bring joy, prosperity, and endless light in your life!
        ✨
      </p>
    </motion.div>
  );
}

export default Massage;
