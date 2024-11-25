import React from 'react'

const Footer = () => {
  return (
    <section id="footer">
            <div className="container">
                <div className="foot-wrapper">
                    <div className="desc">
                        <img src="image/Logo2.png" alt="logo"/>
                        <p>At vero eos et accusamus et iusto odio dign ducimus qui blanditiis praesentium volup deleniti atque corrupti quos dolores et molestias excepturi sint occaecati </p>
                        <h4>credesign@gmail.com</h4>
                    </div>
                    <div className="link">
                        <h3 className="foot-head">Explore Link</h3>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Resume</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="my-ser">
                        <h3 className="foot-head">My Services</h3>
                        <ul>
                            <li><a href="#">UI/UX Design</a></li>
                            <li><a href="#">Mobile App</a></li>
                            <li><a href="#">Graphics Design</a></li>
                            <li><a href="#">Web Developer</a></li>
                        </ul>
                    </div>
                    <div className="follow">
                        <h3 className="foot-head">Follow me</h3>
                        <div className="follow-wrap">
                            <div className="social">
                                <img src="Icon/social.png" alt="social icon"/>
                            </div>
                            <div className="foot-info">
                                <img src="Icon/location.png" alt=""/>
                                <h4>202 Dog Hill Lane Beloit, KS 67420</h4>
                            </div>
                            <div className="foot-info">
                                <img src="Icon/phone2.webp" alt=""/>
                                <h4>1-800-915-6270</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>
  )
}

export default Footer