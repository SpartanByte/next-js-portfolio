'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Load = () => {
  const [load, setLoad] = useState(false)

  useEffect(() => {
    setLoad(true)
  }, [])
  return (
    <motion.div
      initial={{ top: 0 }}
      animate={{ top: load ? '-100%' : 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full fixed left-0 top-0 flex items-center justify-center bg-gradient-to-t from-yellow-50 to-red-50 z-50"
    >
      <video autoPlay loop muted playsInline src="/icons/webm/loading.webm" type="video/webm"></video>
    </motion.div>
  )
}

export default Load