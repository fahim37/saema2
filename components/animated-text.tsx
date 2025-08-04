"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  simple?: boolean
  interactive?: boolean
  gradient?: string
}

export const AnimatedText = ({
  text,
  className = "",
  delay = 0,
  simple = false,
  interactive = false,
  gradient = "from-[#5F39BB] to-[#8B5CF6]",
}: AnimatedTextProps) => {
  const [isHovered, setIsHovered] = useState(false)

  if (simple) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={interactive ? { scale: 1.02, y: -2 } : {}}
      >
        {text}
      </motion.div>
    )
  }

  return (
    <motion.div className={className} onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.03,
            ease: "easeOut",
          }}
          whileHover={
            interactive
              ? {
                  scale: 1.2,
                  color: "#5F39BB",
                  textShadow: "0 0 10px rgba(95, 57, 187, 0.8)",
                  y: -5,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }
              : {}
          }
          className="inline-block hover:cursor-pointer"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  )
}
