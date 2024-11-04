import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaBriefcase } from "react-icons/fa";

type Experience = {
  title: string;
  position: string;
  period: string;
  description: string;
};

const ProfessionalKnowledge: React.FC = () => {
  const workExperience: Experience[] = [
    {
      title: "American Academy for Yoga in Medicine",
      position: "Instructional and Graphic Designer",
      period: "Dec 2023 - Aug 2024",
      description: "Designed instructional materials and managed graphic design projects for healthcare-related content.",
    },
    {
      title: "Parveen Travels",
      position: "Graphic and Motion Designer Internship",
      period: "May 2023 - June 2023",
      description: "Created visual and motion graphics to enhance brand engagement across digital platforms.",
    },
    {
      title: "Moriaz Studio",
      position: "Graphic Designer Internship",
      period: "Sept 2022 - Nov 2022",
      description: "Handled branding and creative projects, producing logos, layouts, and promotional materials.",
    },
  ];

  const volunteeringExperience: Experience[] = [
    {
      title: "Red Ribbon Club of Ethiraj College",
      position: "Club Designer",
      period: "Apr 2023 - Mar 2024",
      description: "Contributed to club initiatives by designing event posters, social media content, and promotional materials.",
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-purple-100 to-gray-100">
      {/* Cover Image with Title Overlay */}
      <div className="relative h-72 mb-16">
        <img
          src="/Workbg.jpg" // Replace with the actual path to your image
          alt="Professional Knowledge Cover"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1
            className="text-4xl font-extrabold text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Professional Knowledge
          </motion.h1>
        </div>
      </div>

      {/* Work Experience Section */}
      <section className="mb-16">
        <div className="flex items-center justify-center mb-8">
          <FaBriefcase className="text-4xl text-purple-600 mr-3" />
          <h2 className="text-3xl font-semibold text-purple-600">Work Experience</h2>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center">
          {workExperience.map((experience, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg w-full md:w-2/5 lg:w-1/3 transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800">{experience.title}</h3>
              <p className="text-purple-600 font-medium">{experience.position}</p>
              <p className="text-gray-500 italic">{experience.period}</p>
              <p className="mt-2 text-gray-700 leading-relaxed">{experience.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Volunteering Experience Section with a unique style */}
      <section className="py-12 bg-purple-50 rounded-lg shadow-md">
        <div className="flex items-center justify-center mb-8">
          <FaHandsHelping className="text-4xl text-purple-600 mr-3" />
          <h2 className="text-3xl font-semibold text-purple-600">Volunteering Experience</h2>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center">
          {volunteeringExperience.map((volunteer, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg border-2 border-purple-200 shadow-md w-full md:w-3/4 lg:w-1/2 transition-transform transform hover:scale-105"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-purple-800">{volunteer.title}</h3>
              <p className="text-purple-500 font-medium">{volunteer.position}</p>
              <p className="text-gray-500 italic">{volunteer.period}</p>
              <p className="mt-3 text-gray-600 leading-relaxed">{volunteer.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProfessionalKnowledge;
