<template>
  <div>
    <h1>똥차 Calendar</h1>

    <v-layout wrap ma-5>
      <Calendar/>
    </v-layout>
  </div>
</template>

<script>
// import GalleryCardList from '../components/GalleryCardList'
import Calendar from '../components/Calendar'

export default {
	name: 'CalendarPage',
	components: {
    Calendar
	},
	methods: {

	},
}
</script>
