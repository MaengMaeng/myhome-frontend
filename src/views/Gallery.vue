<template>
  <div>
    <h1>똥차 Gallery</h1>
    <v-layout wrap>
      <v-flex xs12>
        <GalleryCardList></GalleryCardList>

      </v-flex>
    </v-layout>
  </div>
</template>

<script>
// import GalleryCardList from '../components/GalleryCardList'
import GalleryCardList from '../components/GalleryCardList'

export default {
	name: 'Gallery',
	components: {
    GalleryCardList
	},
	methods: {

	},
}
</script>
