'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

const PortfolioProject = ({ data, index }) => {
  return (
    <div id="portfolio-project" className="min-w-full">
      {/* First map for Next.js Image component */}
      {/* Use chaining for safety */}
      {data?.images?.map((imageItem, i) => (
        <Image
          src={imageItem.image}
          alt={imageItem.image_description || data.name || 'Project Image'}
          width={400}
          height={400}
          key={`nextjs-image-${i}`}
        />
      ))}
      <h2 className="text-2xl sm:text-xl font-bold">{data.name}</h2>
      <h3>
        <a href={data.url} target="_blank" rel="noopener noreferrer">
          {data.link_text}
        </a>
      </h3>
      <p>{data.description}</p>
      {/* Use chaining for safety */}
      {data?.images?.map((imageItem, i) => (
        <img
          src={imageItem.image}
          key={`html-img-${i}`}
          alt={imageItem.image_description || data.name || 'Project Thumbnail'} /* Use image_description, fallback to project name, then generic */
        />
      ))}
    </div>
  );
};


export default PortfolioProject

