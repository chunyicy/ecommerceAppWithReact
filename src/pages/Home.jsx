import React from 'react'
import Discounted from '../components/Discounted'
import Explore from '../components/Explore'
import Featured from '../components/Featured'
import Landing from '../components/Landing'

export default function Home() {
  return (
    <>
        <Landing/>
        <Featured/>
        <Discounted/>
        <Explore/>
    </>
  )
}
