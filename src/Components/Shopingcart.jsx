import Footer from "./Footer";
import '../Components/CSS/shopcart.css'
import Additem from "./Additem";
const Shopingcart = () => {
    return (
        <>
            <div className="my-body">
                <nav className="nav-bar">
                    <div className="my-logo">
                        meriPustak
                    </div>
                </nav>
                <div className="my-status">
                    <div className="navigation_menu" id="navigation_menu">
                        <ul className="navigation_tabs flex justify-center" id="navigation_tabs">
                            <li className="tab_inactive">
                                <a href="#">Shopping Cart</a>
                            </li>
                            <li className="tab_disabled">
                                <a href="#">Order Details</a>
                            </li>
                            <li className="tab_disabled">
                                <a href="#">Make Payment</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="cart-body">
                    <h2>Shopping Cart</h2>
                    <div className="my-cart-list ">
                        <Additem/>
                    </div>
                </div>
                <Footer />
            </div>
            </>
            )
}
            export default Shopingcart;