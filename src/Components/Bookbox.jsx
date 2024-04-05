/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addtocart } from "../carts/CartSlice";
import { addtowish } from "../carts/WishSlice";


function Bookbox(props) {
    const cartItem = useSelector((state) => state.addcart.value)
    const wishItem = useSelector((state) => state.addwish.value)
    const dispatch = useDispatch()
    const addObjectToArray = (data) => {
        dispatch(addtocart(data));
    }
    const addWishToArray = (data) => {
        dispatch(addtowish(data))
    }
    function wishBtn() {
        addObjectToArray(props)
        alert("Item Added Successfully!")
    }
    function cartBtn() {
        addWishToArray(props)
        alert("Item Added Successfully!")
    }
    return (
        <div key={props.bookContent.bookId} className="book-conatiner" >
            {/* <span className="badge rounded-pill text-bg-primary">Primary</span> */}
            <span className="badge badge2 text-bg-danger">{props.bookContent.discount}%</span>
            <div className="card">
                <img src={props.bookContent.bookImg} className="card-img-top" alt="..." />
                <div className="card-body">
                    <ul className="flex align-items-center justify-center gap-6">
                        {/* <li>
                            <button className="material-symbols-outlined">
                                shopping_bag
                            </button>
                       </li> */}
                        <li>
                            <button onClick={wishBtn} className="material-symbols-outlined">
                                favorite
                            </button>
                        </li>
                        <li>
                            <button onClick={cartBtn} className="material-symbols-outlined">
                                shopping_cart
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="book-intro pt-3 text-center">
                <h1>{props.bookContent.bookName}</h1>
            </div>
            <div className="book-price flex gap-3 pt-2 items-center justify-center">
                <h1>₹ {props.bookContent.price}</h1>
                <h1 className='false-price'>₹ {props.bookContent.falsePrice}</h1>
            </div>
        </div>
    )
}
export default Bookbox;