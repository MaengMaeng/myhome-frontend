<template>
<v-layout wrap>
  <v-flex xs12 md6 lg3>
    <ProductCard class="productcard" :imgSrc="require('../assets/home-img/myhome.jpg')" title="MyHome-WebPage" content="타이틀 웹 프론트/백 엔드 구현" url="/" xs12 md6 lg3/>
  </v-flex>
  <v-flex x12 md6 lg3>
    <ProductCard class="productcard" :imgSrc="'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/03/GitHub-brave-hed-796x418.jpg'" title="Custom Keyboard Application" content="안드로이드 커스텀 키보드 제작중.."
    url="https://github.com/godsangin/Keyboard-Study" xs12 md6 lg3/>
  </v-flex>
  
</v-layout>
</template>

<script>
import ProductCard from '@/components/ProductCard'

export default {
  name:'ProductGoingCardList',
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
