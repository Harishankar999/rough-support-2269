import React from 'react'
import FeaturesTop from '../Component/Features/FeaturesTop'
import MidFeature from '../Component/Features/MidFeature'
import Navbar from '../Component/Navbar'
import data from "../Component/Features/midData.json"
import MidPromo from '../Component/Features/MidPromo'

const Features = () => {
  const mid = data.mid
  return (
    <div>
        <Navbar />
        <FeaturesTop />
        {mid.map((i) =>{
          return <MidFeature key={i.id} items={{...i}} />
          
        })}
        <MidPromo />
        {mid.map((i) =>{
          return <MidFeature key={i.id} items={{...i}} />
          
        })}
        
    </div>
  )
}

export default Features