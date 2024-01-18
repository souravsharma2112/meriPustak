import Box from "./Box"

function Section() {
    return (
        <>
            <div className="section_col mt-20">
            <div className="container m-auto section p-4">
                <div className="product_content">
                    <h1>New <span>Products</span></h1>
                    <p className="text-center pt-4 text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have <br /> suffered lebmid alteration in some ledmid form</p>
                </div>
                <div className="book_self flex gap-3 mt-5">
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                </div>
            </div>
            </div>
        </>
    )
}

export default Section