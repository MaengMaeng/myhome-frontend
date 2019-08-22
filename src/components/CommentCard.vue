<template>
  <v-layout wrap row ma-2 align-left v-if="comment" class="comment">
    <v-flex xs3>
      <v-list-tile>
        <v-list-tile-avatar>
          <v-img src="https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927"></v-img>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title style="font-family: 'Nanum Pen Script' !important; font-size:25px !important;color:white">{{comment.c_writer}}</v-list-tile-title>
          <v-list-tile-title style="font-family: 'Nanum Pen Script' !important; font-size:20px !important; color:grey;">{{comment.c_wdate}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-flex>
    <v-flex xs9 class="comment-content-text" pa-1>
      <span style="font-weight:700;">{{comment.c_content}}</span>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    created(){
      console.log(this.$props.comment)
    },
    props:{
      comment:{default:null}
    },
    methods:{

    }
  }
</script>

<style>
.comment{
  margin: 10px;
  padding: 5px;
  border-radius: 15px;
  background: rgba(0,0,0,0.1);
}
.comment-content-text{
  text-align:left;
  background:white;
  border-radius: 10px;
}


.comment-header-text{

}
</style>
