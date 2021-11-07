import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAuth } from "../../providers/auth";

import { SignupContainer } from "./style";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router";

interface ISignup {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const Singup = () => {
  const history = useHistory();
  const { signUp } = useAuth();

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
  } = useForm<ISignup>({ resolver: yupResolver(schema) });

  const handleSubmitForm = (data: ISignup) => {
    const { name, email, password } = data;
    signUp({ name, email, password });
  };

  const handleLoginPage = () => {
    history.push("/login");
  };

  return (
    <>
      <SignupContainer>
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <TextField
            label="Nome"
            {...register("name")}
            helperText={errors.name?.message}
            color={errors.name ? "warning" : "success"}
          />
          <TextField
            label="E-mail"
            type="email"
            {...register("email")}
            helperText={errors.email?.message}
            color={errors.email ? "warning" : "success"}
          />
          <TextField
            label="Senha"
            type="password"
            {...register("password")}
            helperText={errors.password?.message}
            color={errors.password ? "warning" : "success"}
          />
          <TextField
            label="Confirme senha"
            type="password"
            {...register("passwordConfirm")}
            helperText={errors.passwordConfirm?.message}
            color={errors.passwordConfirm ? "warning" : "success"}
          />
          <Button type="submit" variant="contained">
            Cadastrar
          </Button>
        </form>
        <div>
          <p>Crie sua conta para saborear mutas delícias e matar sua fome!</p>
        </div>
        <Button type="submit" onClick={handleLoginPage}>
          Voltar
        </Button>
      </SignupContainer>
    </>
  );
};

export default Singup;
