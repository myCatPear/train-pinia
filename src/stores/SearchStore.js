import { defineStore } from 'pinia';
const url =
    "https:/api.themoviedb.org/3/search/movie?api_key=02708c4929ad93aa5e68f8ee7bfa4445&query=";

export const useSearchStore = defineStore('searchStore', {
    state: () => ({
        movies: [],
        isLoadingSearch: false,
    }),
    actions: {
        async getMoviesBySearch(search) {
            this.isLoadingSearch = true;
            try {
                // const res = await fetch(`${url}${search}`);
                const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
                const data = await res.json()
                this.movies.push(data)
            } catch (error) {
                console.log(error)
            } finally {
                this.isLoadingSearch = false;
            }
        },
    }
})