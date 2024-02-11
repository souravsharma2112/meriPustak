import { Link } from "react-router-dom";
import image1 from "../assets/img/1.jpg";
import image2 from "../assets/img/3.jpg";
import image3 from "../assets/img/4.jpg";

function HeroSection() {
    return (
        <>
            <div className="hero_section">
                <div id="carouselExampleDark" className="carousel image_slide_main carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div className="section1_div carousel-inner">
                        <div className="image1_div carousel-item active" data-bs-interval="10000">
                            <div className="image_1_image">
                                <img src={image1} alt="" />
                            </div>
                            <div className="image_content">
                                <div className="image_content_value">
                                    <h1>Welcome to <br /><span>meriPustak</span></h1>
                                    <Link to="/shop">
                                        Shop Now
                                        <span className="material-symbols-outlined span_icon">
                                            trending_flat
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="image1_div carousel-item" data-bs-interval="2000">
                            <div className="image_1_image">
                                <img src={image2} alt="" />
                            </div>
                            <div className="image_content image_content2">
                                <div className="image_content_value">
                                    <h1>Buy <span>Your</span> <br />
                                        favourite <span>Book</span><br />
                                        From <span>Here</span>
                                    </h1>
                                    <Link to="/shop">
                                        Shop Now
                                        <span className="material-symbols-outlined span_icon">
                                            trending_flat
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="image1_div carousel-item">
                            <div className="image_1_image">
                                <img src={image3} alt="" />
                            </div>
                            <div className="image_content">
                                <div className="image_content_value">
                                    <h1> {"Let's"} Go! See <br /><span>what’s in story?</span></h1>
                                    <Link to="/shop">
                                        Shop Now
                                        <span className="material-symbols-outlined span_icon">
                                            trending_flat
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
          
        </>
    )
}

export default HeroSection
