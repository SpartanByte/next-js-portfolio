'use client'

import About from '../components/About'
import Experience from '../components/Experience'
import Load from '../components/sub/Load'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Toggle from '../components/sub/Toggle'

import { useState, useRef, useEffect } from 'react'

export default function Home() {
  const [id, setId] = useState<string | null>(null); // For Typescript, initialize it to accept strings
  const compsRef = useRef<string | null>(null); // For Typescript, initialize it to accept strings

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
      { threshold: 0.3 },
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
        <Navbar id={id} />
        <div className="w-min" ref={compsRef}>
          <Skills />
          <Experience />
          <Projects />
          <About />
        </div>
      </Toggle>
    </>
  );
}
