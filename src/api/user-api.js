import { BACKEND_URL } from "./backend-url";

export function USER_CREATE(body){
    return {
        url: BACKEND_URL + "/user/create",
        options: {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(body)
        }
    }
}