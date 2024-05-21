
"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import brand from "./logo-sm.png"
import imageCover from "./wraper.png"

export default function NavBar() {


    let path = usePathname()

  return (
    <>
      
<Image src={imageCover} className='w-100' alt='imageCover'/>

   <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top ">
  <div className="container">
  <Link className="navbar-brand Nerko_One" href="/mmorpg"> <Image  width={50}  src = {brand} alt='games' />   GAME REVIEWS</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
     
        <li className="nav-item">
        <Link className= { `nav-link ${path == "/mmorpg" ? "active" : ""  } ` }  aria-current="page" href="/mmorpg">MMORPG</Link>

        </li>
        <li className="nav-item">
          <Link className= { `nav-link ${path == "/shooter" ? "active" : ""} ` }   aria-current="page" href="/shooter">SHOOTER</Link>
        </li>
        <li className="nav-item">
          <Link className={ `nav-link ${path == "/sailing" ? "active" : ""} ` }  aria-current="page" href="/sailing">SAILING</Link>
        </li>
        <li className="nav-item">
          <Link className={ `nav-link ${path == "/permadeath" ? "active" : ""} ` }  aria-current="page" href="/permadeath">PERMADEATH</Link>
        </li>
        <li className="nav-item">
          <Link className={ `nav-link ${path == "/superhero" ? "active" : ""} ` }  aria-current="page" href="/superhero">SUPERHERO</Link>
        </li>
     </ul>
   
    </div>
  </div>
</nav>


    </>
  )
}
