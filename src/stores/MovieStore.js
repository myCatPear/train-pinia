import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

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

export const useMovieStore = defineStore('movieStore', () => {
    const movies = ref([])
    const activeTab = ref(1)
    const getWatchedMovies = computed(() => movies.value.filter(movie => movie.isWatched))
    const getLengthOfAllFilms = computed(() => movies.value.length)

    // экшены на стал переписывать там все тоже
    return {
        movies, activeTab, getLengthOfAllFilms, getWatchedMovies
    }
})