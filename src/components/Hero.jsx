'use client'
import Image from 'next/image'
import { useMotionValue, useTransform, motion, useSpring } from 'framer-motion'
import { useState } from 'react'
import { heroIcons, laptopCoffeeAboveImage } from '../assets'
import AnimatedNavLink from './sub/AnimatedNavLink'

const Hero = () => {

    // Required constants
    const [windowOffset, setWindowOffset] = useState({ innerWidth: 0, innerHeight: 0 })
    const [mouseMove, setMouseMove] = useState(false)
    const [buttonHover, setButtonHover] = useState(false)
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    // Mouse actions
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e
        x.set(clientX)
        y.set(clientY)
    }

    const handleMouseEnter = () => {
        setWindowOffset({ innerWidth: window.innerWidth, innerHeight: window.innerHeight })
        setMouseMove(true)
    }

    const [isHovered, setIsHovered] = useState(false);
    const socialLinkStyles = { 
        color: isHovered ? '#024a86' : '#008cff',
    }


    const { innerWidth, innerHeight } = windowOffset

    // Note: useSpring is a hook provided by react-spring animation library
    const xSpring = useSpring(x, { stiffness: 100, damping: 10 })
    const ySpring = useSpring(y, { stiffness: 100, damping: 10 })
    // Apply useSpring settings for transform animation
    const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30])
    const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50])

    return (
        <div
            id="home"
            className="h-screen grid place-items-center"
        >
      <div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-y-3 font-light capitalize"
        >
        <motion.div
            className="flex items-center justify-center"
            style={{
                rotateX: mouseMove ? rotateX : 0,
                rotateY: mouseMove ? rotateY : 0,
                transition: '0.1s',
            }}
        >
            <motion.span
                className="absolute text-3xl font-semibold text-white"
                initial={{ scale: 0 }}
                animate={{
                opacity: buttonHover ? 0 : 1,
                scale: buttonHover ? 2 : 0,
                y: buttonHover ? -40 : 0,
                }}
                transition={{ opacity: { delay: 0.4 } }}
            >
                Test
            </motion.span>
        </motion.div>
        <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500 sm:text-2xl dark:text-white transition-colors">
            Brian Wardwell
        </h1>
        <p className="text-lg tracking-wider text-gray-700 dark:text-gray-200 transition-colors">
            Software Development Professional | Problem Solver | Technical Enthusiast
        </p>
        
        </motion.div>
         <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex justify-center gap-x-10 text-1xl text-yellow-600 sm:text-xl"
        >
                      <AnimatedNavLink href="#skills" >
            Skills
          </AnimatedNavLink>
          <AnimatedNavLink href="#experience">
            Experience
          </AnimatedNavLink>

          <AnimatedNavLink href="#projects">
            Projects
          </AnimatedNavLink>

            <AnimatedNavLink href="#projects" >
            About
          </AnimatedNavLink>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero