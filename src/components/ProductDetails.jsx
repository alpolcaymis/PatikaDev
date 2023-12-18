import { useCartContext } from "../context/cart-context";

export const ProductDetails = () => {
  const { onCloseModal } = useCartContext();
  return (
    <div>
      <button onClick={onCloseModal}>ProductDetails</button>
    </div>
  );
};
