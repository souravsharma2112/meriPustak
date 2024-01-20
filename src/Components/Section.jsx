import Box from "./Box"
import subscribe from '../assets/img/2.jpg'
import logo from "../assets/img/2112.png"

function Section() {
    return (
        <>
            <div className="section1 pt-4">
                <div className="container-sm m-auto section p-4">
                    <div className="product_content">
                        <h1>New <span>Products</span></h1>
                        <p className="text-center pt-4 text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have <br /> suffered lebmid alteration in some ledmid form</p>
                    </div>
                    <div className="book_self flex gap-3 mt-5">
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                    </div>
                </div>
            </div>
            <div className="section2">
                <div className="sbscribe-img">
                    <img src={subscribe} alt="" />
                </div>
                <div className="section2-inner container">
                    <div className="sec2-left">
                    </div>
                    <div className="sec2-right">
                        <div className="sec2-content text-center">
                            <h1>STAY WITH US</h1>
                            <p>Subscribe to our newsletters now and stay up-to-date with new collections, the latest lookbooks and exclusive offers.</p>
                        </div>
                        <div className="sec2-form">
                            <div className="sec2-form-box">
                                <input type="text" />
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section1 pt-4">
                <div className="container-sm m-auto section p-4">
                    <div className="product_content">
                        <h1>All <span>Products</span></h1>
                        <p className="text-center pt-4 text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have <br /> suffered lebmid alteration in some ledmid form</p>
                    </div>
                    <div className="new-product-nav mt-5">
                        <ul className="flex gap-8 justify-center">
                            <li className="nav-li-menu">
                                <a href="#">ALL</a>
                            </li>
                            <li className="nav-li-menu">
                                <a href="#">BIOGRAPHIC</a>
                            </li>
                            <li className="nav-li-menu">
                                <a href="#">ADVENTURE</a>
                            </li>
                            <li className="nav-li-menu">
                                <a href="#">CHILDREN</a>
                            </li>
                            <li className="nav-li-menu">
                                <a href="#">COOK</a>
                            </li>
                        </ul>
                    </div>
                    <div className="book_self flex gap-3 mt-5">
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                    </div>
                </div>
            </div>
            <div className="section1 pt-4">
                <div className="container-sm m-auto section p-4">
                    <div className="product_content">
                        <div className="logo flex justify-center">
                        <img width="280px" src={logo} alt="" />
                        </div>
                        <p className="text-center pt-4 text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have <br /> suffered lebmid alteration in some ledmid form</p>
                    </div>
                    <div className="new-product-nav mt-5 text-center">
                        <h1 className="">All &copy; Reserved 2024.</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section