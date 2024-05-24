import axios from "axios";

const booksAPI = axios.create({baseURL: "http://localhost:8000/livros"})

async function getBooks() {    
    try {
        const response = await booksAPI.get("/")        
        return response.data
    } catch (e) {
        console.log("something Wrong");
    }
}

export {
    getBooks,
}