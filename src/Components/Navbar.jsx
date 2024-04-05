import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../assets/img/2112.png";
import { useSelector } from 'react-redux'
function Navbar() {
    const cartItem = useSelector((state) => state.addcart.value)
    const wishItem = useSelector((state) => state.addwish.value)
    const [scrollingactive, setScrollingactive] = useState("");
    const [logoWidth, setLogoWidth] = useState("250px");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            setScrollingactive("scrolling_active");
            setLogoWidth("160px");
        } else {
            setScrollingactive("");
            setLogoWidth("260px");
        }
    });
    let toggleBtn1 = () => {
        let infg = document.getElementById("mobileMenu");
        infg.classList.remove("remove")
    }
    let toggleBtn2 = () => {
        let infg = document.getElementById("mobileMenu");
        infg.classList.add("remove")
    }
    return (
        <>
            <header className={`header ${scrollingactive}`}>
                <nav className="navbar p-3 container-sm flex items-center justify-between m-auto">
                    <div className="nav-cont flex items-center gap-4">
                        <div className="left-cl-nav">
                            <Link to="/">
                                <img width={logoWidth} src={logoImg} alt="" />
                            </Link>
                        </div>
                        <div className="center-cl-nav ">
                            <ul className=" flex gap-12">
                                <li className="nav-li-menu">
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) => `
                                            ${isActive ? "active" : ""}
                                        `}
                                    >
                                        HOME
                                    </NavLink>
                                </li>
                                <li className="nav-li-menu">
                                    <NavLink
                                        to="/shop"
                                        className={({ isActive }) => `
                                    ${isActive ? "active" : ""}
                                    `}
                                    >
                                        SHOP
                                    </NavLink>
                                    <div className="meta_menu">
                                        <ul>
                                            <li>
                                                <Link to="/shop">Best Product</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">99-Shop</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Premium</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-li-menu">
                                    <NavLink to="/books">BOOKS</NavLink>
                                    <div className="meta_menu">
                                        <ul className="flex gap-20">
                                            <div className="categories">
                                                <h1>Categories</h1>
                                                <li>
                                                    <Link to="#">Biography</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Business</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">CookBooks</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Health & Fitness</Link>
                                                </li>
                                            </div>
                                            <div className="categories">
                                                <h1>Customers Favourite</h1>
                                                <li>
                                                    <Link to="#">Mystery</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Religion & Inspiration</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Romance</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Fiction/Fantasy</Link>
                                                </li>
                                            </div>
                                            <div className="categories">
                                                <h1>Collections</h1>
                                                <li>
                                                    <Link to="#">Science</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Self-Improvement</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">History</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Sci-Fi</Link>
                                                </li>
                                            </div>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-li-menu">
                                    <NavLink
                                        to="/kids"
                                        className={({ isActive }) => `
                                            ${isActive ? "active" : ""}
                                        `}
                                    >KIDS</NavLink>
                                    <div className="meta_menu">
                                        <ul>
                                            <li>
                                                <Link to="#">Best Product</Link>
                                            </li>
                                            <li>
                                                <Link to="#">99-Shop</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Premium</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-li-menu">
                                    <NavLink to="/comics">COMICS</NavLink>
                                </li>
                                <li className="nav-li-menu">
                                    <NavLink to="/tech">TECH</NavLink>
                                </li>
                                <li className="nav-li-menu">
                                    <NavLink to="/cook">CHEF</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-cl-nav">
                        <ul className="flex gap-4">
                            {/* <li className="nav-li-icon">
                                <span className="material-symbols-outlined">search</span>
                            </li> */}

                            <NavLink to="/wishlist">
                                <button type="button" className="btn btn-primary position-relative p-1 flex justify-center items-center bg-blue-400">
                                    <span className="material-symbols-outlined">
                                        favorite
                                    </span>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {(cartItem.length == 0) ? "" : cartItem.length}
                                        <span className="visually-hidden ">unread messages</span>
                                    </span>
                                </button>
                            </NavLink>
                            <NavLink to="/cart"><li className="nav-li-icon">
                                <button type="button" className="btn btn-primary position-relative p-1 flex justify-center items-center bg-blue-400">
                                    <span className="material-symbols-outlined">
                                        shopping_cart
                                    </span>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {(wishItem.length == 0) ? "" : wishItem.length}
                                        <span className="visually-hidden ">unread messages</span>
                                    </span>
                                </button>
                            </li>
                            </NavLink>
                        </ul>
                    </div>
                    <div className="mobile-cl-nav">
                        <button onClick={toggleBtn1} >
                            <span className="material-symbols-outlined text-2xl hamburger">
                                menu
                            </span>
                        </button>
                        <ul id="mobileMenu" className="remove">
                            <button className="closeBtn" onClick={toggleBtn2} >
                                <span className="material-symbols-outlined text-2xl text-emerald-50">
                                    close
                                </span></button>
                            <li className="nav-li-menu">
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li className="nav-li-menu">
                                <NavLink to="/shop">Shop</NavLink>
                            </li>
                            <li className="nav-li-menu">
                                <NavLink to="/books">Books</NavLink>
                            </li>
                            <li className="nav-li-menu">
                                <NavLink to="/kids">Kids</NavLink>
                            </li>
                            <li className="nav-li-menu">
                                <NavLink to="/comics">Comics</NavLink>
                            </li>
                            <li className="nav-li-menu">
                                <NavLink to="/tech">Tech</NavLink>
                            </li>
                            <li className="nav-li-menu pb-5">
                                <NavLink to="/cook">Cook</NavLink>
                            </li>
                            <div className="flex gap-5 pb-9">
                            <NavLink to="/wishlist">
                                <button type="button" className="btn btn-primary position-relative p-1 flex justify-center items-center bg-blue-400">
                                    <span className="material-symbols-outlined">
                                        favorite
                                    </span>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {(cartItem.length == 0) ? "" : cartItem.length}
                                        <span className="visually-hidden ">unread messages</span>
                                    </span>
                                </button>
                            </NavLink>
                            <NavLink to="/cart"><li className="nav-li-icon">
                                <button type="button" className="btn btn-primary position-relative p-1 flex justify-center items-center bg-blue-400">
                                    <span className="material-symbols-outlined">
                                        shopping_cart
                                    </span>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {(wishItem.length == 0) ? "" : wishItem.length}
                                        <span className="visually-hidden ">unread messages</span>
                                    </span>
                                </button>
                            </li>
                            </NavLink>
                            </div>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Navbar;
