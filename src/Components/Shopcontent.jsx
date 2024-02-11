import Bookbox from "./Bookbox";
import loader from "../assets/img/loader.gif"
import { useGlobleContext } from "./AppContex";

function Shopcontent() {
    const { items, isLoading, query, searchPost } = useGlobleContext()
    const itemNew = [];
    itemNew.push(items)
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
            <div className="shopcontent container-md mt-5 mb-5">
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
                                {/* <a href="#">
                                    <span className="material-symbols-outlined">
                                        apps
                                    </span>
                                </a> */}
                                <a href="#">
                                    <span className="material-symbols-outlined">
                                        list
                                    </span>
                                </a>
                            </div>
                            <div className="shop-grid-right-menu-1">
                                <h1>Showing 40 results</h1>
                            </div>
                            {/* <div className="shop-grid-right-menu-1 flex gap-2 justify-center">
                                <h1>Sort By</h1>
                                <select name="gridSortFilter" id="gridShotFilter">
                                    <option value="gridSortFilter">Heleo</option>
                                </select>
                            </div> */}
                        </div>
                        <div className="searchbar flex justify-end mt-3">
                            <div className="searchbox">
                                <input
                                    onChange={(e) => {
                                        if (e.target.value == "") {
                                            return searchPost("trending")
                                        }
                                        else {
                                            return searchPost(e.target.value)
                                        }
                                    }}                                  
                                    placeholder={query}
                                    type="text" />
                                <button>Search</button>
                            </div>
                        </div>
                        <div className="book-self mt-4">
                            {
                                itemNew[0].map((index, value) => {
                                    let discount = Math.floor((Math.random() * 50) + 1);
                                    let price = Math.floor((Math.random() * 1550) + 1);
                                    let falsePrice = Math.floor(price + (discount / 100) * price);
                                    const isVolumeInfoAvailable = 'volumeInfo' in itemNew[0][value]
                                    const isImageLinksAvailable = 'imageLinks' in itemNew[0][value].volumeInfo
                                    if (!isVolumeInfoAvailable) {
                                        itemNew[0][value].volumeInfo = {
                                            title: "Unknown",
                                            imageLinks: {
                                                thumbnail: "https://books.google.com/books/content?id=BIopDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
                                            }
                                        }
                                    }
                                    else {
                                        if (!isImageLinksAvailable) {
                                            itemNew[0][value].volumeInfo.imageLinks = {
                                                thumbnail: "https://books.google.com/books/content?id=BIopDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
                                            }
                                        }
                                    }
                                    const bookContent = {
                                        bookName: itemNew[0][value].volumeInfo.title,
                                        bookId: itemNew[0][value].id,
                                        bookImg: itemNew[0][value].volumeInfo.imageLinks.thumbnail,
                                        price: price,
                                        falsePrice: falsePrice,
                                        discount: discount
                                    }

                                    return <>
                                        <Bookbox bookContent={bookContent} />
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