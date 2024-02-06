import logo from "../assets/img/2112.png"
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
const Footer = () => {
    return <>
    <div className="footer flex justify-center">
    <div className="container-md flex flex-column justify-center align-items-center ">
            <div className="footer-logo">
                <img src={logo} alt="" />
            </div>
            <div className="footer-content p-5">
                <p className="text-center">
                There are many variations of passages of Lorem Ipsum available, but the majority have <br /> suffered duskam alteration variations of passages
                </p>
            </div>
            <div className="social-contact ">
                <ul className="flex gap-4 text-3xl">
                    <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                    <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                    <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                    <li><a href="#"><i className="bi bi-github"></i></a></li>
                    <li><a href="#"><i className="bi bi-globe"></i></a></li>
                </ul>
            </div>
            <div className="footer-content flex p-5">
                <ul className="flex gap-12">
                    <li><a href="#">Trending</a></li>
                    <li><a href="#">Best Seller</a></li>
                    <li><a href="#">All Product</a></li>
                    <li><a href="#">Wishlist</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="footer-content">
                <p>CopyRight &copy; meriPustak. All Reserved 2024</p>
            </div>
        </div>
    </div>
        
    </>
}
export default Footer;