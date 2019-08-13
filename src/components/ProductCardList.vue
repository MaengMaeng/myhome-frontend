<template>
<v-layout wrap>
  <v-flex xs12 md6 lg3>
  <ProductCard class="productcard" :imgSrc="require('../assets/home-img/plus.jpg')" title="모아라얍!" content="모바일 프로그래밍 텀프로젝트로 열심히 만든 종이쿠폰 대체 애플리케이션.
          텀프 이후 사장됨." xs12 md6 lg3/>
  
  </v-flex>
  
</v-layout>
</template>

<script>
import ProductCard from '@/components/ProductCard'

export default {
  name:'ProductCardList',
  components:{
    ProductCard
  }
  
  
}
</script>
<style>
.gallerycard:hover{
  cursor: pointer;
}
</style>
