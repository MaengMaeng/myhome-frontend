<template>
<v-layout wrap>
  <v-flex class="productcard" xs12 md6 lg3>
  <ProductCard class="productcard" :imgSrc="'https://img.pngio.com/toy-plane-png-vectors-psd-and-clipart-for-free-download-pngtree-tou-plane-png-260_261.png'" title="슈팅게임~!" content="재미를 위한 슈팅게임" url="/shooting" xs12 md6 lg3/>
  </v-flex>
  <v-flex x12 md6 lg3>
    <ProductCard class="productcard" :imgSrc="require('../assets/home-img/mydays.jpg')" title="MyDays-renewal-version" content="데일리 다이어리 리뉴얼~!"
    url="https://play.google.com/store/apps/details?id=com.msproject.myhome.mydays" xs12 md6 lg3/>
  </v-flex>
  
</v-layout>
</template>

<script>
import ProductCard from '@/components/ProductCard'

export default {
  name:'ProductWantCardList',
  components:{
    ProductCard
  }
  
  
}
</script>
<style>
.gallerycard:hover{
  cursor: pointer;
}
.productcard{
  text-align: center;
}
.productcard:hover{
  cursor:pointer;
}
</style>
