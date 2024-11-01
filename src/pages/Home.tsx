import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import profile from '/profile.jpeg'; // Import your image
import headshot from '/headshot.jpeg'; // Import your image
import PhotographyBlog from './Photographyblog';

const Home: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate


  const handleCardClick = () => {
    // Navigate to PhotographyBlog and reset scroll to top
    navigate('/Photographyblog', { state: { scrollTo: null } });
  };  

  const handleExploreMoreClick = () => {
    navigate('/Profile/AboutMe'); // Navigate to the About Me page
  };

   // Scroll to specific section based on state
   useEffect(() => {
    const sectionId = location.state?.scrollTo;
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.state]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Main Section with text and image side by side */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-8 py-16">
        {/* Left side: Text */}
        <div className="w-full md:w-1/2 text-left">
          <h1 className="text-5xl font-bold text-purple-700">Bintul Huda</h1>
          <p className="Name">
          I’m a designer passionate about crafting experiences that resonate. My work spans various mediums, blending artistry with technical expertise to bring ideas to life in Outstanding ways.
          </p>

        

          {/* Button */}
          <button 
            onClick={handleExploreMoreClick} 
            className="mt-8 py-2 px-6 bg-purple-600 text-white rounded-full hover:bg-purple-500"
          >
            Explore More
          </button>
        </div>

        {/* Right side: Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img src="/headshot.jpeg" alt="headshot" className="shadow-lg max-w-full w-62 h-auto" />
        </div>
      </div>

      {/* Blog Section */}
      <section className="w-full bg-purple-50 py-12 px-4">
        <h3 className="text-4xl text-purple-700 text-center">Blog Feed</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          
         {/* Card 1 with pop effect and click functionality */}
         <div
            onClick={handleCardClick} // Clickable card
            className="bg-white rounded-lg shadow-lg p-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <img src="/Photography collage.jpg" alt="Photography Assignment" className="rounded-lg mb-4" />
            <h4 className="text-purple-600 text-lg font-bold">The Art of Photography</h4>
            <p className="Photographycaption">Capturing the essence of creativity in every frame</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img src="/path-to-image-2.jpg" alt="Art Post 2" className="rounded-lg mb-4" />
            <h4 className="text-purple-600 text-lg font-bold">From Painting to 3D Modeling: Bintul Huda's Art Evolution</h4>
            <p className="text-gray-600 mt-2">Explore the journey of artistic growth from traditional to modern mediums.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img src="/path-to-image-3.jpg" alt="Art Post 3" className="rounded-lg mb-4" />
            <h4 className="text-purple-600 text-lg font-bold">Exploring the Multidisciplinary Journey of an Artist</h4>
            <p className="text-gray-600 mt-2">A journey of self-discovery through a multidisciplinary approach to art.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

