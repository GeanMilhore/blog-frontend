import React from "react";

import { UserContext } from "../../UserContext";
import UseForm from '../../hooks/UseForm'
import { useNavigate } from 'react-router';
import Button from "../commons/Button/Button";
import Input from '../commons/Input/Input';

import style from './Login.module.css';

const Login = () => {

    const email = UseForm();
    const senha = UseForm();
    const navigate = useNavigate();
    const { fazerLogin, error, setError } = React.useContext(UserContext);

    function limpaError(){
        setTimeout(() => {
          setError(null)
        }, 3000)
      }

    return (
        <>
            <div className={style.loginContainer}>
                <div className={style.loginInputs}>
                    <Input type="text" label="E-mail: " {...email}/>
                    <Input type="text" label="Password: " {...senha}/>
                </div>
                <div className='login-button'>
                    <Button
                        onClick={() => {
                            email.validate()
                            senha.validate()
                            if (email.validate() && senha.validate()) {
                                fazerLogin(email.value, senha.value);
                            }
                        }} >
                        Log-in
                    </Button>
                {error && <p style={{color: 'red', marginTop: '3px'}}>{error}</p>}
                {error && limpaError()}
                </div>
            </div>  
            <p className='no-account'>
              Não possui conta?
              <span
                style={{
                  cursor: "pointer",
                  color: "blue",
                }}
                onClick={async () => {
                  await navigate("/create-account");
                }}
              >
              {" "}Clique aqui
              </span>
            </p>
        </>
    );
}

export default Login