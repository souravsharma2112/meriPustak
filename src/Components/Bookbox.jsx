/* eslint-disable react/prop-types */

function Bookbox(props) {

    return (
        <>
            <div className="book-conatiner">
                {/* <span className="badge rounded-pill text-bg-primary">Primary</span> */}
                <span className="badge badge2 text-bg-danger">{props.discount}%</span>
                <div className="card">
                    <img src={props.bookContent.bookImg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <ul className="flex align-items-center justify-center gap-6">
                            <li><a href="#">
                                <span className="material-symbols-outlined">
                                    shopping_bag
                                </span>
                            </a></li>
                            <li><a href="#">
                                <span className="material-symbols-outlined">
                                    favorite
                                </span>
                            </a></li>
                            <li><a href="#">
                                <span className="material-symbols-outlined">
                                    shopping_cart
                                </span>
                            </a></li>
                        </ul>
                    </div>
                </div>
                <div className="book-intro pt-3 text-center">
                    <h1>{props.bookContent.bookName}</h1>
                </div>
                <div className="book-price flex gap-3 pt-2 items-center justify-center">
                    <h1>₹ {props.price}</h1>
                    <h1 className='false-price'>₹ {props.falsePrice}</h1>
                </div>
            </div>
        </>
    )
}
export default Bookbox;