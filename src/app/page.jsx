'use client'

import About from '../components/About'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Load from '../components/sub/Load'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Toggle from '../components/sub/Toggle'

import { useState, useRef, useEffect } from 'react'

export default function Home() {
  const [id, setId] = useState(0)
  const compsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const intersecting = entry.isIntersecting
          if (intersecting) {
            setId(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    console.log(compsRef);
    const compsArr = Array.from(compsRef.current.children)

    compsArr.forEach((comp) => {
      observer.observe(comp)
    })
  }, [])
  return (
    <>
      <Load />
      <Toggle>
         {/* Structured data (JSON-LD) for SEO and rich results. Update URLs/socials as needed. */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": "https://developer.brianwardwell.com#person",
              "name": "Brian Wardwell",
              "givenName": "Brian",
              "familyName": "Wardwell",
              "url": "https://developer.brianwardwell.com",
              "sameAs": [
                "https://github.com/SpartanByte",
                "https://www.linkedin.com/in/brianwardwell/"
              ],
              "description": "Full-stack web developer with experience in Next.js, Laravel, Ruby on Rails, and a background in IoT and enterprise systems. Passionate about continuous learning and building web experiences.",
              "knowsAbout": ["Next.js","React","JavaScript","TypeScript","PHP","Laravel","Ruby on Rails","C#","HTML","CSS","SQL","DevOps"],
              "image": "https://developer.brianwardwell.com/images/heroimage-laptopcoffee-001.jpg"
            },
            {
              "@type": "WebSite",
              "@id": "https://developer.brianwardwell.com/#website",
              "url": "https://developer.brianwardwell.com/",
              "name": "Brian Wardwell — Portfolio",
              "publisher": { "@id": "https://developer.brianwardwell.com/#person" },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://developer.brianwardwell.com/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          ]
        }) }} />
        <Navbar id={id} />
        <div className="w-75 md:w-full h-full flex flex-col justify-between ml-20 px-2 py-10 xl:py-6 z-10" ref={compsRef}>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <About />
          <Footer />
        </div>
      </Toggle>
    </>
  );
}
