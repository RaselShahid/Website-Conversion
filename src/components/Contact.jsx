import React from 'react'

const Contact = () => {
  return (
    <section id="contact">
            <div className="container">
                <div className="sec-head">
                    <div className="sub-heading">
                        <div className="outer">
                            <div className="inner"></div>
                        </div>
                        <h6>My Contact</h6>
                    </div>
                    <h2 className="sec-title">I WANT TO HEAR FROM YOU</h2>
                </div>
                <div className="contact-wrapper">
                    <div className="cont-form">
                            <input type="text" width="50%" placeholder="Your Name"/>
                            <input type="email" width="50%" placeholder="Your Email"/>
                            <input type="tel" width="50%" placeholder="Your Phone"/>
                            <input type="tel" width="50%" placeholder="Your Phone"/>
                            <textarea name="" id="" placeholder="Your Message" rows="10" cols="110"></textarea>
                            <button class="common-btn">Send me message</button>
                    </div>
                    <div className="cont-info">
                        <div className="cont-item">
                            <div className="cont-image">
                                <img src="Icon/location.png" alt=""/>
                            </div>
                            <div className="cont-details">
                                <h5>Address</h5>
                                <span>202 Dog Hill Lane Beloit, KS 67420</span>
                            </div>
                        </div>
                        <div className="cont-item">
                            <div className="cont-image">
                                <img src="Icon/phone.png" alt=""/>
                            </div>
                            <div className="cont-details">
                                <h5>Phone</h5>
                                <span>+01589634755</span>
                            </div>
                        </div>
                        <div className="cont-item">
                            <div className="cont-image">
                                <img src="Icon/location.png" alt=""/>
                            </div>
                            <div className="cont-details">
                                <h5>Email</h5>
                                <span>credesign@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>
  )
}

export default Contact