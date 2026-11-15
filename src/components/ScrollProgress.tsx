"use client"
import { useScroll, useSpring, motion } from "framer-motion"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[9999] bg-gradient-to-r from-[#2997ff] via-cyan-400 to-fuchsia-500 pointer-events-none"
      aria-hidden="true"
    />
  )
}
