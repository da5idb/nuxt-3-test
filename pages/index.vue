<script setup lang="ts">
import { useApi } from '../composables/useApi';
import { Series } from '../model/show.model';

const { query, result, callApi, loading, error } = useApi<Series[]>(async query => {
    const res = await fetch(`/api/search?query=${query}`)
    const json = await res.json()
    return json.filter((s: any) => s.show?.image)
})

</script>
<template>
<div>
    <NuxtLink to="/demo">Routing Demo</NuxtLink>
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col items-center">
        <div class="px-10 py-10 bg-white shadow rounded-3xl w-1/2">
            <form @submit.prevent="callApi" class="flex space-x-4">
                <input type="text" class="w-full" v-model="query" />
                <button class="flex-none px-4 py-1 bg-primary-500 text-white font-semibold">Search for TV Shows</button>
            </form>
        </div>
        <div v-if="loading" class="font-bold mt-4">Loading...</div>
        <div v-if="error" class="text-red-500 font-bold  mt-4">Sorry there seems to be an error. Please try again later!</div>
        <div class="flex flex-wrap justify-center m-10">
            <div v-for="series in result" class="shadow m-5">
                <SeriesItem :show="series.show" :score="series.score"></SeriesItem>
            </div>
        </div>
    </div>
</div>
</template>