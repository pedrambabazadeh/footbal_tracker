"use client"
import React, {useState} from 'react'
import {CardGroup, Card} from '@/components/exports/for-home'
import {default as InnerResult} from './InnerResult'
import { FaCaretLeft, FaCaretRight} from 'react-icons/fa';


const ResultsSlider = ({ data }) => {

    const [, setScrollPosition] = useState(0);

    const handleScrollLeft = (e) => {
        //by the next start code here for handling the scroll
    }
  return (
          <div id="slider_results" className=" relative flex overflow-x-hidden gap-6 pb-4 scrollbar-hide snap-x snap-mandatory [&>*]:snap-start">
        <button className="absolute left-0 top-1/2 bg-[var(--primary-yellow-500)] text-black p-2 rounded-full shadow-lg transform -translate-y-1/2 z-10 hover:bg-yellow-400">
          <FaCaretLeft />
        </button>
        {data.map((result, index) => (
          <Card key={index} className="w-[calc(50%-.75rem)]">
            <InnerResult result={result} />
          </Card>
        ))}
        <button className="absolute right-0 top-1/2 bg-[var(--primary-yellow-500)] text-black p-2 rounded-full shadow-lg transform -translate-y-1/2 z-10 hover:bg-yellow-400">
          <FaCaretRight />
        </button>
      </div>
  )
}

export default ResultsSlider