import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

interface CardProps {
  number: number;
  title: string;
  description: string;
  imageUrl: string;
}

const Cards: React.FC<CardProps> = ({ number, title, description, imageUrl }) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="bg-gray-200 rounded-2xl shadow-md flex flex-col items-start p-6 relative w-full hover:shadow-lg transition-shadow duration-300 mt-10"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // Set `once` to false to animate every time
    >
      {/* Number Circle */}
      <motion.div
        className="flex items-center justify-center bg-green-500 text-white rounded-full w-12 h-12 shadow-lg mb-4"
        whileHover={{ scale: 1.1 }} // Add hover animation to the number circle
        whileTap={{ scale: 0.9 }} // Add tap animation to the number circle
      >
        <span className="text-lg font-semibold">{number}</span>
      </motion.div>

      {/* Card Content */}
      <div className="flex-1">
        <h2 className="font-semibold text-lg md:text-xl text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>

      {/* Image */}
      <motion.img
        src={imageUrl}
        alt="Match Card"
        className="absolute ml-20 -mt-15 w-50 h-auto transform translate-y-4"
        whileHover={{ scale: 1.05 }} // Add hover animation to the image
      />
    </motion.div>
  );
};

export default Cards;