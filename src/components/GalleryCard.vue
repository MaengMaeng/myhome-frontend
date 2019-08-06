<template>
<v-layout @click="imgur" py-4 h-100 mx-4 mt-4>
  <v-flex>
    <v-card>
      <v-img :src="imgSrc" height="400px">
      </v-img>

      <v-card-title>
        <div>
          <div class="headline">
            {{title}}
          </div>
          <div class="grey--text">
            {{writer}}
          </div>
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
export default {
  name: 'GalleryCard',
  data() {
    return {

    }
  },
  props: {
    imgSrc: {
      type: String,
      default: require('../assets/home-img/1.jpg')
    },
    title: {
      type: String,
      default: "title"
    },
    writer: {
      type: String,
      default: "writer"
    }
  },
  methods:{
    imgur(){
      
    }
  }
}
</script>
