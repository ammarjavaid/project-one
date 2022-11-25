import React, { useState } from 'react'
// import "./home.scss"
import { homeData } from '../../DummyData';
import Home from '../../pages/home/Home';

export default function Homes() {

    const [items, setItems] = useState(homeData);

  return (
    <>
        <section className='home'>
            <Home items={items}/>
        </section>
        <div className='margin'></div>
    </>
  )
}
