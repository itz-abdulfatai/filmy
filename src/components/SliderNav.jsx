import React from 'react'
import { ArrowL, ArrowR } from './Slider'
import "../styles/slidernav.css"

function SliderNav({id}) {
  return (
    
    <div className="slider-nav">
    <ArrowL id={id} />
    <div className=" relative flex items-center justify-center  h-full">
      <div className={`custom-pagination-${id} custom-pagination`}></div>
    </div>
    <ArrowR id={id}/>
  </div>
  )
}

export default SliderNav