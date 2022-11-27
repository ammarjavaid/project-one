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
                            <li onClick={toggle}> <Link to="/"> Home </Link> </li>
                            <li onClick={toggle}> <Link to="/series"> Series </Link> </li>
                            <li onClick={toggle}> <Link to="/movies"> Movies </Link> </li>
                            <li onClick={toggle}> <Link to="/pages"> Pages </Link> </li>
                            <li onClick={toggle}> <Link to="/pricing"> Pricing </Link> </li>
                            <li onClick={toggle}> <Link to="/contact"> Contact </Link> </li>
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
