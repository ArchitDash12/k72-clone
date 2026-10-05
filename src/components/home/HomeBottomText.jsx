import React from 'react'
import { Link } from 'react-router-dom';

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2'>
        <Link className='text-[6.5vw] border-3 border-white rounded-full px-10 pt-3 leading-[5.5vw] uppercase'>Projets</Link>
        <Link className='text-[6.5vw] border-3 border-white rounded-full px-10 pt-3 leading-[5.5vw] uppercase'>Agence</Link>
    </div>
  )
}

export default HomeBottomText