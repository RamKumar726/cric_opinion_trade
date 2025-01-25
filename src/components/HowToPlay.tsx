import React from "react";
import { motion } from "framer-motion";

const HowToPlay = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.6 } },
  };

  return (
    <div id="howtoplay" className="lg:py-12 bg-white">
      <div className="container mx-auto">
        <motion.div
          className="text-center mt-12 mb-22 lg:px-60 px-8 bg-gray-200 rounded p-4 mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Animated Title */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-red-800"
            variants={textVariants}
          >
            How To Play ?
          </motion.h2>

          {/* Animated Description */}
          <motion.p
            className="text-gray-600 mt-2"
            variants={textVariants}
          >
            Ready to challenge other sports fans? Watch this video to learn how
            to play on Dream11 and get started now. Compete with sports fans,
            make a perfect Dream11 team with the best combination of players as
            per your knowledge and skill and win big.
          </motion.p>

          {/* Animated Video */}
          <motion.div
            className="mt-6 w-full max-w-2xl mx-auto aspect-video"
            variants={videoVariants}
          >
            <video
              controls
              className="w-full h-full rounded-lg shadow-lg"
              poster="/images/tumbnail.webp" // Thumbnail image before playing
            >
              <source
                src="/images/Dream11_ How to Play on Dream11.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowToPlay;