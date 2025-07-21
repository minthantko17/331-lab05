<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'
import type { Event } from '@/types'
import EventService from '@/services/EventService'
import {useRouter} from 'vue-router'

const props = defineProps({
    id: {
        type: String,
        required: true
    }
})
const event = ref<Event | null>()
const router = useRouter()

onMounted(()=> {
    EventService.getEvent(parseInt(props.id))
        .then((response) => {
            event.value=response.data
        })
        .catch(()=>{
            router.push({
                name: '404-resource-view',
                params: {resource: 'event'}
            })
        })
})
</script>

<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <nav>
            <router-link :to="{name:'event-detail-view'}">Details</router-link>
            |
            <router-link :to="{name:'event-register-view'}">Register</router-link>
            |
            <router-link :to="{name:'event-edit-view'}">Edit</router-link>
        </nav>
        <RouterView :event="event"/>
    </div>
</template>