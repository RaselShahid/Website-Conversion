import React from 'react'

const Navbar = () => {
  return (
    <nav id="navbar">
            <div className="container">
                <div className="nav-wrapper">
                    <a href="#">
                        <img src="image/Logo.png" alt="logo"/>
                    </a>
                    
                    <ul className="menu">
                        <li><a href="#">home</a></li>
                        <li><a href="#">about</a></li>
                        <li><a href="#">services</a></li>
                        <li><a href="#">resume</a></li>
                        <li><a href="#">portfolio</a></li>
                        <li><a href="#">testimonial</a></li>
                        <li><a href="#">blog</a></li>
                    </ul>
                    <button className="common-btn">Contact Us</button>
                </div>
            </div>
         </nav>
  )
}

export default Navbar