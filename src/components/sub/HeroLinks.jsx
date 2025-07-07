'use client'
import { useState } from 'react'
import { motion} from 'framer-motion'

const HeroLink = ( ) => {
      const [isHovered, setIsHovered] = useState(false);

      const heroLinkStyles = { 
        backgroundColor: isHovered ? '#024a86' : '#008cff',
      }

      return(
        <div className="flex">
          <motion.a
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          href="#skills"
          className="mx-auto mt-7 ml-2 block w-max rounded-lg px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
          style={heroLinkStyles}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          >
            Skills
          </motion.a>
          <motion.a
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          href="#experience"
          className="mx-auto mt-7 ml-2 block w-max rounded-lg px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
          style={heroLinkStyles}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          >
            Experience
          </motion.a>
          <motion.a
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          href="#projects"
          className="mx-auto mt-7 ml-2 block w-max rounded-lg px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
          style={heroLinkStyles}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          >
            Projects
          </motion.a>
          <motion.a
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          href="#about"
          className="mx-auto mt-7 ml-2 block w-max rounded-lg px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
          style={heroLinkStyles}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          >
            About
          </motion.a>
        </div>
      )
}

export default HeroLink