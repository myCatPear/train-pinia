import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movieStore', {
    state: () => ({
        movies: [
        ],
        activeTab: 1,
    }),
    getters: {
        getWatchedMovies() {
            return this.movies.filter(movie => movie.isWatched)
        },
        getLengthOfAllFilms() {
            return this.movies.length;
        }
    },
    actions: {
        setActiveTabValue(value) {
            this.activeTab = value;
        },
        setIsWatchedMovie(id, value) {
            const idx = this.movies.findIndex(movie => movie.id === id);
            this.movies[idx].isWatched = value;
        },
        deleteMovie(id) {
            this.movies = this.movies.filter(movie => movie.id !== id)
        }
    }
})