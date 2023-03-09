import Image from 'next/image'
import React from 'react'

const Tour = () => {
    return (
        <section id="mu-featured-tours">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mu-featured-tours-area">
                            <h2>Our Featured Tours</h2>
                            <p className="mu-title-content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
                                officia aut molestiae quod. Veritatis voluptas, possimus. Quae qui
                                optio minus dolorem fugit dolore, cum at, harum omnis sint? Saepe,
                                asperiores.
                            </p>
                            {/* Start Featured Tours content */}
                            <div className="mu-featured-tours-content">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="mu-featured-tours-single">
                                            <Image src="/assets/images/dubai.jpg" alt="img" width={350} height={260} />
                                            <div className="mu-featured-tours-single-info">
                                                <h3>Abu Dhabi</h3>
                                                <h4> 2 Days, 3 Nights</h4>
                                                <span className="mu-price-tag">$650</span>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    At quidem earum sed. Sint, magnam eligendi!
                                                </p>
                                                <a href="#" className="mu-book-now-btn">
                                                    Book Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mu-featured-tours-single">
                                            <Image src="/assets/images/dubai.jpg" alt="img" width={350} height={260} />
                                            <div className="mu-featured-tours-single-info">
                                                <h3>Thailand</h3>
                                                <h4> 2 Days, 3 Nights</h4>
                                                <span className="mu-price-tag">$845</span>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    At quidem earum sed. Sint, magnam eligendi!
                                                </p>
                                                <a href="#" className="mu-book-now-btn">
                                                    Book Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mu-featured-tours-single">
                                            <Image src="/assets/images/dubai.jpg" alt="img" width={350} height={260} />
                                            <div className="mu-featured-tours-single-info">
                                                <h3>France</h3>
                                                <h4> 2 Days, 3 Nights</h4>
                                                <span className="mu-price-tag">$450</span>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    At quidem earum sed. Sint, magnam eligendi!
                                                </p>
                                                <a href="#" className="mu-book-now-btn">
                                                    Book Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mu-featured-tours-single">
                                            <Image src="/assets/images/dubai.jpg" alt="img" width={350} height={260} />
                                            <div className="mu-featured-tours-single-info">
                                                <h3>Switzerland</h3>
                                                <h4> 2 Days, 3 Nights</h4>
                                                <span className="mu-price-tag">$1030</span>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    At quidem earum sed. Sint, magnam eligendi!
                                                </p>
                                                <a href="#" className="mu-book-now-btn">
                                                    Book Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mu-featured-tours-single">
                                            <Image src="/assets/images/dubai.jpg" alt="img" width={350} height={260} />
                                            <div className="mu-featured-tours-single-info">
                                                <h3>Italy</h3>
                                                <h4> 2 Days, 3 Nights</h4>
                                                <span className="mu-price-tag">$650</span>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    At quidem earum sed. Sint, magnam eligendi!
                                                </p>
                                                <a href="#" className="mu-book-now-btn">
                                                    Book Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mu-featured-tours-single">
                                            <Image src="/assets/images/dubai.jpg" alt="img" width={350} height={260} />
                                            <div className="mu-featured-tours-single-info">
                                                <h3>England</h3>
                                                <h4> 2 Days, 3 Nights</h4>
                                                <span className="mu-price-tag">$950</span>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    At quidem earum sed. Sint, magnam eligendi!
                                                </p>
                                                <a href="#" className="mu-book-now-btn">
                                                    Book Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Featured Tours content */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tour