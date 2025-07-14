'use client'
import SectionHeading from './sub/SectionHeading'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'

import { experienceData } from '../assets'

const Experience = () => {
  const date = new Date().getFullYear()

  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 95%', 'end end'],
  })

  const scrollY = useSpring(scrollYProgress, { stiffness: 200, damping: 20 })
  return (

      <div id="experience" className="min-h-screen relative py-20 flex flex-col items-center justify-center gap-y-20">
      <SectionHeading text={'Professional Experience'} />
        {/* Image to correspond with experience*/}
        <div
            ref={containerRef}
            className="relative h-full flex flex-col items-center justify-center gap-y-10 lg:gap-y-20 py-10"
        >
          {experienceData.map((item, i) => (
          <div
            key={`id-${i}`}
            className={`w-full md:w-[600px] xl:w-[480px] relative ${
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

            {/* check for Other Noteworthy Roles header */}
            {item.summary_header ? (
              <h1 className="font-bold text-xl sm:text-lg text-gray-700 dark:text-white">{item.summary_header}</h1>
            ) : (
              null
            )}
              <h1 className="sm:text-lg font-light text-gray-700 dark:text-white">
                {item.title}
              </h1>
              <div className="text-gray-800 dark:text-gray-200 transition-colors">
                <ul className="mb-2 font-bold">
                  <li>{item.company}</li>
                  <li>{item.location}</li>
                  <li>{item.dates_start_end}</li>
                </ul>
                <p>Tools and Technologies:</p>
                <ul className="ml-4 list-disc">
                  {item.tools.map((toolItem, index) => (
                    <li className="ml-4" key={index}>
                      {toolItem.text}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
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