import React, { useContext } from 'react'
import Main from '../Components/Home/Main'
import Events from '../Components/Home/Events'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <div>
        <Main/>
        <Events/>
        <Footer/> 
    </div>
  )
}
