import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import headshot from '/headshot.jpeg';
import aestheticShot from '/Aesthetic-shot.jpg';
import passionShot from '/Passion-shot.jpg';

const PhotographyBlog: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.state?.scrollTo;
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.state]);

  return (
    <div className="bg-white w-full min-h-screen flex flex-col items-center">
      {/* Main Container with Full Width */}
      <div className="w-full max-w-screen-lg px-6 md:px-10 py-10 bg-white">

        {/* Headshot Section */}
        <div id="headshot" className="w-full">
          <h1 className="text-4xl text-purple-700 font-bold text-center">Headshot</h1>
          <div className="mt-8 flex justify-center">
            <img src={headshot} alt="Headshot" className="w-3/4 md:w-64 h-auto shadow-lg" />
          </div>
          <div className="mt-8 text-left">
            <h2 className="text-2xl font-bold text-purple-600">The Story Behind the Shot</h2>
            <p className="mt-4 text-gray-700">
            In this shot, what I had in mind was professionalism with an approachable outlook, which could portray the essence of calm and self-assured.
            </p>
            <h2 className="text-2xl font-bold text-purple-600 mt-8">Camera Settings</h2>
            <ul className="list-disc ml-5 mt-4 text-gray-700">
              <li><strong>Aperture: f1.6</strong> – This was to make a very shallow depth of field. It would make sure the face remains in sharp focus while the background remains soft and doesn't distract from the image.</li>
              <li><strong>ISO: 64</strong> – The ISO was kept low to maintain the sharpness of the picture without adding extra noise. It was bright enough with plenty of natural light, which captured the picture well and clearly.</li>
              <li><strong>Shutter Speed: 1/122s</strong> – A reasonably fast shutter speed captured the subject well with no motion blur. This resulted in a crystal-clear photo.</li>
            </ul>
            <h2 className="text-2xl font-bold text-purple-600 mt-8">Editing Techniques</h2>
            <ol className="list-decimal ml-5 mt-4 text-gray-700">
              <li>The background has been removed for a clean and professional finish.</li>
              <li>I added an adjustment layer for Curves, selecting parts of the face that needed lightening or darkening. Under-eye and chin has lightening on the face, whereas the contours along the cheekbones slightly darker which adds depth to the face, then used Gaussian blur to smoothen the effect. This subtle contrast highlights and defines the natural features.</li>
              <li>Finally, for the removal of textures and marks on the face, I used the technique of inverting vivid light with a high pass filter and a Gaussian blur on this layer completes it all by not making the changes overwhelming so that the image remains natural. Once the high pass and blur were complete, a layer mask was added to selectively take out texture and marks on the face. Very softly brushing on a very soft brush onto the areas that would need this effect.</li>
            </ol>
          </div>
        </div>

        {/* Aesthetic Shot Section */}
        <div id="Aesthetic-shot" className="mt-16 w-full">
          <h1 className="text-4xl text-purple-700 font-bold text-center">Aesthetic Shot</h1>
          <div className="mt-8 flex justify-center">
            <img src={aestheticShot} alt="Aesthetic Shot" className="w-3/4 md:w-64 h-auto shadow-lg" />
          </div>
          <div className="mt-8 text-left">
            <h2 className="text-2xl font-bold text-purple-600">The Story Behind the Shot</h2>
            <p className="mt-4 text-gray-700">
            This shot captures the fall-from the golden hue of the autumn leaves to the soft elegance in the expression. The play of light and shadow creates mystery while underlining the natural beauty of the whole scene. The idea of the shot would be to make an artistic portrait, merging myself with nature, almost as if I am a  part of the environment itself. The golden leaves that surrounded me speak volumes of warmth and harmony.
            </p>
            <h2 className="text-2xl font-bold text-purple-600 mt-8">Camera Settings</h2>
            <ul className="list-disc ml-5 mt-4 text-gray-700">
              <li><strong>Aperture: f1.6</strong> – Large aperture created shallow depth of field, keeping the subject's face sharp while the surrounding leaves would soften. </li>
              <li><strong>ISO: 50</strong> – The low ISO was chosen because I want the picture to be clear and less noisy, it was bright enough with natural light.</li>
              <li><strong>Shutter Speed: 1/1372s</strong> – A fast shutter speed to ensure the shot is in focus and captures these shots of sunlight filtering through leaves while avoiding any possible blurring due to movements.</li>
            </ul>
            <h2 className="text-2xl font-bold text-purple-600 mt-8">Editing Techniques</h2>
            <ol className="list-decimal ml-5 mt-4 text-gray-700">
              <li>I used the curve adjustment layer on the face so that the areas such as the cheeks, and under the eyes became bright to reflect natural light, while other areas were darkened slightly to create a contrast that exudes natural contours of the face, adding depth. then used Gaussian blur to smoothen the effect.</li>
              <li>Used a high pass filter with vivid light inverted for removing unwanted texture. This process helped to maintain the organic texture of the subject by keeping the facial skin smooth with detailed skin texture. Further, a Gaussian blur applied post the high pass filter made sure that the retouching looked organic and didn't get over-filtered.  A layer mask was added, and then the brush tool was used selectively to mask the texture on the face, keeping it soft yet natural.</li>
              <li>This shot of the aesthetic was quite essential in terms of colour grading. I developed the yellow and green tones in the leaves to bring out warm hues of autumn, making the environment feel full and more atmospheric. Colour grading connected the subject to the surroundings through harmony between golden leaves and soft tones of skin.</li>
            </ol>
          </div>
        </div>

        {/* Passion Shot Section */}
        <div id="Passion-shot" className="mt-16 w-full">
          <h1 className="text-4xl text-purple-700 font-bold text-center">Passion Shot</h1>
          <div className="mt-8 flex justify-center">
            <img src={passionShot} alt="Passion Shot" className="w-3/4 md:w-64 h-auto shadow-lg" />
          </div>
          <div className="mt-8 text-left">
            <h2 className="text-2xl font-bold text-purple-600">The Story Behind the Shot</h2>
            <p className="mt-4 text-gray-700">
            This is very close to my heart because it encompasses just about where my whole artistic journey began. For me, painting is not something like a hobby, it's passion. Ever since I was little, colours fascinated me and how using them could turn any ordinary surface into a masterpiece. With this shot, I wanted to evoke the closeness between myself and my art, using nature as the canvas on which I express myself.
            </p>
            <h2 className="text-2xl font-bold text-purple-600 mt-8">Camera Settings</h2>
            <ul className="list-disc ml-5 mt-4 text-gray-700">
              <li><strong>Aperture: f1.6</strong> – In this picture, a wide aperture is used to maintain the focus on the subject while blurring out the surrounding flowers. This created a depth of field that emphasized not only how focused I was on my work but also had the added effect of bringing clarity of detail to elements important in the photograph, such as the facial expression and the brush in my hand.</li>
              <li><strong>ISO: 50</strong> – This added to the clarity and the absence of noise in this picture, as there was sufficient natural light.</li>
              <li><strong>Shutter Speed: 1/951s</strong> – This shutter speed was fast enough to freeze the movement of the flowers which were continuously moving.</li>
            </ul>
            <h2 className="text-2xl font-bold text-purple-600 mt-8">Editing Techniques</h2>
            <ol className="list-decimal ml-5 mt-4 text-gray-700">
              <li>I used the curve adjustment layer on the face so that the areas such as the cheeks, and under the eyes became bright to reflect natural light, while other areas were darkened slightly to create a contrast that exudes natural contours of the face, adding depth. then used Gaussian blur to smoothen the effect.</li>
              <li>It was an important part of the process, giving life to the scene through colour grading. The overall tones of the image were balanced so that the colour palette remains warm and alive.</li>
              <li>Creatively, I then changed the colour of three flowers into bright pink by selecting and adjusting hue. The manipulation of the flowers' colours was done in a subtle way to show the impact of the touch of a creativity, thus, bringing out the emotion of the scene.</li>
              <li>To emphasize my role as an artist, I added a paint-on-brush effect that I was holding. I used a curve adjustment layer to add the colour of the paint on the brush.</li>
            </ol>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PhotographyBlog;
