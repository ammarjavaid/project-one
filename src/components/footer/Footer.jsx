import React from 'react'
import "./footer.scss"
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <>
            <footer>
                <div className='container'>

                    <div className='box'>
                        {/* <ul className='flex'>
                            <li> Terms of Use </li>
                            <li> Privacy-Policy </li>
                            <li> Blog </li>
                            <li> FAQ </li>
                            <li> Watch List </li>
                        </ul> */}
                        <p> © 2022 STREAMIT. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, Streamit Inc. Duplication and copy of this is strictly prohibited. All rights reserved. </p>
                    </div>

                    {/* <div className='box'>
                        <h3> Follow Us </h3>
                        <FaFacebookF className='i'/>
                        <AiOutlineTwitter className='i' />
                        <AiFillGithub className='i' />
                        <FaInstagram className='i' />
                    </div> */}

                    {/* <div className='box'>
                        <h3> Streamit App </h3>
                        <div className='img flexSB'>
                            <img src='https://img.icons8.com/color/48/000000/apple-app-store--v3.png' alt='img' />
                            <span> App Store </span>
                            <img src='https://img.icons8.com/fluency/48/000000/google-play.png' alt='img' />
                            <span> Google Play Store </span>
                        </div>
                    </div> */}

                </div>
            </footer>
        </>
    )
}
