import React from 'react'
import Image from 'next/image'
import hero from './hero.jpg'

const Banner = () => {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
            <Image src={hero} layout='fill' objectFit='cover' />


            <div className='absolute top-1/2 w-full text-center '>
                <p className=' text-2xl sm:text-lg text-purple-400 text-bold '>
                    Not sure where to go?
                </p>

                <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
                    I'm Flexible :)
                </button>
            </div>
        </div>
    )
}

export default Banner


