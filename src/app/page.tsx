'use client'

import About from '../components/About'
import Experience from '../components/Experience'
import Load from '../components/Load'
import Navbar from '../components/Navbar'
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
      <Toggle>
        <Navbar id={id} />
        <div className="w-full" ref={compsRef}>
          <Skills />
          <Experience />
          <About />
        </div>
      </Toggle>
    </>
  );
}
