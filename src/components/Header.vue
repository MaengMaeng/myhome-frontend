<template>
<div>
  <header>
    <div class="header">
      <router-link to="/">
        <span>My</span>
        <span>Home</span>
      </router-link>
      <ul class="fs-menu">
        <li>
          <router-link to="/introduce">소개</router-link>
        </li>
        <li>
          <router-link to="/products">제품/서비스</router-link>
        </li>
        <li>
          <router-link to="/gallery">갤러리</router-link>
        </li>
        <li>
          <router-link to="/calendar">일정</router-link>
        </li>
        <li>
          <router-link to="/boardlist">게시판</router-link>
        </li>
      </ul>
    </div>

  </header>
</div>
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
.header {
  position: relative;
  z-index: 1;
  width: 100%;
  box-shadow: 0px 0px 5px 0px grey;
  height: 64px;
  background: #fff;
}

.header>ul {
  text-align: center;
  float: right;
  list-style: none;
  margin: 0;
  padding: 0;
  line-height: 64px;
}

.header>ul>li {
  float: left;
  padding: 0px 10px 0px 10px;
  font-size: 24px;
}

.header>ul>li:hover {
  background-color: #eee;
}

.header>ul>li>a {
  color: black;
  text-decoration: none;
}

.header > a {
  text-decoration: none;
}
.header > a > span {
  text-align: center;
  font-weight: bold;
  line-height: 64px;
  padding-left: 8px;
}

.header > a >span:nth-child(1) {
  font-size: 32px;
  color: #000;
}

.header > a >span:nth-child(2) {
  font-size: 32px;
  color: #5e7eff;
}


</style>
