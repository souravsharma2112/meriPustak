// import { useGlobleContext } from "./AppContex";
import Shopcontent from "./Shopcontent";
import Shopgrid from "./Shopgrid"

const Books = () => {
  // const { items, isLoading, query, searchPost } = useGlobleContext();

  return (
    <div>
      <Shopgrid title={"Books"} text={"Old is memory and book is ___________"} />
      <Shopcontent dimand={"books"}/>
    </div>
  )
}

export default Books
