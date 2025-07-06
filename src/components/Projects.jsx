'use client'
import { useState, useRef, useEffect } from 'react'
import { portfolioProjectData } from '../assets'
import { animate, motion } from 'framer-motion'

import PortfolioProject from './sub/PortfolioProject'
import SectionHeading from './sub/SectionHeading'


const Projects = () => {
    return(
 <div id="projects" className="flex flex-col items-center justify-start">
            <SectionHeading text={'Projects'} />
            <section className="background mb-14">
                <div className="flex items-center justify-between md:justify-center">
                    <div className="flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6">
                        {portfolioProjectData.map((data, i) => (
                            <PortfolioProject data={data} index={i} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects