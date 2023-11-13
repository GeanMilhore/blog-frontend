export const API_URL = "locahost:8080";

export function USER_POST(body){
    return {
        url: API_URL + "/user/create",
        options: {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(body)
        }
    }
}