import React from 'react'

const Banner = () => {
  return (
    <section id="banner">
            <div className="container">
                <div className="banner-wrapper">
                    <div className="ban-content">
                        <div className="sub-heading">
                            <div className="outer">
                                <div className="inner"></div>
                            </div>
                            <h6>I am designer</h6>
                        </div>
                        <h1>Creative Design and Web Solution</h1>
                        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et.</p>
                        <button className="common-btn">Download My CV</button>
                    </div>
                    <div className="ban-image">
                        <img src="image/banner.png" alt="banner"/>
                    </div>
                </div>
            </div>
         </section>
  )
}

export default Banner