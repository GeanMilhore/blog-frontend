export const API_URL = "localhost:8080";

export function LOGIN(body){
    return {
        url: API_URL + "/auth/login",
        options: {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(body)
        }
    }
}