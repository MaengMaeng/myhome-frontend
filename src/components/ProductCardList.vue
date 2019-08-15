<template>
<v-layout wrap>
  <v-flex xs12 md6 lg3>
  <ProductCard class="productcard" :imgSrc="require('../assets/home-img/moara.jpg')" title="모아라얍!" content="모바일 프로그래밍 텀프로젝트로 열심히 만든 종이쿠폰 대체 애플리케이션.
          텀프 이후 사장됨." url="https://onestore.co.kr/userpoc/apps/view?pid=0000722725" xs12 md6 lg3/>
  </v-flex>
  <v-flex x12 md6 lg3>
    <ProductCard class="productcard" :imgSrc="require('../assets/home-img/mydays.jpg')" title="MyDays" content="추억의 생확계획표를 작성하여 오늘 하루, 지난날을 이야기해보세요."
    url="https://play.google.com/store/apps/details?id=com.msproject.myhome.mydays" xs12 md6 lg3/>
  </v-flex>
  <v-flex x12 md6 lg3>
    <ProductCard class="productcard" :imgSrc="require('../assets/home-img/dailycloset.jpg')" title="DailyCloset" content="하루하루 입은 옷을 기록하고 나만의 패션 다이어리를 작성해 보세요."
    url="https://play.google.com/store/apps/details?id=com.msproject.myhome.dailycloset" xs12 md6 lg3/>
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
.productcard{
  text-align: center;
}
.productcard:hover{
  cursor:pointer;
}
</style>
