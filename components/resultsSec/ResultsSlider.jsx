"use client"
import React, {useState} from 'react'
import {CardGroup, Card} from '@/components/exports/for-home'
import {default as InnerResult} from './InnerResult'
import { FaCaretLeft, FaCaretRight} from 'react-icons/fa';


const ResultsSlider = ({ data }) => {

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScrollLeft = (e) => {
        //by the next start code here for handling the scroll
        setScrollPosition(scrollPosition - 50.5 );
    }
    const handleScrollRight = (e) => {
        //by the next start code here for handling the scroll
        setScrollPosition(scrollPosition + 50.5 );
    }
    // I should handle that .75rem difference in transform. also, has to make the infinite scroll using the same data array twice and %
  return (
          <div id="slider_results" className=" relative flex overflow-x-hidden  pb-4 scrollbar-hide">
        <button onClick={handleScrollLeft} className="absolute left-0 top-1/2 bg-[var(--primary-yellow-500)] text-black p-2 rounded-full shadow-lg transform -translate-y-1/2 z-10 hover:bg-yellow-400">
          <FaCaretLeft />
        </button>
            {data.map((result, index) => (
                <Card className="w-[calc(50%-.75rem)]" key={index}>
                  <InnerResult result={result} />
                </Card>
            ))}
          {data.map((result, index) => (
                <Card className="w-[calc(50%-.75rem)]" key={index * 10}>
                  <InnerResult result={result} />
                </Card>
            ))}
        <button onClick={handleScrollRight} className="absolute right-0 top-1/2 bg-[var(--primary-yellow-500)] text-black p-2 rounded-full shadow-lg transform -translate-y-1/2 z-10 hover:bg-yellow-400">
          <FaCaretRight />
        </button>
      </div>
  )
}

export default ResultsSlider