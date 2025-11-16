"use client"

// resolve the problem to show  the removed item at the end when scrolling left and vice versa
import React, {useEffect, useRef, useState} from 'react'
import {CardGroup, Card} from '@/components/exports/for-home'
import {default as InnerResult} from './InnerResult'
import { FaCaretLeft, FaCaretRight} from 'react-icons/fa';
import { enm } from '@/utils/customFunctions';


const ResultsSlider = ({ data }) => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [sliderStatus, setSliderStatus] = useState([...data]);
    const scrollDirection = enm('left', 'right', 'none');
    const directionRef = useRef(scrollDirection.none);

    const handleScrollLeft = (e) => {
        //by the next start code here for handling the scroll
        setScrollPosition(prev => (prev - 50));
       // directionRef.current = scrollDirection.left;
    }
    const handleScrollRight = (e) => {
        //by the next start code here for handling the scroll;
        setScrollPosition(prev => (prev + 50));
       // directionRef.current = scrollDirection.right;
    }

    const handleTransitionEnd = () => {
       const dir = directionRef.current;
    if (dir == scrollDirection.none) return; 
        setSliderStatus(prev => {
    const arr = [...prev];
    if (directionRef.current === scrollDirection.left) {
      arr.push(arr.shift());
    } else {
      arr.unshift(arr.pop());
    }
    return arr;
  });
setScrollPosition(0);}
    // I should handle that .75rem difference in transform. also, has to make the infinite scroll using the same data array twice and %
  return (
    <div className='overflow-x-hidden w-full relative'>
      <button onClick={handleScrollLeft} className="absolute left-0 top-1/2 bg-[var(--primary-yellow-500)] text-black p-2 rounded-full shadow-lg transform -translate-y-1/2 z-10 hover:bg-yellow-400">
          <FaCaretLeft />
        </button>
      <div onTransitionEnd={handleTransitionEnd} style={{ transform: `translateX(${scrollPosition}%)` }} id="slider_results" className="transition relative flex  pb-4 scrollbar-hide">
            {sliderStatus.map((result, index) => (
                <div className='w-6/12 shrink-0 px-2' key={index}>
                    <Card >
                      <InnerResult result={result} />
                    </Card>
                  </div>
            ))}
      </div>
      <button onClick={handleScrollRight} className="absolute right-0 top-1/2 bg-[var(--primary-yellow-500)] text-black p-2 rounded-full shadow-lg transform -translate-y-1/2 z-10 hover:bg-yellow-400">
          <FaCaretRight />
      </button>
  </div>)

}

export default ResultsSlider