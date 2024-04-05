
function Wishitem(props) {
    // eslint-disable-next-line react/prop-types
    const {bookImg , bookName , price , falsePrice , condition} = props;
    return (
        <>
            <tr>
                <td width="45%">
                    <div className="display-flex align-center">
                        <div className="img-product">
                            <img src={bookImg} alt="dfdsf" className="mCS_img_loaded" />
                        </div>
                        <div className="name-product">
                            {bookName}
                        </div>
                    </div>
                </td>
                <td width="15%" className="price">Rs {price} / {falsePrice}</td>
                <td width="15%"><span className="in-stock-box">In Stock</span></td>
                <td className="text-center" width="30%"><button className="round-black-btn small-btn">{condition}</button></td>
                <td width="10%" className="text-center"><a href="#" className="trash-icon"><i className="far fa-trash-alt"></i></a></td>
            </tr>
        </>
    )
}

export default Wishitem
