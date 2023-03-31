import axios from "axios";




export function usePosts() {
    const api = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com",
    })
    
    return async () => {
        const response = await api.get("/posts");
        return response;
    }
}