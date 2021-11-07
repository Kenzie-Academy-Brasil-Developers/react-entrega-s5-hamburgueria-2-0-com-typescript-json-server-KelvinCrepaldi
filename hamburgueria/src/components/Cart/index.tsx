import { CartContainer, CardContainer } from "./style";
import { useState } from "react";
import { useCart } from "../../providers/Cart";

interface ReduceTotal {
  accumulator: any;
  element: any;
}

const Cart = () => {
  const { cartList, addToCart, removeFromCart } = useCart();

  const [isActive, setIsActive] = useState<boolean>(false);

  const handleIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <button onClick={handleIsActive}>cart</button>
      {isActive && (
        <CartContainer>
          <div className="topTitle">
            <h1>Carrinho de compras</h1>
            <button onClick={handleIsActive}>X</button>
          </div>
          {cartList.map((e: any) => (
            <CardContainer>
              <div>
                <img src={e.image} />
              </div>
              <div>
                <h1>{e.name}</h1>
              </div>
              <div>
                <button onClick={() => removeFromCart(e)}>excluir</button>
              </div>
            </CardContainer>
          ))}
        </CartContainer>
      )}
    </>
  );
};

export default Cart;
