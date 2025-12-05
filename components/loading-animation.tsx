"use client"

import { motion } from "framer-motion"

export default function LoadingAnimation() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const dotVariants = {
    hidden: { y: 0, opacity: 0.5 },
    visible: {
      y: -20,
      opacity: 1,
      transition: {
        duration: 0.6,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  }

  return (
    <div className="flex items-center justify-center py-24">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex gap-3">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            variants={dotVariants}
            className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
          />
        ))}
      </motion.div>
      <p className="ml-4 text-gray-600 font-semibold">Loading weather data...</p>
    </div>
  )
}
