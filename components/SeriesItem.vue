
<template>
    <a :href="show.url">
        <div class="relative w-series-image">
            <div 
                v-if="show.rating?.average" 
                class="absolute -top-4 -right-4 h-16 w-16 bg-white rounded-full shadow flex items-center justify-center font-bold"
            >{{ show.rating.average }}</div>
            <img :src="show.image.original" />
            <div class="flex flex-col space-y-2 px-3 my-4">
                <div class="font-semibold text-center">{{ show.name }}</div>
                <div class="flex justify-center space-x-2 text-sm italic">
                    <div v-for="genre in show.genres">{{ genre }}</div>
                </div>
                <div class="text-center text-xs">{{ searchScore }}</div>
                <div class="text-xs max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-primary-300 scrollbar-track-primary-100" v-html="show.summary"></div>
            </div>
        </div>
    </a>
</template>
<script setup lang="ts">
import { PropType } from 'vue'
import { useScore } from '~~/composables/useScore';
import { Show } from '~~/model/show.model';

const props = defineProps({
    show: {
        type: Object as PropType<Show>,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
})

const { searchScore } = useScore(props)

</script>