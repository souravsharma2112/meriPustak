
import Shopcontent from "./Shopcontent";
import Shopgrid from "./Shopgrid";

function Shop() {
    return <>
        <Shopgrid title="Shop" text="Everything is temporary but learning is permanent."/>
        <Shopcontent dimand={"trending"} />
    </>
}
export default Shop;