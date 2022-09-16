import React,{useState} from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { NavLink} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {

  

    

    return (
        <>
        <div>
        </div>
        <div className='container-fluid'>
        <nav className='navbar'>
            <div className='navbar-container'>
                <h3 className='nav-logo'>Binamite</h3>
                <ul className='nav-menu '>
                    <div className='items'>
                <li className="nav-links">Pricing</li>
                <li className="nav-links">Who its For<i class="fa fa-angle-down"></i></li>
                <li className="nav-links">Features<i class="fa fa-angle-down"></i></li>
                <li className="nav-links"><i class="fa fa-instagram"></i></li>
                <li className="nav-links"><i class="fab fa-facebook"></i></li>
                
            </div>
             </ul>
            
            <button className='nav-btn'>Sign Up Free</button>   
            <button className='nav-btn'>Login<i class="fa fa-arrow-right"></i></button>   
            
            </div>
          
 
        </nav>
        </div>
        <div>
        
        </div>
        </>
    );
}

export default Navbar;