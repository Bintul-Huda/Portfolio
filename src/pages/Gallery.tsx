import React from "react";

const Gallery: React.FC = () => {
  // Define items with a mix of photos and videos
  const galleryItems = [
    { type: 'photo', src: '/Img1.JPG', width: 'w-72', height: 'h-50' },
    { type: 'photo', src: '/Img2.jpg', width: 'w-48', height: 'h-58' },
    { type: 'video', src: '/Video1.MP4', width: 'w-72', height: 'h-72' },
    { type: 'photo', src: '/Img3.PNG', width: 'w-64', height: 'h-66' },
    { type: 'video', src: '/Video2.MP4', width: 'w-64', height: 'h-80' },
    { type: 'photo', src: '/Img4.jpeg', width: 'w-80', height: 'h-40' },
    { type: 'photo', src: '/Img5.PNG', width: 'w-49', height: 'h-64' },
    { type: 'video', src: '/Video3.MP4', width: 'w-64', height: 'h-72' },
    { type: 'photo', src: '/Img6.JPG', width: 'w-56', height: 'h-70' },
  ];

  return (
    <div className="min-h-screen p-10 bg-gradient-to-b from-purple-50 to-purple-200">
      {/* Mood Board Gallery */}
      <section>
        <h2 className="text-4xl font-semibold text-purple-600 mb-6 text-center"></h2>
        <div className="flex flex-wrap gap-0 justify-center">
          {galleryItems.map((item, index) => {
            // Condition to avoid two videos being placed next to each other
            if (item.type === 'video' && index > 0 && galleryItems[index - 1].type === 'video') {
              return null;
            }

            return (
              <div
                key={index}
                className={`flex-shrink-0 relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 ${item.height} ${item.width} ${item.src === '/Img6.JPG' ? '-mt-40 -ml-40' : ''}`} // Negative margin for Img6
              >
                {item.type === 'photo' ? (
                  <img
                    src={item.src}
                    alt={`Gallery Item ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
