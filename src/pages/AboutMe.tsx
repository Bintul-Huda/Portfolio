import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Swiper CSS import
import { Autoplay } from 'swiper/modules';
import Bintul_Huda_Resume from '/Bintul_Huda_Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faFilm, faPaintBrush, faUser } from '@fortawesome/free-solid-svg-icons';

const AboutMe: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* About Me Section */}
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg p-6 rounded-lg mb-6">
        <img src="/Passion-shot.jpg" alt="Passion Shot" className="w-full md:w-1/2 h-auto rounded-lg mb-4 md:mb-0" />
        <div className="md:ml-6 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="text-lg mb-4">
          I am a dedicated UI/UX designer and developer who believes in the power of design to solve real-world problems. My journey began with a love for creating visually appealing experiences, but over time, I've learned that effective design goes beyond aesthetics; it requires a deep understanding of user needs. I bring together my skills in graphic design, motion graphics, and 3D modeling to create intuitive interfaces that not only look good but also enhance user satisfaction. I’m passionate about collaboration and continuous learning, always seeking ways to innovate and improve. I'm excited to contribute my expertise to projects that make a difference.
          </p>
          <button
  onClick={() => window.open('/Bintul_Huda_Resume.pdf')}
  className="px-4 py-2 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700"
>
  Resume
</button>

        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}            // Minimal space between images
          slidesPerView={9}           // 9 images visible at once
          loop={true}                 // Loop through slides indefinitely
          autoplay={{
            delay: 0,                 // Continuous movement
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={3000}                // Control speed for a slow movement
          className="flex justify-center"
        >
          <SwiperSlide><img src="/Photoshop.svg.png" alt="Photoshop" className="h-12" /></SwiperSlide>
          <SwiperSlide><img src="/Illustrator.svg.png" alt="Illustrator" className="h-12" /></SwiperSlide>
          <SwiperSlide><img src="/Figma.png" alt="Figma" className="h-12" /></SwiperSlide>
          <SwiperSlide><img src="/VS.png" alt="Visual Studio Code" className="h-12" /></SwiperSlide>
          <SwiperSlide><img src="/XD.svg.png" alt="Adobe XD" className="h-12" /></SwiperSlide>
          <SwiperSlide><img src="/Animate.svg.png" alt="Animate" className="h-12" /></SwiperSlide>
          <SwiperSlide><img src="/Maya.png" alt="Maya" className="h-12" /></SwiperSlide>
          <SwiperSlide><img src="/3ds max.png" alt="3ds Max" className="h-12" /></SwiperSlide>
          <SwiperSlide><img src="/Unity.png" alt="Unity" className="h-12" /></SwiperSlide>
          <SwiperSlide><img src="/vuforia.png" alt="Vuforia" className="h-12" /></SwiperSlide>
          <SwiperSlide><img src="/Pr.png" alt="Premiere Pro" className="h-12" /></SwiperSlide>
        </Swiper>
      </div>

     {/* Familiar With Section */}
     <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold mb-6">Familiar With</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "UI/UX Design", description: "Crafting intuitive and user-centered experiences", icon: faUser },
            { title: "Graphic Design", description: "Bringing stories to life through visual media", icon: faPaintBrush },
            { title: "3D Design", description: "Transforming ideas into dynamic 3D experiences", icon: faCube },
            { title: "Motion Graphics", description: "Animating to amplify brand stories", icon: faFilm }, // Updated description
          ].map((skill, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center transition-transform transform hover:scale-105">
              <FontAwesomeIcon icon={skill.icon} className="h-12 mb-4 text-purple-600" /> {/* Medium size icon */}
              <h3 className="text-xl font-bold">{skill.title}</h3>
              <p className="mt-2 text-gray-600 text-center">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;