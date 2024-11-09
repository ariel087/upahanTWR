import React from 'react'
import HeroComponent from "./HeroComponent";
import NavBarComponent from "./NavBarComponent";
export const Home = () => {
  return (
    <>
    <body className="w-full h-screen bg-primary">
    <NavBarComponent/>
    <HeroComponent/>
    </body>
    </>
  )
}

export default Home;