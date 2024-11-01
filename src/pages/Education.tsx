import React from "react";
import { FaUniversity, FaCertificate, FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";
import Edubg from '/Edubg.jpg';

interface EducationItem {
  title?: string;
  institution?: string;
  degree?: string;
  certificate?: string;
  period: string;
}

const Education: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      institution: "University of Limerick",
      degree: "M.Sc. Interaction and Experience Design",
      period: "2024 - 2025",
    },
    {
      institution: "Ethiraj College for Women",
      degree: "B.Sc. Visual Communication",
      period: "2021 - 2024",
    },
  ];

  const certifications: EducationItem[] = [
    {
      title: "NCVTE",
      certificate: "Web Designing Diploma",
      period: "Nov 2022 - Dec 2022",
    },
  ];

  // Achievements array
  const achievements = [
    {
      title: "Organized the Largest Human Formation of 'HIV🎗AIDS'",
      description: "Involving 4000 RRC club members, recognized by the India Book of Records.",
    },
    {
      title: "Awards in Arts",
      description: "Won numerous awards in the field of arts.",
    },
    {
      title: "Completed Bachelor's with First Class with Distinction",
      description: "Achieved first-class distinction in B.Sc. Visual Communication.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-200">
      {/* Cover Image with Title Overlay */}
      <div className="relative h-72">
        <img
          src="/edubg.jpg" // Replace with the actual path to your image
          alt="Education Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1
            className="text-4xl font-extrabold text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Education & Certifications
          </motion.h1>
        </div>
      </div>

      <div className="p-10">
        <div className="flex flex-col lg:flex-row gap-16 justify-center items-start">
          {/* Education Timeline */}
          <div className="w-full lg:w-1/2 space-y-10">
            <h2 className="text-4xl font-semibold text-purple-600 mb-6 text-center flex items-center justify-center">
              <FaUniversity className="mr-3 text-4xl text-purple-500" />
              Academic Background
            </h2>
            <div className="relative space-y-12 pl-10">
              <div className="absolute left-5 top-0 h-full border-l-4 border-dashed border-purple-500"></div>
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col items-center space-x-6 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300`}
                >
                  <h3 className="text-2xl font-bold text-gray-800 text-center">
                    {item.institution}
                  </h3>
                  <p className="text-lg text-gray-700 text-center">{item.degree}</p>
                  <p className="text-gray-500 text-center">{item.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="w-full lg:w-1/2 space-y-10">
            <h2 className="text-4xl font-semibold text-purple-600 mb-6 text-center flex items-center justify-center">
              <FaCertificate className="mr-3 text-4xl text-purple-500" />
              Certifications
            </h2>
            <div className="flex justify-center">
              <div className="w-full max-w-lg flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
                <h3 className="text-2xl font-bold text-gray-800">{certifications[0].title}</h3>
                <p className="text-lg text-gray-700">{certifications[0].certificate}</p>
                <p className="text-gray-500">{certifications[0].period}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="my-16"></div>

        {/* Achievements */}
        <div className="mt-16">
          <h2 className="text-4xl font-semibold text-purple-600 mb-8 text-center flex items-center justify-center">
            <FaTrophy className="mr-3 text-4xl text-purple-500" />
            Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center p-6 bg-purple-100 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <h3 className="text-2xl font-bold text-purple-700">{achievement.title}</h3>
                <p className="text-lg text-purple-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
