'use client'
import SectionHeading from './sub/SectionHeading'
import Image from 'next/image'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'

import { experienceData, arrowLeftIcon } from '../assets'

const Experience = () => {
  const date = new Date().getFullYear()

  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 95%', 'end end'],
  })

  const scrollY = useSpring(scrollYProgress, { stiffness: 200, damping: 20 })
  return (
    <div id="experience" className="relative py-20 ">
        {/* relative py-20*/}
      <SectionHeading text={'Professional Experience'} />
        {/* Image to correspond with experience*/}
        <div
            ref={containerRef}
            className="relative h-full flex flex-col items-center justify-center gap-y-10 lg:gap-y-20 py-10"
        >
          {experienceData.map((item, i) => (
          <div
            key={`id-${i}`}
            className={`w-[400px] md:w-[600px] xl:w-[480px] px-12 sm:px-0 relative ${
              i % 2 === 0
                ? 'xl:-left-[240px] lg:-left-0'
                : 'xl:left-[240px] lg:left-0'
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: 'spring', stiffness: 50 }}
              className="relative flex flex-col gap-y-3 rounded-md border border-red-300 bg-white p-4 tracking-wide sm:text-sm dark:bg-zinc-700 transition-colors z-20"
            >
              <h1 className="text-xl sm:text-lg font-light text-gray-700 dark:text-white">
                {item.title}
              </h1>
              <div className="text-gray-800 dark:text-gray-200 transition-colors">
                <span className="font-light">Experience:</span>
                <ul className="pl-2">

                </ul>
              </div>
              <span
                className={`absolute top-20 text-red-300 -translate-y-1/2 lg:hidden ${
                  i % 2 === 0 ? 'left-full rotate-180' : 'right-full'
                }`}
              >
              </span>
            </motion.div>
            <div

            >

            </div>
          </div>
        ))}

        <motion.div
          initial={{ scaleY: 0 }}
          style={{ scaleY: scrollY }}
          className="absolute w-1 h-full rounded-full bg-gray-300 origin-top"
        ></motion.div>
      </div>
    </div>
  )
}

export default Experience