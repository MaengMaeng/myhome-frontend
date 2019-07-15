<template>
  <v-toolbar flat>
    <v-toolbar-title>
      <router-link to="/" id="Main">My Home</router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat to="/introduce">소개</v-btn>
      <v-btn flat to="/products">제품/서비스</v-btn>
      <v-btn flat to="/gallery">갤러리</v-btn>
      <v-btn flat to="/calendar">일정</v-btn>
      <v-btn flat to="/boardlist">게시판</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {

    }
  },
  methods: {

  },
  props: {

  },
  computed: {

  }
}


</script>

<style>
#Main{
  text-decoration:none;
}
</style>
