import axios from "axios";

const key = '6169d862ccc0d011b31a05667d9a5c10';
axios.defaults.baseURL = 'https://api.themoviedb.org/3'

export async function fetchTrending() {
    const { data } = await axios.get(`/trending/movie/day?api_key=${key}&language=uk&page=1`);
    return data;
}

export async function fetchSearch(query) {
    const { data } = await axios.get(`/search/movie?api_key=${key}&query=${query}&language=uk&page=1`);
    return data;
}

export async function fetchMovieDetails(movieId) {
    const { data } = await axios.get(`/movie/${movieId}?api_key=${key}&language=uk`);
    return data;
}

export async function fetchMovieCredits(movieId) {
    const { data } = await axios.get(`/movie/${movieId}/credits?api_key=${key}&language=uk`);
    return data;
}

export async function fetchMovieReviews(movieId) {
    const { data } = await axios.get(`/movie/${movieId}/reviews?api_key=${key}&language=uk&page=1`);
    return data;
}







// /trending/get - trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// / search / search - movies пошук фільму за ключовим словом на сторінці фільмів.
// / movies / get - movie - details запит повної інформації про фільм для сторінки кінофільму.
// / movies / get - movie - credits запит інформації про акторський склад для сторінки кінофільму.
// / movies / get - movie - reviews запит оглядів для сторінки кінофільму.