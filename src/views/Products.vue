<template>
  <div id="mycontainer" class="navbar navbar-inverse nav-side container-detail">
  	<div class="container-atom">
  		<img alt="product title" :src="require('../assets/home-img/moara.jpg')" id="product_img">
  		<p id="product_content">Moara:  종이쿠폰을 대체할 차세대 모바일 쿠폰 애플리케이션<br />
  	           전세계 500만 가맹점을 가진 강력한 쿠폰관리 애플리케이션 <br />
  	           전세계 500만 가맹점을 가진 강력한 쿠폰관리 애플리케이션 <br />
  	           전세계 500만 가맹점을 가진 강력한 쿠폰관리 애플리케이션
  		</p>
  	</div>
  </div>
</template>

<script>
export default {
	name: 'Products',
	components: {

	},
	methods: {

	},
}
</script>

<style media="screen">
.nav-side{
  display:inline-block;
  color:white;
  width:20%;
}

.li-title{
  padding:12px;
  background:#456;
}

.li-title:hover{
  background-color:#999;
  cursor:pointer;
}

.container-product{
  padding:1%;

}
.container-detail{
  width:70%;
  display:inline-block;
  padding:20px;
  margin-left:auto;
  margin-right:auto;
  vertical-align:top;
  height:512px;

}
.container-atom{
  padding:10%;
  background:#456;

}
.ul-widthfree{
  width:100%;
}
p{
  text-align:center;
}
img{
  display:block;
  margin-left:auto;
  margin-right:auto;
  margin-bottom:20px;
}
#mycontainer{
  background:#456;
}
</style>
