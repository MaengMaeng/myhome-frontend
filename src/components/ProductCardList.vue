<template>
<v-layout wrap>
  <v-flex xs12 md6 lg3>
  <ProductCard class="productcard" :imgSrc="require('../assets/home-img/moara.jpg')" title="모아라얍!" content="일부 가게에서 실행하고있는 종이 쿠폰을 발급하여 스탬프를 쌓으면 보상을 지급하는 컨텐츠를 어플로 구현하였다. 
매장에서는 종이 쿠폰을 제작하는 비용 및 공간이 절약되며 소비자들은 종이쿠폰을 분실할 필요가 없어지는 기대효과가 있다. 
사실 이미 이러한 기능은 여러 어플에서 나왔지만 여러 체인점을 갖고 있는 프랜차이즈 같은 기업들에서 나와 한 어플로 한 가지 쿠폰을 쌓을 수 밖에 없는 비효율성을 지니고 있다. 또한 동네 여러 상권들 또한 이러한 제도를 많이 사용하는데 독자적인 어플을 만들기에는 여러 어려움이 있다. 이들을 타겟으로 하는 통합형 모바일 쿠폰이라 할 수 있겠다. 
동작 방식은 소비자와 매장이 각각 회원가입을 하여 로그인하여 매장은 상품을 구입한 소비자에게 전화번호를 받아 적립을 시킨다. 매장은 스탬프가 어느정도 찼을 때 보상할 상품을 등록할 수 있다. 소비자가 만약 스탬프가 충분히 있는 상태에서 사용하려한다면 본인의 폰에서 쌓은 스탬프를 차감한 후 상품을 구매할 수 있도록 하였다. 이 상품을 구매할 때 바코드가 부여되는데 매장은 이를 인식하여 상품을 지급한다. 
카메라기능권한 : 바코드 인식을 위해 권한을 승인 받는다." url="https://onestore.co.kr/userpoc/apps/view?pid=0000722725" xs12 md6 lg3/>
  </v-flex>
  <v-flex x12 md6 lg3>
    <ProductCard class="productcard" :imgSrc="require('../assets/home-img/mydays.jpg')" title="MyDays" content="일정을 관리하는 데에 어려움을 겪고 있나요?
오늘 하루 자신이 어떤 활동을 어떻게 했는지 이야기할 수 있나요?
MyDays를 통해 오늘을 기록하면 나의 어제, 지난 주, 지난 달을 이야기 할 수 있습니다.
추억의 생활계획표를 작성하고 오늘을 기록해보세요!"
    url="https://play.google.com/store/apps/details?id=com.msproject.myhome.mydays" xs12 md6 lg3/>
  </v-flex>
  <v-flex x12 md6 lg3>
    <ProductCard class="productcard" :imgSrc="require('../assets/home-img/dailycloset.jpg')" title="DailyCloset" content="오늘의 날씨정보와 지난날의 옷들을 돌아보고, 더욱 빠르고 편리하게 옷을 고를 수 있습니다. 
사진을 통해 오늘입은 옷을 기록하고 날짜별, 사진별로 찾아볼 수 있습니다.
중요한 날을 설정하여 특별한 날 입은 옷을 확인할 수 있습니다.
지난 겨울에 입은 옷이 궁금하다구요? 입었던 옷을 날짜로 검색할 수 있습니다."
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
