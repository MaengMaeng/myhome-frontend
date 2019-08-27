<template>
  <v-carousel
    id="image-slide"
    delimiter-icon="stop"
    prev-icon="mdi-arrow-left"
    next-icon="mdi-arrow-right"
    height="800px"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require('@/assets/home-img/1.jpg')
          },
          {
            src: require('@/assets/home-img/2.jpg')
          },
          {
            src: require('@/assets/home-img/3.jpg')
          },
          {
            src: require('@/assets/home-img/4.jpg')
          }
        ]
      }
    }
  }
</script>

<style media="screen">
  #image-slide{
    box-shadow:none;
    margin: 0 auto;
  }
</style>
