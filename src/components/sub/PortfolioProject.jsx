'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

const PortfolioProject = ({ data, index }) => {
      return(
        <div id="portfolio-project" className="min-w-full">
                      <Image
                          src={'/hero-images/laptopcoffee-001.jpg'}
                          alt="About Image"
                          width={400}
                          height={400}
                      />
            <h2 className="text-2xl sm:text-xl font-bold">{data.name}</h2>
            <h3><a href={data.url} target="_blank">{data.link_text}</a></h3>
            <p>{data.description}</p>
        </div>
      )
}

export default PortfolioProject