import Bookbox from "./Bookbox";
import loader from "../assets/img/loader.gif"
import { useGlobleContext } from "./AppContex";

function Shopcontent() {
    const { items , isLoading } = useGlobleContext()
    console.log(items);
    if (isLoading) {
        return <>
            <div className="loader flex flex-col justify-center align-items-center p-4">
                <img width={"50px"} src={loader} />
                <h1 className="p-2">L o a d i n g .  .  .  . </h1>
            </div>
        </>
    }
    return (
        <>
            <div className="container-md mt-5 mb-5">
                <div className="shop-content-container ">
                    <div className="shop-grid-left mr-6">
                        <div className="shop-left-content">
                            <div className="categories-desc">
                                <h1>PRODUCT CATEGORIES</h1>
                            </div>
                            <div className="categories-menu mt-4">
                                <ul className="flex flex-col gap-6">
                                    <li className="categories-menu-li">
                                        <a href="#">
                                            <div className="meta-content flex justify-between">
                                                <h1>Action</h1>
                                                <p>(3)</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="categories-menu-li">
                                        <div className="meta-content flex justify-between">
                                            <a href="#">Biography</a>
                                            <p>(3)</p>
                                        </div>
                                    </li>
                                    <li className="categories-menu-li">
                                        <div className="meta-content flex justify-between">
                                            <a href="#">Biography</a>
                                            <p>(3)</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="shop-grid-right ">
                        <div className="shop-grid-right-menu flex justify-between justify-center">
                            <div className="shop-grid-right-menu-1 flex gap-2">
                                <a href="#">
                                    <span className="material-symbols-outlined">
                                        apps
                                    </span>
                                </a>
                                <a href="#">
                                    <span className="material-symbols-outlined">
                                        list
                                    </span>
                                </a>
                            </div>
                            <div className="shop-grid-right-menu-1">
                                <h1>Showing 1–12 of 40 results</h1>
                            </div>
                            <div className="shop-grid-right-menu-1 flex gap-2 justify-center">
                                <h1>Sort By</h1>
                                <select name="gridSortFilter" id="gridShotFilter">
                                    <option value="gridSortFilter">Heleo</option>
                                </select>
                            </div>
                        </div>
                        <div className="searchbar flex justify-end mt-3">
                            <div className="searchbox">
                                <input type="text"/>
                                <button>Search</button>
                            </div>
                        </div>
                        <div className="book-self mt-4">
                            {
                                items.map((index,value) => {
                                    let discount = Math.floor((Math.random() * 50) + 1);
                                    let price = Math.floor((Math.random() * 1550) + 1);
                                    let falsePrice = Math.floor(price + (discount/100)*price);
                                    const bookContent ={
                                        bookName : items[value].volumeInfo.title,
                                        bookImg : items[value].volumeInfo.imageLinks.thumbnail
                                    }

                                    return <>
                                        <Bookbox bookContent = {bookContent} discount = {discount} price = {price} falsePrice = {falsePrice}/>
                                    </>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Shopcontent;