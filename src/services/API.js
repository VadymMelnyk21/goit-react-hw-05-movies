import axios from "axios";

const key = '6169d862ccc0d011b31a05667d9a5c10';
axios.defaults.baseURL = 'https://api.themoviedb.org/3'

export async function fetchTrending() {
    const { data } = await axios.get(`/trending/movie/day?api_key=${key}&page=1`);
    return data;
}