import React, { useState } from 'react'
import Upcoming from '../upcoming/Upcoming'
import "./homePages.scss"
import Homes from './Homes'
import { latest, recommended, upcome } from '../../DummyData'
import Trending from '../trending/Trending'

export default function HomePages() {

  const [items, setItems] = useState(upcome);
  const [item, setItem] = useState(latest);
  const [rec, setRec] = useState(recommended)

  return (
    <>
        <Homes />
        <div className="wrapper">
        <Upcoming items={items} title="Upcoming Movies"/>
        <Upcoming items={item} title="Latest Movies"/>
        </div>
        <Trending />
        <Upcoming items={rec} title="Recommended Movies"/>
    </>
  )
}