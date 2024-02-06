import shopImg from "../assets/img/6.jpg"

function Shopgrid(){
    return(
        <>
            <div className="shop-container">
                <div className="shop-hero">
                    <div className="hero-img">
                        <img src={shopImg} alt="" />
                    </div>
                    <div className="hero-content text-center">
                        <h1>Shop</h1>
                        <p>Everything is temporary but learning is permanent.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Shopgrid