"use client"

import React from "react"
import { useInView } from "react-intersection-observer"

interface Props {
  children: React.ReactNode
}

const SlideUp: React.FC<Props> = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px", // Adjust this value as needed
  })

  return (
    <div
      ref={ref}
      className={`opacity-0 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8"
      } transition-all duration-500 ease-in-out`}
    >
      {children}
    </div>
  )
}

export default SlideUp
