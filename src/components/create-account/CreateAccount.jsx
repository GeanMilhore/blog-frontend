import React from "react";
import { Modal, Button } from "react-bootstrap";
import Input from '../commons/Input/Input'
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/UseForm";
import useFetch from '../../hooks/UseFetch';
import style from './CreateAccount.module.css'
import { USER_CREATE } from "../../api/user-api";
import {toast} from 'react-toastify'

const CreateAccount = () => {

  const { request, error, loading } = useFetch();
  const navigate = useNavigate();


  const [disabled, setDisabled] = React.useState(true);
  
  const email = useForm("email");
  const senha = useForm();
  const senha2 = useForm();
  const name = useForm();


    React.useEffect(() => {
      setDisabled(senha.value.length < 8);
    }, [senha]);

    function validaSenhas() {
        if (senha.value !== senha2.value) {
        senha2.setError("Senhas não compativeis");
        return false;
        }
        return true;
    }

    async function handleSubmit() {
      if (name.validate() && email.validate() && validaSenhas()) {
        const { url, options } = USER_CREATE({
          email: email.value,
          name: name.value,
          password: senha.value,
        });
  
        const { response } = await request(url, options);
  
        if (response.ok) {
          toast.success("User registered! please check your mailbox")
          navigate("/login");
        } else {
          toast.error('Ops! Algo Deu Errado')
        }
      }
    }
  
  return (
      <form >
              <div className={style.conjuntoInput}>
                <Input id="name" label={"Name:"} {...name} />
                <Input id="email" label="E-mail:" type="e-mail" {...email} />
              </div>
              <div className={style.conjuntoInput}>
                <Input id="senha" label="Senha:" type="password" {...senha} placeholder={'minímo 8 caracteres'} />
                <Input
                  id="senha2"
                  label="Confirmar Senha:"
                  type="password"
                  {...senha2}
                  disabled={disabled}
                  onBlur={validaSenhas}
                />
              </div>
              <Button
                variant="primary"
                onClick={() => navigate("/login")}>
                Voltar
              </Button>
              <Button
                variant="primary"
                onClick={() => handleSubmit()}>
                Cadastrar
              </Button>
            {error && <p>{error}</p>}
      </form>
  );

}

export default CreateAccount;