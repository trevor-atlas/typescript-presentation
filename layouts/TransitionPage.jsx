import React from 'react'
import { motion } from 'framer-motion'

export default function TransitionPage({ children }) {
  return (
    <motion.div
    transition={{ duration: .5 }}
      exit={{ opacity: 0,  }}
      initial={{ opacity: 0, x: "200vw" }}
      animate={{ opacity: 1, x: "0" }}
    >
      {children}
    </motion.div>
  )
}
