import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      avatar: "https://via.placeholder.com/50",
      review: "Cric Opinion is my go-to platform for cricket insights. The analysis is top-notch!",
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "https://via.placeholder.com/50",
      review: "I love how detailed the match predictions are. Highly recommended!",
      rating: 4,
    },
    {
      id: 3,
      name: "Alice Johnson",
      avatar: "https://via.placeholder.com/50",
      review: "The articles are well-written and very informative. Great job!",
      rating: 5,
    },
    {
      id: 4,
      name: "Bob Brown",
      avatar: "https://via.placeholder.com/50",
      review: "Cric Opinion has helped me understand cricket better. Awesome platform!",
      rating: 1,
    },
    {
      id: 5,
      name: "Charlie Davis",
      avatar: "https://via.placeholder.com/50",
      review: "The live match updates are super accurate. Love using this site!",
      rating: 5,
    },
  ];

  const carouselRef = useRef(null);

  const goToNext = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.clientWidth / 2; // Adjust for desktop mode
      carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  const goToPrev = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.clientWidth / 2; // Adjust for desktop mode
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const arrowVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2 } },
    tap: { scale: 0.9 },
  };

  return (
    <div className="p-8 bg-gray-200 lg:-mt-34 -mt-22">
      <motion.h1
        className="text-3xl font-bold text-red-800"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Reviews & Ratings
      </motion.h1>
      <div className="flex items-center justify-center p-8 bg-gray-200 relative">
        {/* Previous Button */}
        <motion.button
          onClick={goToPrev}
          className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-opacity"
          variants={arrowVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>

        {/* Carousel */}
        <motion.div
          ref={carouselRef}
          className="w-full max-w-4xl overflow-x-auto scroll-snap-x flex snap-mandatory snap-x gap-4"
          style={{ scrollBehavior: 'smooth' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              className="flex-shrink-0 w-full md:w-1/2 p-4 bg-white rounded-lg shadow-lg snap-start"
              variants={cardVariants}
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">{review.name}</h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500">★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{review.review}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Next Button */}
        <motion.button
          onClick={goToNext}
          className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-opacity"
          variants={arrowVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}