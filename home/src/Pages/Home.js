import React from 'react'
import Games from '../Components/Games'
import Heros from '../Components/Heros'
import Movies from '../Components/Movies'


const Home = () => {
  return (
    <div>
      
      <Movies/>
      <Heros/>
      <Games/>
    </div>
  )
}

export default Home