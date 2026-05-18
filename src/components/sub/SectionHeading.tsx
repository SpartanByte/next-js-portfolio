import React from 'react'

// Define an interface for the component's props
// Required for Typescript
interface SectionHeadingProps {
  text: string;
}

// use the defined props interface for Typescript
const SectionHeading: React.FC<SectionHeadingProps> = ({ text }) => {
  return (
    <h1 className="text-2xl md:text-3xl font-bold text-gray-600 text-center md:text-left self-start dark:text-white transition-colors">
      {text}
    </h1>
  )
}

export default SectionHeading