import React from "react";
import logo from '../../assets/logo-V2.png'
import './Logo.css'

function Logo(){
    return(
        <div className='logo-contenedor'>
        <img
          src={logo}
          alt='logo'
          className='logo'
        />
      </div>
    )
} 

export default Logo;