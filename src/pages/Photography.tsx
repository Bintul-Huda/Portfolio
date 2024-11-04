import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import styles from './Photography.module.css'; // Import your CSS module

const Photography: React.FC = () => {
  const navigate = useNavigate();

  
  const images = [
    {
      src: '/Aesthetic-shot.jpg',
      title: 'Aesthetic Photography',
      text: 'Capturing the fall-from the golden hue of the autumn leaves',
      link: '#Aesthetic-shot',
    },
    {
      src: '/Passion-shot.jpg',
      title: 'Passion Photography',
      text: 'A Reflection into My Artistic Journey',
      link: '#Passion-shot',
    },
    {
      src: '/headshot.jpeg',
      title: 'Professional headshot',
      text: 'Portraying the essence of calm and self-assured',
      link: '#headshot',
    }
  ];

  return (
    <div className={styles.photographyPage}>
      
      <Swiper
        slidesPerView={1} // Change to auto so slides take the correct size
        spaceBetween={30} // Space between slides
        centeredSlides={true} // Center the middle slide
        navigation={true} // Enable navigation arrows
        loop={true}
        autoplay={{
          delay: 6000, // 3 seconds delay between slides
          disableOnInteraction: false, // Autoplay will not stop after user interaction
        }}
        modules={[Navigation, Autoplay]} // Load Navigation module
        className="mySwiper"
        style={{ width: '100%', maxWidth: '1200px' }} // Set container width
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className="flex flex-col items-center">
              <img
                src={image.src}
                alt={`Image ${index + 1}`}
                className={`shadow-lg transition-transform duration-500 ${index === 1 ? styles.largeImage : styles.smallImage}`}
              />
              <div className={styles.blogSection}>
                <h3 className={styles.blogTitle}>{image.title}</h3>
                <p className={styles.blogText}>{image.text}</p>
                {/* "Read more" link that will navigate to the correct section */}
                <a 
                  href="#" // Prevent default anchor behavior
                  onClick={(e) => {
                    e.preventDefault(); // Prevent the page from reloading
                    // Navigate to PhotographyBlog and pass the section ID
                    navigate('/Photographyblog', { state: { scrollTo: image.link.replace('#', '') } });
                  }}
                  className={styles.readMore}
                >
                  Read more

                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Photography;
