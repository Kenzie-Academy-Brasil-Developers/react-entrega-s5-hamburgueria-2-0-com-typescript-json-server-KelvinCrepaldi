import { CardContainer } from "./style";
import { Button } from "@material-ui/core";
import { useCart } from "../../providers/Cart";

interface CardProps {
  product: Product;
}
interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
  id: number;
}

const Card = ({ product }: CardProps) => {
  const { cartList, addToCart, removeFromCart } = useCart();
  return (
    <CardContainer>
      <div className="imgContainer">
        <img src={product.image} />
      </div>
      <div className="infoContainer">
        <h1>{product.name}</h1>
        <label>{product.description}</label>
        <label>
          <span>{product.price}</span>
        </label>
        <Button variant="contained" onClick={() => addToCart(product)}>
          Adicionar
        </Button>
      </div>
    </CardContainer>
  );
};

export default Card;
