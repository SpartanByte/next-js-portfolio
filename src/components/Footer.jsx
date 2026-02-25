'use client'
import { useState, useRef, useEffect } from 'react'
import { portfolioProjectData } from '../assets'
import { animate, motion } from 'framer-motion'
import AnimatedNavLink from './sub/AnimatedNavLink'
import { arrowUpLineIcon } from '../assets'
import { socialEmailIcons, laptopCoffeeAboveImage } from '../assets'
const Footer = () => {
    const currentYear = new Date().getFullYear();
        console.log("social icons: ", socialEmailIcons)

    const iconLinkStyles = {
        color: '#008cff',
    }

    const backToTopStyles = {
        color: '#008cff',
        display: 'flex',
        backgroundColor: 'transparent',
    }


    return(
        <div id="footer" className="grid place-items-center">
            <section className="background mb-14">
                <p><a className="pl-4 text-xl" style={backToTopStyles} href="#home">{ arrowUpLineIcon } Back to Top</a></p>
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

          <AnimatedNavLink href="#about" >
            About
          </AnimatedNavLink>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex justify-center gap-x-10 text-3xl text-yellow-600 sm:text-2xl"
        >
          {socialEmailIcons.map((item, i) => (
            <a
              href={item.href}
              key={i}
              className=""
              style={iconLinkStyles}
            >
              {item.icon}
            </a>
          ))}
        </motion.div>
                <div className="flex justify-evenly mt-3 mb-3">
                    <p>&copy; 2016-{currentYear} Brian Wardwell</p>
                </div>
            </section>
        </div>
    )
}

export default Footer