'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

const PortfolioProject = ({ data, index }) => {
    {/* Reset the state */}
    const [show, setShow] = useState(false)
      return(
        <div id="portfolio-project" className="min-h-screen flex flex-col items-center justify-center">
            <h2>Project Name</h2>
            <p>Project Description</p>
        </div>
      )
}

export default PortfolioProject