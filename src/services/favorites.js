import axios from "axios";

const favoritesAPI = axios.create({baseURL: "http://localhost:8000/favoritos"})

async function getFavorites() {    
    try {
        const response = await favoritesAPI.get("/")        
        return response.data
    } catch (e) {
        console.log("something Wrong");
    }
}

export {
    getFavorites,
}