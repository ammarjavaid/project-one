import React from 'react'
import { FiPlay } from 'react-icons/fi';

export default function Ucard({ item: {id, cover, name, time} }) {
  return (
    <>
        <div className='MovieBox'>
            <div className='img'>
                <img src={cover} alt='image' />
            </div>
            <div className='text'>
                <h3> {name} </h3>
                <span> {time} </span>  <br />
                <button className='primary-btn'> <FiPlay /> PLAY NOW </button>
            </div>
        </div>
    </>
  )
}
