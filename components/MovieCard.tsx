import getImagePath from '@/lib/utils/getImagePath'
import { Movie } from '@/typings'
import Image from 'next/image'
import React from 'react'

function MovieCard({movie}:{movie: Movie}) {
  return (
    <div className='relative flex-shrink-0 cursor-pointer transform
    hover:scale-105 transition duration-200 ease-out
    '>
        <div
        className='absolute inset-0 bg-gradient-to-b from-gray-200/0
        via-gray-900/10 to-gray-300 dark:to-[#1A1C29]/10 z-10'
        />
        <p
        className='absolute bottom-5 left-5 z-50 text-white'
        >{movie.title}</p>
        <Image
            src={getImagePath(movie.backdrop_path || movie.poster_path || '')}
            alt={movie.title}
            width={1920}
            height={1080}
            key={movie.id}
            className='w-fit lg:min-x-[400px] h-56 object-cover 
            object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm'
            />

    </div>
  )
}

export default MovieCard