<template>
<v-layout wrap>
  <GalleryCard :imgSrc="require('../assets/home-img/plus.jpg')"title="추가하기" writer="추가버튼" xs12 md6 lg3/>
  <v-flex v-for="i in 7" xs12 md6 lg3>
    <GalleryCard/>
    <v-divider></v-divider>
  </v-flex>
</v-layout>
</template>

<script>
import GalleryCard from '@/components/GalleryCard'

export default {
  name:'GalleryCardList',
  components:{
    GalleryCard,
  },
  data() {
    return {

    }
  }
}
</script>
