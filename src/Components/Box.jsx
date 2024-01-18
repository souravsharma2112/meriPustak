
function Box() {
    return (
        <>
            <div className="card w-72">
                <img src="https://i.pinimg.com/550x/97/9e/8d/979e8d154232e79af7897a7d9281f91b.jpg" className="card-img-top" alt="..." />
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
        </>
    )
}

export default Box