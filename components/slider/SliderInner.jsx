"use client"
import React from 'react'

const SliderInner = ({ data }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const totalSlides = data.length;
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    }


    React.useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, [totalSlides]);
  return (
    <>
      {data.map((photo, index) => {
        return (
          <div
            key={index}
            className='min-w-full h-full bg-cover bg-center'
            style={{ backgroundImage: `url(${photo.url})` , transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease-in-out' }}
          ></div>
        );
      })}
    </>
  );
}

export default SliderInner