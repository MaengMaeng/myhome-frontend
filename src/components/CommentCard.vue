<template>
  <v-layout wrap ma-2 align-left>
    <v-flex xs4 style="background:#555;">
      <h4 style="color:#DDD">{{comment.c_wdate}}</h4>
      <h3 style="color:#FFF">{{comment.c_writer}}</h3>
    </v-flex>
    <v-flex xs8 class="comment-content-text" style="background:#999;" pa-1>
      <span  v-text="comment.c_content"></span>
    </v-flex>
    <v-divider></v-divider>
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
      comment:{}
    },
    methods:{

    }
  }
</script>

<style>
.comment-content-text{
  text-align:left;
}

.comment-header-text{

}
</style>
