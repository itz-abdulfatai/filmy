import React from 'react'
import { assets } from '../assets/icons'
import { Link } from 'react-router-dom'

function CategoryCard({item}) {
  return (
    <div className=" bg-secondary flex-1 rounded-md flex flex-col justify-end p-5 relative" >

        <div className=' absolute top-5 left-5 right-5 bottom-10 rounded-md  bg-cover bg-center ' 
        style={
            {
                backgroundImage: `url(${item.img})`
            }
        }>
            <div className=' bg-transparent bg-gradient-to-b  from-transparent from-0% to-secondary absolute top-0 left-0 right-0 bottom-0'>

            </div>

        </div>
    <div className=" flex justify-between items-center z-10">

    <h3 className=" capitalize"> {item.name}</h3>
    <Link to={item.link}><img src={assets.arrowRight} alt="" /></Link>
    </div>
  </div>
  )
}

export default CategoryCard