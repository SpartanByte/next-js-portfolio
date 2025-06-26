'use client'

import Navbar from '../components/Navbar'
import Load from '../components/Load'
import Toggle from '../components/Toggle'
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
      <Navbar id={id} />
      <div className="w-min" ref={compsRef}>

      </div>
    </>
  );
}
