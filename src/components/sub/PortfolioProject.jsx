'use client'
import Image from 'next/image'

    const projectStyles = {
        borderBottom: '2px solid #008cff',
    }

    const projectImageStyles = {
        border: '2px solid #008cff',
        maxHeight: '300px'
    }


const PortfolioProject = ({ data, index }) => {
  return (
    <div id="portfolio-project" className="min-w-full border-b-2 border-gray-700">
      { /* chaining for safety */ }
      { /* image_description, fallback to project name, then generic */ }
      <div className="flex pb-4">
        {data?.images?.map((imageItem, i) => (
          <a href={imageItem.image} className="mr-3">
            <Image
              src={imageItem.image}
              alt={imageItem.image_description || data.name || 'Project Image'}
              className='w-full'
              style={projectImageStyles}
              width={400}
              height={400}
              key={`nextjs-image-${i}`} />
          </a>
        ))}
      </div>
      <h2 className="text-2xl sm:text-xl font-bold">{data.name}</h2>
      <h3>
        <a href={data.url} target="_blank" rel="noopener noreferrer">
          {data.link_text}
        </a>
      </h3>
      <p className='mb-3'>{data.description}</p>
    </div>
  );
};

export default PortfolioProject

