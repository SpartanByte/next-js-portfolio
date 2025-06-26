'use client'
import Image from 'next/image'
import { heroIcons } from '@/assets'
import { useMotionValue, useTransform, motion, useSpring } from 'framer-motion'
import { useState } from 'react'

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
}

export default Hero