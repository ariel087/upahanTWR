import React from 'react'
import Carousel from './Carousel'
import NavBarComponent from '../NavBarComponent'
import Desciption from './Desciption'
const Property = () => {
  return (
    <div className='bg-primary'>
    <NavBarComponent/>
      <Carousel/>
      <Desciption/>
    </div>
  )
}

export default Property