"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'
import Card from './components/Card';

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://raoakif-portfolio-api.netlify.app/api/projects');
      const data = await res.json();
      setProjects(data);
    }
    fetchData();
  }, []);

  return (
    <main className="">
      <Image
        className='m-auto rounded-full mt-10'
        src="/ProfilePicture.png"
        alt="Picture of the author"
        width={200}
        height={200}
      />
      <h1 className='mt-10 text-4xl leading-10 font-bold text-center text-trueGray-800'>Hey there. <br /> I &#39;m Rao Akif. <br />I &#39;m a software developer</h1>
      <p className='mt-10 w-3/4 text-xl text-justify m-auto text-trueGray-800'>
      I am a highly adaptable professional with expertise in multiple languages, frameworks, and technologies. I have experience in front-end development using JavaScript, React, Next, and Redux, as well as back-end development using Ruby on Rails and Node.js. I am also proficient in using various databases, tools, and methods such as Git, GitHub, Heroku, Netlify, Vercel, and mobile/responsive development. In addition, I excel in remote pair-programming, teamwork, and mentoring. Visit www.raoakif.github.io or email me at akifrao@gmail.com to learn more about my work.
      </p>
      <div className="m-20 grid grid-cols-2 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            image={project.image}
            tags={project.tags}
            linkLive={project.linkLive}
            linkSource={project.linkSource}
          />
        ))}
      </div>
    </main>
  )
}
