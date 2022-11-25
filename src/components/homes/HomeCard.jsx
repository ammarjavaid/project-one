import React from 'react'
import { RiStarSFill } from 'react-icons/ri';
import { FiPlay } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import playButton from "../images/play-button.png"
import play from "../images/play.png"

export default function HomeCard({ item: { id, cover, name, rating, time, desc, starring, genres, tags, video } }) {
    return (
        <>
            <div className='box'>
                <div className='coverImage'>
                    <img src={cover} alt="image" />
                </div>
                <div className='content'>
                    <div className='details row'>
                        <h1> {name} </h1>
                        <div className='rating flex'>
                            <RiStarSFill className='icon'/>
                            <RiStarSFill className='icon'/>
                            <RiStarSFill className='icon'/>
                            <RiStarSFill className='icon'/>
                            <RiStarSFill className='icon'/>
                        </div>
                        <label> {rating} </label>
                        <span> GP </span>
                        <label> {time} </label>

                        <p> {desc} </p>
                        <div className='cast'>
                            <h4> <span> Starring </span> {starring} </h4>
                            <h4> <span> Genres </span> {genres} </h4>
                            <h4> <span> Tags </span> {tags} </h4>
                        </div>
                        {/* <button className='primary-btn'>
                            <FiPlay /> PLAY NOW
                        </button> */}
                    </div>


                    <div className='playButton row'>
                        <Link to={`/singlepage/${id}`}>
                            <button> <div className='img'><img src={playButton} alt='' /> <img src={play} alt='' className='change' /></div> WATCH TRAILER </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
