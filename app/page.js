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
    <main className="container mx-auto px-4 md:px-8 lg:px-16">
      <div className="flex flex-col items-center justify-center my-10">
        <div className="relative h-40 w-40 md:h-52 md:w-52 lg:h-60 lg:w-60">
          <Image
            className='rounded-full'
            src="/ProfilePicture.png"
            alt="Picture of the author"
            layout='fill'
            objectFit='cover'
          />
        </div>
        <h1 className='text-4xl md:text-6xl leading-10 font-bold text-center text-trueGray-800 mt-6 md:mt-10 lg:mt-12'>Hey there. <br /> I &apos;m Rao Akif. <br />I &apos;m a software developer</h1>
        <p className='text-xl md:text-2xl text-justify text-trueGray-800 mt-6 md:mt-10 lg:mt-12 max-w'>
          I am a highly adaptable professional with expertise in multiple languages, frameworks, and technologies. I have experience in front-end development using JavaScript, React, Next, and Redux, as well as back-end development using Ruby on Rails and Node.js. I am also proficient in using various databases, tools, and methods such as Git, GitHub, Heroku, Netlify, Vercel, and mobile/responsive development. In addition, I excel in remote pair-programming, teamwork, and mentoring. Visit www.raoakif.github.io or email me at akifrao@gmail.com to learn more about my work.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
      <h2 className='mt-16 text-2xl font-bold text-trueGray-800'>What API did I used? And why did I used this?</h2>
      <p className='mt-5 mb-20 text-l text-trueGray-800'>To develop this project, first I developed an API, that could fetch data of my projects. Then I displayed this data in my application. I did this because I wanted to make one source of truth for my online portfolios and website and have to change it once at only one place.</p>
    </main>
  )
}
