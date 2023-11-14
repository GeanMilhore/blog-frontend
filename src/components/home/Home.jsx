import React from "react";
import Button from "../commons/Button/Button";
import { UserContext } from "../../UserContext";

export const Home = () => {

    const {fazerLogout} = React.useContext(UserContext);

    return (

        <div>
            <h2>You are online =D</h2>
            <Button 
                onClick={() => {
                    fazerLogout()}}>
                log off
            </Button>
        </div>
    );
}