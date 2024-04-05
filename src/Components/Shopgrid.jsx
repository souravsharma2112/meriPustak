import shopImg from "../assets/img/6.jpg"

// eslint-disable-next-line react/prop-types
function Shopgrid({title , text}){
    return(
        <>
            <div className="shop-container">
                <div className="shop-hero">
                    <div className="hero-img">
                        <img src={shopImg} alt="" />
                    </div>
                    <div className="hero-content text-center">
                        <h1>{title}</h1>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Shopgrid