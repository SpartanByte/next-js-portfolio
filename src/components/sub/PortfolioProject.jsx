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
          <a href={imageItem.image} className="mr-3" key={i}>
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
      <h2 className="lg:text-3xl text-xl font-bold pb-4">{data.name}</h2>
      <h3 className="text-xl sm:text-xl font-bold">Technologies: {data.technologies}</h3>
      <h4>
        <a className="text-lg" href={data.url} target="_blank" rel="noopener noreferrer">
          {data.link_text}
        </a>
      </h4>
      <p className='mb-3'>{data.description}</p>
    </div>
  );
};

export default PortfolioProject

