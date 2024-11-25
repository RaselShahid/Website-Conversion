import React from 'react'

const Portfolio = () => {
  return (
    <section id="portfolio">
            <div className="container">
                <div className="sec-head">
                    <div className="sub-heading">
                        <div className="outer">
                            <div className="inner"></div>
                        </div>
                        <h6>My Portfolio</h6>
                    </div>
                    <h2 className="sec-title">VISIT MY PORTFOLIO</h2>
                </div>
                <div className="port-wrapper">
                    <div className="port-item">
                        <img src="image/Placeholder.png" alt="portfolio image"/>
                    </div>
                    <div className="port-item">
                        <img src="image/wall-notes.png" alt="portfolio image"/>
                    </div>
                    <div className="port-item">
                        <img src="image/lights.png" alt="portfolio image"/>
                    </div>
                    <div className="port-item">
                        <img src="image/vase.png" alt="portfolio image"/>
                    </div>
                    <div className="port-item">
                        <img src="image/colors.png" alt="portfolio image"/>
                    </div>
                    <div className="port-item">
                        <img src="image/camera.png" alt="portfolio image"/>
                    </div>
                </div>
            </div>
         </section>
  )
}

export default Portfolio