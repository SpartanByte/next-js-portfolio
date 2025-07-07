'use client'
import { useState, useRef, useEffect } from 'react'
import { portfolioProjectData } from '../assets'
import { animate, motion } from 'framer-motion'
import HeroLinks from '../components/sub/HeroLinks'
import { arrowUpLineIcon } from '../assets'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return(
        <div id="footer" className="grid place-items-center">
            <section className="background mb-14">
                <p><a href="#home">{ arrowUpLineIcon } Back to Top</a></p>
                <HeroLinks />
                <div className="flex justify-evenly mt-3 mb-3">
                    <p><a href="mailto:brianwardwell@brianwardwell.com">Email: brianwardwell@brianwardwell.com</a></p>
                </div>
                <div className="flex justify-evenly mt-3 mb-3">
                    <p>&copy; 2025-{currentYear} Brian Wardwell</p>
                </div>
            </section>
        </div>
    )
}

export default Footer