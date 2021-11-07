import { MenuContainer } from "./style";
import Cart from "../Cart";
import { useAuth } from "../../providers/auth/index";

const Menu = () => {
  const { logOut } = useAuth();

  return (
    <>
      <MenuContainer>
        <div className="title">
          <h1>
            <span className="leftTitle">Burguer </span>{" "}
            <span className="rightTitle">Kenzie</span>
          </h1>
        </div>
        <div className="nav">
          <Cart></Cart>
          <button onClick={logOut}>Logout</button>
        </div>
      </MenuContainer>
    </>
  );
};

export default Menu;
