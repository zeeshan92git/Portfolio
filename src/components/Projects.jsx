import React from 'react';

export default function Projects() {
  const projects = [
    {
      img: './doccure.jpg',
      title: 'DocCure',
      desc: 'A full-featured doctor appointment booking system built with MERN stack.',
      link: 'https://doccure-ecru.vercel.app'
    },
    {
      img: './admin.jpg',
      title: 'DocCure Admin Panel',
      desc: 'Admin dashboard for managing appointments and doctors efficiently.',
      link: 'https://doccure-admin.vercel.app'
    },
    {
      img: './Brand.PNG',
      title: 'Brand',
      desc: 'A branding website with modern UI showcasing services and portfolio.',
      link: 'https://brand-azure.vercel.app'
    },
    {
      img: './Bnexus.PNG',
      title: 'Business Nexus',
      desc: 'A small business management dashboard with analytics and reporting.',
      link: 'https://business-nexus-one.vercel.app'
    },
    {
      img: './rps.jpg',
      title: 'RPS Game',
      desc: 'A simple Rock-Paper-Scissors game implemented in JavaScript.',
      link: 'https://zeeshan92git.github.io/RPS-GAME'
    },
    {
      img: './wdb.PNG',
      title: 'Weather DashBoard',
      desc: 'Weather app showing real-time data and forecasts using API.',
      link: 'https://zeeshan92git.github.io/Weather_DashBoard'
    },
    {
      img: './quiz.jpg',
      title: 'Flag Quiz App',
      desc: 'A quiz app to test your knowledge about countries and flags.',
      link: 'https://quiz-app-kappa-ecru.vercel.app'
    }
  ];

  return (
    <section id="projects" className="w-full py-16 px-6 sm:px-10 md:px-14 bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-lg text-blue-500 font-light tracking-wide uppercase">
          <span className="underline underline-offset-4 decoration-blue-500/60">Projects</span>
        </p>
        <h2 className="sm:text-5xl text-3xl font-bold text-white mt-2">
          My Latest Work
        </h2>
        <p className="mt-3 sm:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto">
          I enjoy turning ideas into reality. Each project taught me something new about design, logic, and user experience.
        </p>
        <p className="mt-6 underline decoration-2 underline-offset-8 text-slate-200">
          <a
            href="https://github.com/zeeshan92git"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
          >
            VISIT MY GITHUB
          </a>
        </p>
      </div>

      {/* Projects Grid */}
      <div className="mt-12 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? 'zoom-in-right' : 'zoom-in-left'}
              className="w-full max-w-sm bg-gray-700 rounded-xl shadow-inner shadow-neutral-300 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="w-full h-48 sm:h-60 md:h-64 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 flex flex-col justify-between flex-grow">
                <div className="flex flex-col gap-1 mb-2">
                  <div className="flex items-center gap-2">
                    <i className="fa fa-circle text-blue-500 text-xs" aria-hidden="true"></i>
                    <h3 className="text-lg md:text-xl font-semibold italic text-white">{project.title}</h3>
                  </div>
                  <p className="text-sm text-neutral-300">{project.desc}</p>
                </div>

                <div className="mt-auto flex items-center gap-2 text-white hover:text-blue-500 cursor-pointer font-medium transition">
                  <p className="text-base md:text-lg">Visit Here</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg pt-1"
                  >
                    <i className="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
