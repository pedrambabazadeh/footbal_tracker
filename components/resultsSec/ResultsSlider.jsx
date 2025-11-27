"use client"

// resolve the problem to show  the removed item at the end when scrolling left and vice versa
import React, {useEffect, useRef, useState} from 'react'
import {CardGroup, Card} from '@/components/exports/for-home'
import {default as InnerResult} from './InnerResult'
import { FaCaretLeft, FaCaretRight} from 'react-icons/fa';
import { enm } from '@/utils/customFunctions';
import './slider.css'


const ResultsSlider = ({ data }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const sliderStatusRef = useRef([...data]);
    const scrollDirection = enm('left', 'right', 'none');
    const directionRef = useRef(scrollDirection.none);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleScrollLeft = () => {
      directionRef.current = scrollDirection.left;
      setIsTransitioning(true);
      setScrollPosition(prev => (prev - 50));
       
    }
    const handleScrollRight = () => {
       directionRef.current = scrollDirection.right;
        setIsTransitioning(true);
        setScrollPosition(prev => prev + 50);
    }

    const handleTransitionEnd = () => {
  setIsTransitioning(false);
  const arr = [...sliderStatusRef.current];

  if (directionRef.current === scrollDirection.left) {
    const item = arr.shift();
    arr.push(item);
  }
  else if (directionRef.current === scrollDirection.right) {
    const item = arr.pop();
    arr.unshift(item);
  }

  sliderStatusRef.current = arr;
  setScrollPosition(0);

  directionRef.current = scrollDirection.none;
  };
    // I should handle that .75rem difference in transform. also, has to make the infinite scroll using the same data array twice and %
  return (
    <div className='overflow-x-hidden w-full relative'>
      <button onClick={handleScrollLeft} 
      className="absolute left-0 top-1/2 bg-[var(--primary-yellow-500)] text-black p-2 rounded-full shadow-lg transform -translate-y-1/2 z-10 hover:bg-yellow-400">
          <FaCaretLeft />
        </button>
      <div data-direction={directionRef.current} onTransitionEnd={handleTransitionEnd} 
        style={{ transform: `translateX(${scrollPosition}%)`,
                  transition: isTransitioning ? "transform 1s" : "none"}} 
        className=" relative flex  pb-4 scrollbar-hide">
            { sliderStatusRef.current.map((result, index) => (
                <div className='w-6/12 shrink-0 px-2' key={index}>
                    <Card >
                      <InnerResult result={result} />
                    </Card>
                  </div>
            ))}
      </div>
      <button onClick={handleScrollRight} 
      className="absolute right-0 top-1/2 bg-[var(--primary-yellow-500)] text-black p-2 rounded-full shadow-lg transform -translate-y-1/2 z-10 hover:bg-yellow-400">
          <FaCaretRight />
      </button>
  </div>)

}

export default ResultsSlider