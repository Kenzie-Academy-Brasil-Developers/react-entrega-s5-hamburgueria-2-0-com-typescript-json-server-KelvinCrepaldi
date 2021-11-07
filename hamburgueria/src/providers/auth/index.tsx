import { createContext, useContext, useState, ReactNode } from "react";
import { useHistory } from "react-router";
import api from "../../services/api";

interface AuthContextData {
  token: any;
  userId: any;
  signIn: (userData: UserData) => void;
  signUp: (obj: ISignup) => void;
  logOut: () => void;
  auth: boolean;
}

interface UserData {
  email: string;
  password: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface ISignup {
  name: string;
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState(() => localStorage.getItem("token" || ""));
  const [userId, setuserId] = useState(() =>
    localStorage.getItem("userId" || "")
  );
  const [auth, setAuth] = useState(false);

  const history = useHistory();

  const signIn = (userData: UserData) => {
    api
      .post("/login", userData)
      .then((response) => {
        setToken(response.data.acessToken);
        localStorage.setItem("token", response.data.acessToken);
        localStorage.setItem("userId", response.data.user.id);

        setAuth(true);
        history.push("/");
      })
      .catch((error) => console.log(error));
  };

  const signUp = (user: ISignup) => {
    const obj = { name: user.name, email: user.email, password: user.password };
    api
      .post("/signup", obj)
      .then((response) => {
        history.push("/login");
      })
      .catch((error) => console.log(error));
  };

  const logOut = () => {
    localStorage.clear();
    history.push("/login");
    setAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{ token, userId, signIn, signUp, logOut, auth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
