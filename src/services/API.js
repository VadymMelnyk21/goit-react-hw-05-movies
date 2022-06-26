import axios from "axios";

const key = '6169d862ccc0d011b31a05667d9a5c10';
axios.defaults.baseURL = 'https://api.themoviedb.org/3'

export async function fetchTrending() {
    const { data } = await axios.get(`/trending/movie/day?api_key=${key}&language=uk&page=1`);

    const moviesInfo = data.results.map(({ id, original_title, poster_path }) => ({ id, original_title, poster_path }))

    return moviesInfo;
}

export async function fetchSearch(query) {
    const { data } = await axios.get(`/search/movie?api_key=${key}&query=${query}&language=uk&page=1`);

    const moviesInfo = data.results.map(({ id, original_title, poster_path }) => ({ id, original_title, poster_path }))

    return moviesInfo;
}

export async function fetchMovieDetails(movieId) {
    const { data } = await axios.get(`/movie/${movieId}?api_key=${key}&language=uk`);

    const dataMovies = {
        originalTitle: data.original_title,
        title: data.title,
        genres: data.genres,
        overview: data.overview,
        poster: data.poster_path,
        releaseDate: data.release_date.slice(0, 4),
        voteAverage: data.vote_average,
    };
    return dataMovies;
}

export async function fetchMovieCredits(movieId) {
    const { data } = await axios.get(`/movie/${movieId}/credits?api_key=${key}&language=uk`);

    const castInfo = data.cast.map(({ id, name, profile_path }) => ({ id, name, profilePath: profile_path }))

    return castInfo;
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