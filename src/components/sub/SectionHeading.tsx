import React from 'react'

// Define an interface for the component's props
// Required for Typescript
interface SectionHeadingProps {
  text: string;
}

// use the defined props interface for Typescript
const SectionHeading: React.FC<SectionHeadingProps> = ({ text }) => {
  return (
    <h1 className="text-3xl sm:text-2xl font-bold text-gray-600 mb-14 self-start dark:text-white transition-colors">
      {text}
    </h1>
  )
}

export default SectionHeading