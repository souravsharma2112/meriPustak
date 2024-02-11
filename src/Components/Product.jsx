import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGlobleContext } from "./AppContex";
import Bookbox from "./Bookbox";

function Product() {
    const { items } = useGlobleContext()
    let settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };
    return <>
        <div className="product-show container-md">
            <Slider className="product-show-slider" {...settings}>
                {
                    items.map((value, index) => {
                        let discount = Math.floor((Math.random() * 50) + 1);
                        let price = Math.floor((Math.random() * 1550) + 1);
                        let falsePrice = Math.floor(price + (discount / 100) * price);
                        const isVolumeInfoAvailable = 'volumeInfo' in items[index]
                        const isImageLinksAvailable = 'imageLinks' in items[index].volumeInfo
                        if (!isVolumeInfoAvailable) {
                            items[index].volumeInfo = {
                                title: "Unknown",
                                imageLinks: {
                                    thumbnail: "https://books.google.com/books/content?id=BIopDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
                                }
                            }
                        }
                        else {
                            if (!isImageLinksAvailable) {
                                items[index].volumeInfo.imageLinks = {
                                    thumbnail: "https://books.google.com/books/content?id=BIopDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
                                }
                            }
                        }
                        const bookContent = {
                            bookName: items[index].volumeInfo.title,
                            bookId: items[index].id,
                            bookImg: items[index].volumeInfo.imageLinks.thumbnail,
                            price: price,
                            falsePrice: falsePrice,
                            discount: discount
                        }

                        return <>
                            <div className="mydiv">
                                <Bookbox bookContent={bookContent} />
                            </div>
                        </>
                    })
                }
            </Slider>
            <h1></h1>
        </div>
    </>
}
export default Product;