import axios from "axios";

const api = axios.create({
    baseURL:'https://www.omdbapi.com/'
})

export const getMovie = () =>{
    return api.get('?i=tt389619&apikey=150486b3&f&s=godfather')
}