<template class="productcard">
<v-layout py-4 h-100 mx-4 mt-4>
  <v-flex>
    <v-card class="container">
      <v-img class="max-small" :src="imgSrc" :title="title" :content="content" :url="url" @click="myDoAction()" height="250px">
      </v-img>
      <v-card-title>
        <div>
          <div class="headline">
            {{title}}
          </div>
          <div class="grey--text">
            {{content}}
          </div>
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
export default {
  name: 'ProductCard',
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
    content: {
      type: String,
      default: "content"
    },
    url:{
      type:String,
      default:"www.naver.com"
    }
  },
  methods:{
      myDoAction(){
        location.href = this.$props.url;
      }
  }
}
</script>
<style>
.max-small {
    width: auto; height: auto;
    margin: auto;
    max-width: 150px;
    max-height: 150px;
}
.container{
  padding:24px;
}
.headline{
  margin-bottom:12px;
}
</style>



