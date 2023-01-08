import { defineStore } from 'pinia';
import { useMovieStore } from './MovieStore';
import { ref } from 'vue'
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
        addToUserMovies(obj) {
            const movieStore = useMovieStore;
            // movieStore.movies.push()
            // не работает апи но тут все понятно
        }
    }
})


// COMPOSITION API
// export const useSearchStore = defineStore('searchStore', () => {
//     const isLoadingSearch = ref(false)
//     const movies = ref([])

//     const getMoviesBySearch = async (search) => {
//         isLoadingSearch.value = true;
//         try {
//             // const res = await fetch(`${url}${search}`);
//             const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//             const data = await res.json()
//             movies.value.push(data)
//         } catch (error) {
//             console.log(error)
//         } finally {
//             isLoadingSearch.value = false;
//         }
//     }
//     const addToUserMovies = (obj) => {
//         const movieStore = useMovieStore;
//         // movieStore.movies.push()
//         // не работает апи но тут все понятно
//     }
//     return {
//         isLoadingSearch, movies, getMoviesBySearch, addToUserMovies
//     }
// })