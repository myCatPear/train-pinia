<script setup>
import { ref } from 'vue'
import { useSearchStore } from '../stores/SearchStore'
import LoaderVue from './Loader.vue'
const searchStore = useSearchStore()
const searchMovie = ref('')
</script>

<template>
  <form @submit.prevent="searchStore.getMoviesBySearch(searchMovie)">
    <input
      type="text"
      class="search-input"
      placeholder="Input movie"
      v-model="searchMovie"
    />
  </form>
  <LoaderVue v-if="searchStore.isLoadingSearch" />
  <!-- не работает апишка , поэтому вывод такой, так бы можно было впихнуть компоненту Movie -->
  <div v-else>
    {{ searchStore.movies }}
  </div>
</template>

<style scoped>
.search-input {
  border: 1px solid #e7e7e7;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>
