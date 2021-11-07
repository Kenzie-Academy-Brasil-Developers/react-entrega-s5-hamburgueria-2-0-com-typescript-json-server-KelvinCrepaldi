import { ListContainer } from "./style";
import Menu from "../../components/Menu";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useAuth } from "../../providers/auth";
import { useHistory } from "react-router";

interface IList {
  name: string;
  description: string;
  price: string;
  image: string;
  id: number;
}

const Home = () => {
  const [list, setList] = useState<IList[]>();
  const history = useHistory();

  const { auth } = useAuth();

  if (!auth) {
    history.push("/login");
  }

  useEffect(() => {
    api
      .get("/productList")
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Menu></Menu>
      <ListContainer>
        {list?.map((product, index) => (
          <Card product={product} key={index}></Card>
        ))}
      </ListContainer>
    </>
  );
};

export default Home;
