import React from 'react'

const About = () => {
  return (
    <section id="about">
            <div className="container">
                <div className="about-wrapper">
                    <div className="about-image">
                        <img src="image/Profile.png" alt="profile image"/>
                    </div>
                    <div className="about-content">
                        <div className="sub-heading">
                            <div className="outer">
                                <div className="inner"></div>
                            </div>
                            <h6>About Me</h6>
                        </div>
                        <h2 className="sec-title">I Can Design Anything You Want</h2>
                        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.</p>
                        <div className="count-wrapper">
                            <div className="count-item">
                                <img src="Icon/right.png" alt=""/>
                                <div>
                                    <span>350+</span>
                                    <h5>Complete Project</h5>
                                </div>
                            </div>
                            <div className="count-item">
                                <img src="Icon/time.png" alt=""/>
                                <div>
                                    <span>16+</span>
                                    <h5>Year of experience</h5>
                                </div>
                            </div>
                        </div>
                        <ul className="about-list">
                            <li><img src="Icon/check.png" alt="check"/>
                            <span>Work simple and cline design</span>
                            </li>
                            <li><img src="Icon/check.png" alt="check"/>
                            <span>New idea and user friendly design</span>
                            </li>
                        </ul>
                        <button className="common-btn">Download My CV</button>
                    </div>
                </div>
            </div>
         </section>
  )
}

export default About