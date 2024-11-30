import React from 'react'
import Carousel from './Carousel'
import Map from './Map'
import NavBarComponent from '../NavBarComponent'
import Desciption from './Desciption'
const Property = () => {
  return (
    <div className='bg-primary'>
    <NavBarComponent/>
      <Carousel/>
      <Desciption/>
      <Map/>
    </div>
  )
}

export default Property