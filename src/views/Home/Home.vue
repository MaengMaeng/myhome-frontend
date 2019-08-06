<template>
  <div>
    <v-container>
      <v-layout>
        <ImageSlider/>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ImageSlider from '@/components/common/ImageSlider'

export default {
	name: 'Home',
	components: {
    ImageSlider
	},
	methods: {

	},
}
</script>
