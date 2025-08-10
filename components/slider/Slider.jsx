import React from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

async function getSliderPhotos()
{
    const res = await fetch(`${baseUrl}/api/slider`)
    if (!res.ok)
    {
        throw new Error("something went wrong!");
    }
    const photos = await res.json();
    return photos;
}

const Slider = async ({data})=>
{
    const photos = await getSliderPhotos();
    return(
        <section className='relative overflow-hidden w-full mb-6 h-[400px]'>
            <div id="slider" className="silder flex transition-transform h-[100%] duration-700">
               { photos.map((photo, index) => {
                return <div key={index} className='min-w-full h-full bg-cover bg-center' style={{backgroundImage : `url(${photo.url})`}}></div>
               })}
            </div>
            <button id="prev" className='absolute text-white top-1/2 left-4 transform -translate-y-1/2 bg-black/30 p-2 rounded-full'>
               <FaCaretLeft/>
            </button>
            <button id="next" className='absolute text-white top-1/2 right-4 transform -translate-y-1/2 bg-black/30 p-2 rounded-full'>
            <FaCaretRight/>
            </button>
        </section>
    )
}
export default Slider