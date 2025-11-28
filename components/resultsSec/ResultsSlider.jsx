"use client"

// resolve the problem to show  the removed item at the end when scrolling left and vice versa
import React, {useRef, useState} from 'react'
import { Card, CardGroup} from '@/components/exports/for-home'
import {default as InnerResult} from './InnerResult'
import { FaCaretLeft, FaCaretRight} from 'react-icons/fa';
import { enm } from '@/utils/customFunctions';
import './slider.css'


const ResultsSlider = ({ data }) => {
    const [scrollPosition, setScrollPosition] = useState(-50);
    const sliderStatusRef = useRef([...data, ...data]);
    const scrollDirection = enm('left', 'right', 'none');
    const directionRef = useRef(scrollDirection.none);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleScrollLeft = () => {
      directionRef.current = scrollDirection.left;
      const arr = [...sliderStatusRef.current];
      sliderStatusRef.current = arr;
      setIsTransitioning(true);
      setScrollPosition(-100);
    }
    const handleScrollRight = () => {
       directionRef.current = scrollDirection.right;
       const arr = [...sliderStatusRef.current];
       sliderStatusRef.current = arr;
        setIsTransitioning(true);
        setScrollPosition(0);
    }

  const handleTransitionEnd = () => {
  const arr = [...sliderStatusRef.current];

  if (directionRef.current === scrollDirection.left) {
    arr.push(arr[0]);
    arr.shift();
  }
  else if (directionRef.current === scrollDirection.right) {
    arr.unshift(arr[arr.length - 1]);
    arr.pop();
  }

  sliderStatusRef.current = arr;
  setScrollPosition(-50);
  setIsTransitioning(false);

  directionRef.current = scrollDirection.none;
  };
  return (
    <div className='overflow-x-hidden w-12/12 relative'>
   <button 
      onClick={() => handleScrollLeft()}
      style={{ visibility: isTransitioning ? 'hidden' : 'visible' }} 
      className="absolute left-0 top-1/2 bg-[var(--primary-yellow-500)] text-black p-2 rounded-full shadow-lg transform -translate-y-1/2 z-10 hover:bg-yellow-400">
          <FaCaretLeft />
        </button>
      <div onTransitionEnd={handleTransitionEnd} 
        style={{ transform: `translateX(${scrollPosition}%)`,
                 transition: isTransitioning ? "transform 1s" : "none"
                 }} 
        className=" relative flex  pb-4 w-12/12">
            {sliderStatusRef.current.map((result, index) => (
                <div className='w-6/12 shrink-0 px-2' key={result.matchId + index}>
                    <Card >
                      <InnerResult result={result} />
                    </Card>
                  </div>
            ))}
      </div>
      <button 
      onClick={() => handleScrollRight()} 
      style={{ visibility: isTransitioning ? 'hidden' : 'visible' }} 
      className="absolute right-0 top-1/2 bg-[var(--primary-yellow-500)] text-black p-2 rounded-full shadow-lg transform -translate-y-1/2 z-10 hover:bg-yellow-400">
          <FaCaretRight />
      </button>
  </div>)

}

export default ResultsSlider