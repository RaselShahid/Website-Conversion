import React from 'react'

const Testimonial = () => {
  return (
    <section id="testimonial">
            <div className="container">
                <div className="sec-head">
                    <div className="sub-heading">
                        <div className="outer">
                            <div className="inner"></div>
                        </div>
                        <h6>Testimonial</h6>
                    </div>
                    <h2 className="sec-title">Client Feedback</h2>
                </div>
                <div className="testi-wrapper">
                    <div className="testi-item">
                        <div className="item-top">
                            <div className="client-img">
                                <img src="image/siam.png" alt="siam pp"/>
                            </div>
                            <div className="client-details">
                                <h5>Siam Talukder</h5>
                                <span>CTO, Xyz Group</span>
                            </div>
                        </div>
                        <div className="item-para">
                            <p>“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old.</p>
                        </div>
                    </div>
                    <div className="testi-item">
                        <div className="item-top">
                            <div className="client-img">
                                <img src="image/shawon.png" alt="siam pp"/>
                            </div>
                            <div className="client-details">
                                <h5>ABM Shawon Islam</h5>
                                <span>CEO, Abc Agency</span>
                            </div>
                        </div>
                        <div className="item-para">
                            <p>“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old.</p>
                        </div>
                    </div>
                    <div className="testi-item">
                        <div className="item-top">
                            <div className="client-img">
                                <img src="image/azmir.png" alt="siam pp"/>
                            </div>
                            <div className="client-details">
                                <h5>Azmir Uddin Alif</h5>
                                <span>Director, Techso</span>
                            </div>
                        </div>
                        <div className="item-para">
                            <p>“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old.</p>
                        </div>
                    </div>

                </div>
            </div>
         </section>
  )
}

export default Testimonial