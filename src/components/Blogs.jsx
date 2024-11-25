import React from 'react'

const Blogs = () => {
  return (
    <section id="blog">
            <div className="container">
                <div className="sec-head">
                    <div className="sub-heading">
                        <div className="outer">
                            <div className="inner"></div>
                        </div>
                        <h6>My Blog</h6>
                    </div>
                    <h2 className="sec-title">LATEST BLOG</h2>
                </div>
                <div className="blog-content">
                    <div className="blog-item">
                        <div className="blog-item-img">
                            <img src="image/blog1.png" alt="blog featured image"/>
                        </div>
                        <div className="blog-item-cont">
                            <span>20 January, 2023</span>
                            <h3>Become a UX/UI Designer With Career Foundry.</h3>
                            <a href="#">Read More </a>
                        </div>
                    </div>
                    <div className="blog-item">
                        <div className="blog-item-img">
                            <img src="image/blog2.png" alt="blog featured image"/>
                        </div>
                        <div className="blog-item-cont">
                            <span>15 January, 2023</span>
                            <h3>The Best App Development For Your Business Plan.</h3>
                            <a href="#">Read More </a>
                        </div>
                    </div>
                    <div className="blog-item">
                        <div className="blog-item-img">
                            <img src="image/Image.png" alt="blog featured image"/>
                        </div>
                        <div className="blog-item-cont">
                            <span>06 January, 2023</span>
                            <h3>The Best Portfolio For Agency Design Thinking.</h3>
                            <a href="#">Read More </a>
                        </div>
                    </div>
                </div>
            </div>
         </section>
  )
}

export default Blogs