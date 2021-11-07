import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { LoginContainer, TextContainer } from "../Login/style";
import { TextField, Button } from "@material-ui/core";
import { useAuth } from "../../providers/auth";
import { useHistory } from "react-router-dom";

interface UserData {
  email: string;
  password: string;
}

const Login = () => {
  const history = useHistory();
  const { signIn } = useAuth();

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("E-mail é obrigatório")
      .email("Insira um e-mail valido"),
    password: yup.string().required("Senha é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(schema) });

  const handleSubmitForm = (data: UserData) => {
    console.log(data);
    signIn(data);
  };

  const handleSignup = () => {
    history.push("/signup");
  };

  return (
    <LoginContainer>
      <h1>Burguer Kenzie</h1>

      <TextContainer>
        <div className="imgCont"></div>
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os melhores
          ingredientes.
        </p>
      </TextContainer>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <h3>login</h3>
        <TextField label="E-mail" type="email" {...register("email")} />
        <TextField label="Senha" type="password" {...register("password")} />
        <Button type="submit" variant="contained">
          Logar
        </Button>
      </form>
      <div className="footer">
        <p>Crie sua conta para saborear mutas delícias e matar sua fome!</p>

        <Button type="submit" onClick={handleSignup}>
          Cadastrar
        </Button>
      </div>
    </LoginContainer>
  );
};

export default Login;
