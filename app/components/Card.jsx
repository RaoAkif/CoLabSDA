import Image from 'next/image';

export const Card = ({ title, image, tags, linkLive, linkSource }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-60">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt={title}
        />
      </div>
      <div className="px-4 py-2">
        <h2 className="text-lg font-medium text-gray-800">{title}</h2>
        <div className="flex flex-wrap mt-2">
          {Object.values(tags).map((tag, index) => (
            <span
              key={index}
              className="mr-2 mb-2 px-2 py-1 bg-gray-200 rounded-lg text-gray-700 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <a
            href={linkLive}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-400 text-white px-4 py-2 rounded-lg hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
          >
            Live
          </a>
          <a
            href={linkSource}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-pink-400 hover:text-white transition-colors duration-300"
          >
            Source
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card