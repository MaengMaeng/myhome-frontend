<template>
  <v-layout wrap ma-5>
    <v-flex xs4>
      <h4 style="color:#333">{{comment.c_wdate}}</h4>
      <h3>{{comment.c_writer}}</h3>
    </v-flex>
    <v-flex xs8>
      <v-divider vertical></v-divider>
      {{comment.c_content}}
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
    props:{
      comment:{}
    },
    methods:{

    }
  }
</script>
