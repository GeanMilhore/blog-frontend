import React from "react";
import { useParams, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { VALIDATE_REGISTRY } from "../../api/authentication-api";
import useFetch from "../../hooks/UseFetch";

export const VerifyAccount = () => {
    const navigate = useNavigate();
    const {token} = useParams();
    const {request} = useFetch();

    const verifyToken = () => {
        if(!token){
            toast.error("No token was send!")
            navigate("/")
        }
    }

    const validateNewAccount = async () => {

        const {url, options} = VALIDATE_REGISTRY({token : token})

        try{
            const { response } = await request(url, options);
            if(response.status != 200) throw new Error('Something went wrong, please try again later.');
            toast.success("New account was confirmed!")
        } catch(error){
            toast.error(error.message)
        } finally{ 
            navigate("/login")           
        }
    }

    React.useEffect(() => {
        verifyToken()
        if(token) validateNewAccount()
    }, [])

    return (<></>)
}

export default VerifyAccount;