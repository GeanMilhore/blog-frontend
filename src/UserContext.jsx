import React from "react";
import { LOGIN } from "./api/authentication-api";
import { useNavigate } from "react-router";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [dadosUsuario, setDadosUsuario] = React.useState(null);
  const [logado, setLogado] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const fazerLogout = React.useCallback(
    async function () {
      window.localStorage.removeItem("token");
      await setDadosUsuario(null);
      console.log(dadosUsuario)
      setError(null);
      setLogado(false);
      setLoading(false);
      navigate("/login");
    },
    [navigate]
  );

  async function fazerLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = LOGIN({
        email: username,
        senha: password,
      });

      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error("Usuário Ínvalido");
      const json = await tokenRes.json();
      const token = await json.token;
      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate('/conta/home')
    } catch (err) {
      setError(err.message);
      setLogado(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{
        fazerLogin,
        fazerLogout,
        dadosUsuario, 
        setDadosUsuario,
        logado, 
        setLogado,
        loading, 
        setLoading,
        error, 
        setError
      }}
    >
      {children}
    </UserContext.Provider>
  );
};