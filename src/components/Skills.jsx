'use client'
import SectionHeading from './sub/SectionHeading'
import Image from 'next/image'
import { frontendSkills, backendSkills, cloudServicesData, otherSkillsAndToolsData, laptopCoffeeAboveImage } from '../assets'
import { motion } from 'framer-motion'

const Skills = () => {
const variants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.07,
      },
    }),
    hidden: {
      opacity: 0,
      y: 30,
    },
  }
  return(
        <div id="skills" className="min-h-screen flex flex-col items-center justify-center gap-y-20">
            <SectionHeading text={'Skills'} />
            <h2>Frontend Skills</h2>
            <div className="w-full flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6">
                {frontendSkills.map((item, i) => (
                    <motion.div
                        custom={i}
                        variants={variants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover={{ scale: 1.1 }}
                        viewport={{ margin: '50px', once: true }}
                        key={i}
                        className="flex items-center justify-center gap-x-3 rounded-xl border  bg-zinc-200 px-5 py-2 lg:px-2"
                    >
                        <Image
                        src={item.icon}
                        alt="Skills Image"
                        width={100}
                        height={100}
                        className="h-auto w-[40px]"
                        />
                        <p className="text-sm text-gray-600 font-bold">{item.name}</p>
                    </motion.div>
                ))}
        </div>
        <h2>Backend Skills</h2>
            <div className="w-full flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6">
                {backendSkills.map((item, i) => (
                    <motion.div
                        custom={i}
                        variants={variants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover={{ scale: 1.1 }}
                        viewport={{ margin: '50px', once: true }}
                        key={i}
                        className="flex items-center justify-center gap-x-3 rounded-xl border bg-zinc-200 px-5 py-2 lg:px-2"
                    >
                        <Image
                        src={item.icon}
                        alt="Skills Image"
                        width={100}
                        height={100}
                        className="h-auto w-[40px]"
                        />
                        <p className="text-sm text-gray-600 font-bold">{item.name}</p>
                    </motion.div>
                ))}
        </div>
          <h2>Cloud Services</h2>
            <div className="w-full flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6">
                {cloudServicesData.map((item, i) => (
                    <motion.div
                        custom={i}
                        variants={variants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover={{ scale: 1.1 }}
                        viewport={{ margin: '50px', once: true }}
                        key={i}
                        className="flex items-center justify-center gap-x-3 rounded-xl border bg-zinc-200 px-5 py-2 lg:px-2"
                    >
                        <Image
                        src={item.icon}
                        alt="Skills Image"
                        width={100}
                        height={100}
                        className="h-auto w-[40px]"
                        />
                        <p className="text-sm text-gray-600 font-bold">{item.name}</p>
                    </motion.div>
                ))}
        </div>
        <div className="w-full flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6">
            {otherSkillsAndToolsData.map((item, index) => (
                <div className="ml-4" key={index}>
                    <p className="font-bold" key={index}>{item.name}</p>
                    <ul className="list-disc">
                        {item.skill_items.map((skillItem, i) => (
                            <li className="ml-4" index={i} key={i}>
                                {skillItem.text}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
)}
export default Skills