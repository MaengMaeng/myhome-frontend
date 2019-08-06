<template>
<v-layout wrap>
  <v-flex  xs12 md6 lg3>
  <GalleryCard :imgSrc="require('../assets/home-img/plus.jpg')" title="추가하기" writer="추가버튼" xs12 md6 lg3/>
  </v-flex>
  <v-flex v-for="item in galleryCardList" xs12 md6 lg3>
    <GalleryCard :imgSrc="item.a_file"></GalleryCard>
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
      galleryCardList: [],
      page: 1,
      length: 200,
      totalVisible: 7
    }
  },
  created() {
    var config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'dataType': "jsonp"
      }
    };

    var page = this.page - 1;
    // this.axios.get("http://ec2-52-79-126-1.ap-northeast-2.compute.amazonaws.com:8080/getAttachmentListByPage?page_num=" + page, config)
      this.axios.get("http://168.188.125.194:8080/getAttachmentListByPage?page_num=" + page, config)
      .then((response) => {
        this.galleryCardList = response.data;
      })
      .catch((error) => {
        console.log(error)
      })
  },
  watch:{
    page(){
      var config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'dataType': "jsonp"
        }
      };

      var page = this.page - 1;
      // this.axios.get("http://ec2-52-79-126-1.ap-northeast-2.compute.amazonaws.com:8080/getAttachmentListByPage?page_num=" + page, config)
        this.axios.get("http://168.188.125.194:8080/getAttachmentListByPage?page_num=" + page, config)
        .then((response) => {
          this.galleryCardList = response.data;
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
}
</script>
