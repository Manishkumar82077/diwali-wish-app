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
        As you light the diyas and burst the crackers, may your life be filled
        with new beginnings and happiness. Wishing you a wonderful Diwali! ✨
      </p>
    </motion.div>
  );
}

export default Massage;
