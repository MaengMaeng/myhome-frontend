<template>
<v-layout wrap>
  <v-flex @click="insertBoard()" xs12 md6 lg3>
  <GalleryCard class="gallerycard" :imgSrc="require('../assets/home-img/plus.jpg')" title="추가하기" writer="추가버튼" xs12 md6 lg3/>
  </v-flex>
  <v-flex @click="boardDetail(item.b_number)" v-for="item in galleryCardList" xs12 md6 lg3>
    <GalleryCard class="gallerycard" :imgSrc="item.a_file" :title="item.b_title" :writer="item.b_writer"></GalleryCard>
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
      this.axios.get(this.$store.state.server_ip + "/getAttachmentListByPage?page_num=" + page, config)
      .then((response) => {
        this.galleryCardList = response.data;
        console.log(response.data)
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
        this.axios.get(this.$store.state.server_ip + "/getAttachmentListByPage?page_num=" + page, config)
        .then((response) => {
          this.galleryCardList = response.data;
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  methods:{
    insertBoard(){
      this.$router.push({name:"BoardWritePage"})
    },
    boardDetail(b_number){
        this.$router.push({name:"BoardDetailPage", params:{id:b_number}})
    }
  }
}
</script>
<style>
.gallerycard:hover{
  cursor: pointer;
}
</style>
