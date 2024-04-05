
import '../Components/CSS/shopcart.css'
import sample from '../assets/img/one.jpg'
function Additem() {
    return (
        <>
            <div className="itemsincart flex items-center justify-around pt-5">
                <h1>1</h1>
                <div className="itemcartimg">
                    <img src={sample} alt="img" />
                    <h2>Product Name</h2>
                </div>
                <div className="quantity">
                    <button>+</button>
                    <input className="twenty input-quantity" type="text" value="2" />
                    <button>-</button>
                </div>
                <div className="twent">$12,640
                    <span className="remove-item-span">
                        <button className="remove-item-button">Remove</button>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Additem
