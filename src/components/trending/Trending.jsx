import React, { useState } from 'react'
import "./trending.scss"
import Homes from "../homes/Homes"
import { trending } from '../../DummyData'
import Home from '../../pages/home/Home';

export default function Trending() {

const [items, setItems] = useState(trending);

  return (
    <>
        <section className='trending'>
            <Home items={items}/>
        </section>
    </>
  )
}
