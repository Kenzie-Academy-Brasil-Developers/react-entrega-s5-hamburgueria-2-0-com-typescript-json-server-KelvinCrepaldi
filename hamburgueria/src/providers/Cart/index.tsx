import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import api from "../../services/api";

interface CartContextData {
  cartList: any;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
  id: number;
}

/* users/1?_embed=cart     pegar lista do cart*/

const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartList, setCartList] = useState<Product[]>([] as Product[]);

  const addToCart = (product: Product) => {
    setCartList([...cartList, product]);
  };

  const removeFromCart = (product: Product) => {
    const newList = cartList.filter((item) => item.id !== product.id);
    setCartList(newList);
  };

  return (
    <CartContext.Provider value={{ cartList, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
