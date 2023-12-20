import Product from "./Product";
import { useCartContext } from "../context/cart-context";
import loadingIMG from "../assets/loading.jpg";
import Header from "./Header";

const ProductList = () => {
  const { productsArray } = useCartContext();

  return (
    <div className="basis-10/12 relative">
      <h1 className="text-center font-light">WishList</h1>

      {productsArray.length === 0 && (
        <img src={loadingIMG} className="mx-auto" />
      )}

      <ul className=" flex flex-wrap gap-4 p-8 justify-center md:justify-center  ">
        {productsArray.map((item) => {
          return <Product key={item.id} item={item} />;
        })}
      </ul>
      <Header v2="header-v2 " />
    </div>
  );
};

export default ProductList;
