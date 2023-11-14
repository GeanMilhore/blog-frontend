import { BACKEND_URL } from "./backend-url";

export function LOGIN(body){
    return {
        url: BACKEND_URL + "/auth/login",
        options: {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        }
    }
}