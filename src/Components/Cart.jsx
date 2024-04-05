import Shopgrid from "./Shopgrid"
import Wishitem from "./Wishitem"
import { useSelector } from 'react-redux'

const Cart = () => {
  const cartItem = useSelector((state) => state.addwish.value)
  return (
    <div>
      <Shopgrid title={"Cart"} text={"One step left just do it now."} />
      <div className="cart-wrap my-mar ghghg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="main-heading mb-10">My Cart</div>
              <div className="table-wishlist">
                <table border="0" width="100%">
                  <thead>
                    <tr>
                      <th width="45%">Product Name</th>
                      <th width="15%">Unit Price</th>
                      <th width="15%">Stock Status</th>
                      <th width="15%"></th>
                      <th width="10%"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartItem.map((value, index) => {
                        const bookName = cartItem[index].bookContent.bookName;
                        const bookImg = cartItem[index].bookContent.bookImg;
                        const price = cartItem[index].bookContent.price;
                        const falsePrice = cartItem[index].bookContent.falsePrice;

                        return (
                          <>
                            <Wishitem bookName={bookName} bookImg={bookImg} price={price} falsePrice={falsePrice} condition="Buy" />
                          </>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
