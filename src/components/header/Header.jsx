import React, { useState } from 'react'
import "./header.scss";
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BiSearchAlt } from 'react-icons/bi'
import { AiFillBell } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import logo from "../images/logo.png"

export default function Header() {

    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open)
    }

    return (
        <>
            <header>
                <div className='container flexSB'>
                    <nav className='flexSB'>
                        <div className='logo'>
                            <Link to="/"><img src={logo} alt='' /></Link>
                        </div>
                        <ul className={open ? "list" : 'flexul'}>
                            <Link to="/" onClick={toggle}> Home </Link>
                            <Link to="/series" onClick={toggle}> Series </Link>
                            <Link to="/movies" onClick={toggle}> Movies </Link>
                            <Link to="/pages" onClick={toggle}> Pages </Link>
                            <Link to="/pricing" onClick={toggle}> Pricing </Link>
                            <Link to="/contact" onClick={toggle}> Contact </Link>
                            {/* <button className='link__btn'> Subscribe Now </button> */}
                        </ul>

                    </nav>
                    <div className='account'>
                        <div>                   
                         <BiSearchAlt className='icons' />
                         <AiFillBell className='icons' />
                         <AiOutlineUser className='icons' />
                        </div>
                        {open ? <FaTimes onClick={toggle} className='icons bars' /> : <FaBars onClick={toggle} className='icons bars' />}
                        <button className='right__btn'> Subscribe Now </button>
                    </div>
                </div>
            </header>
        </>
    )
}
