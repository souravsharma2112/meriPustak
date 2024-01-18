import { useState } from "react";
import logoImg from "../assets/img/2112.png"
function Navbar() {
    const [scrollingactive, setScrollingactive] = useState("header")
    const [logoWidth, setLogoWidth] = useState("250px")
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            setScrollingactive("header scrolling_active")
            setLogoWidth("180px")
        }
        else {
            setScrollingactive("header")
            setLogoWidth("260px")
        }

    })
    return (
        <>
            <header className={scrollingactive}>
                <nav className="navbar p-3 container flex items-center justify-between m-auto">
                    <div className="nav-cont flex items-center gap-4">
                        <div className="left-cl-nav">
                            <a href="#" >
                                <img width={logoWidth} src={logoImg} alt="" />
                            </a>
                        </div>
                        <div className="center-cl-nav ">
                            <ul className=" flex gap-12">
                                <li className="nav-li-menu">
                                    <a href="#">HOME</a>
                                </li>
                                <li className="nav-li-menu">
                                    <a href="#">SHOP</a>
                                    <div className="meta_menu">
                                        <ul>
                                            <li><a href="#">Best Product</a></li>
                                            <li><a href="#">99-Shop</a></li>
                                            <li><a href="#">Premium</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-li-menu">
                                    <a href="#">BOOKS</a>
                                    <div className="meta_menu">
                                        <ul className="flex gap-20">
                                            <div className="categories">
                                                <h1>Categories</h1>
                                                <li><a href="#">Biography</a></li>
                                                <li><a href="#">Business</a></li>
                                                <li><a href="#">CookBooks</a></li>
                                                <li><a href="#">Health & Fitness</a></li>
                                            </div>
                                            <div className="categories">
                                                <h1>Customers Favourite</h1>
                                                <li><a href="#">Mystery</a></li>
                                                <li><a href="#">Religion & Inspiration</a></li>
                                                <li><a href="#">Romance</a></li>
                                                <li><a href="#">Fiction/Fantasy</a></li>
                                            </div>
                                            <div className="categories">
                                                <h1>Collections</h1>
                                                <li><a href="#">Science</a></li>
                                                <li><a href="#">Self-Improvement</a></li>
                                                <li><a href="#">History</a></li>
                                                <li><a href="#">Sci-Fi</a></li>
                                            </div>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-li-menu">
                                    <a href="#">KIDS</a>
                                    <div className="meta_menu">
                                        <ul>
                                            <li><a href="#">Best Product</a></li>
                                            <li><a href="#">99-Shop</a></li>
                                            <li><a href="#">Premium</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-li-menu">
                                    <a href="#">PAGES</a>
                                </li>
                                <li className="nav-li-menu">
                                    <a href="#">BLOG</a>
                                </li>
                                <li className="nav-li-menu">
                                    <a href="#">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-cl-nav">
                        <ul className="flex gap-4">
                            <li className="nav-li-icon">
                                <span className="material-symbols-outlined">
                                    search
                                </span>
                            </li>
                            <li className="nav-li-icon">
                                <span className="material-symbols-outlined">
                                    shopping_cart
                                </span>
                            </li>
                            <li className="nav-li-icon">
                                <span className="material-symbols-outlined">
                                    account_circle
                                </span>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar