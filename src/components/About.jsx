import React from "react";

function About() {
  return (
    <section
      id="about"
      className="w-full px-5 sm:px-10 md:px-16 lg:px-20 py-16 sm:py-24 bg-gray-900 text-gray-100"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
        
        {/* Left Text Section */}
        <div className="w-full lg:w-2/3 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            About <span className="text-indigo-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-500 rounded mb-3"></div>

          <p className="text-lg leading-relaxed text-gray-300">
            I'm <strong className="text-white">Muhammad Zeeshan Ameer</strong>, a
            passionate <span className="text-indigo-400 font-semibold">Full Stack Developer</span> 
            dedicated to building creative and efficient web applications.
            I focus on transforming ideas into high-quality, responsive, and user-friendly digital experiences.
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
            I am currently pursuing my BS Software Engineering from 
            <span className="text-indigo-400 font-medium"> Punjab University College of Information and Technology (New Campus)</span>, 
            and have completed a MERN Stack Development course from Nexus Berry Training & Solutions Centre.
          </p>

          <div className="w-full md:w-4/5 lg:w-2/3">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-neutral-300 leading-relaxed">
              Hello! I am <span className="font-bold text-neutral-200">Muhammad Zeeshan Ameer</span>, a Software Engineering 
              student at Punjab University College of Information Technology (NC), Lahore. I am a Full-Stack MERN developer 
              with hands-on experience in React, Node.js, Express, and MongoDB, having completed a comprehensive MERN Stack
              course from NexusBerry Training and Solutions Centre. I am passionate about building efficient, 
              user-friendly web and mobile applications and continuously enhancing my skills to deliver high-quality 
              solutions.
            </p>

            <p className="mt-6 sm:mt-10 underline decoration-2 underline-offset-8 text-slate-200 hover:text-indigo-500 transition">
              <a href="./Zeeshan_Ameer.pdf" download>
                DOWNLOAD RESUME
              </a>
            </p>

            {/* Resume Button */}
            <div className="pt-6">
              <a
                href="./Zeeshan_Ameer.pdf"
                download
                className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold text-base sm:text-lg hover:bg-indigo-700 transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
