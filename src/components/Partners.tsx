import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

function Partner() {
  // Animation variants for partner logos
  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div
      id="partners"
      className="py-16 lg:bg-gradient-to-b from-red-100 to-white lg:-mt-12"
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-800">
            Our Partners
          </h2>
          <p className="text-gray-600 mt-2">
            We are proud to collaborate with these amazing partners.
          </p>
        </div>

        {/* Partner Logos Grid */}
        <motion.div
          className="bg-white rounded-2xl p-8 transition-shadow duration-300 mx-auto w-full max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // Animate every time the component enters the viewport
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2, // Stagger animations for child elements
              },
            },
          }}
        >
          <div className="flex flex-wrap justify-center gap-8">
            {[1, 2, 3, 4].map((index) => (
              <motion.div
                key={index}
                variants={logoVariants} // Apply animation variants to each logo
                whileHover={{ scale: 1.1 }} // Add hover animation
                whileTap={{ scale: 0.9 }} // Add tap animation
              >
                <img
                  src={`images/partner${index}.webp`}
                  alt={`Partner ${index}`}
                  className="rounded-lg w-24 h-24 object-cover transition-all duration-300 hover:shadow-xl shadow"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Partner;