'use client'
import { useState, useRef, useEffect } from 'react'
import { portfolioProjectData } from '../assets'

import PortfolioProject from './sub/PortfolioProject'
import SectionHeading from './sub/SectionHeading'

const Projects = () => {
    return(
        <div id="projects" className="min-h-screen flex flex-col items-center justify-start">
            <SectionHeading text={'Projects'} />
            <section className="background mb-14">
                <h2 className="mb-4">Click images for full size</h2>
                <div className="flex items-center justify-between md:justify-center">
                    <div className="flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6">
                        {portfolioProjectData.map((data, i) => (
                            <PortfolioProject data={data} index={i} key={i} /> 
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects