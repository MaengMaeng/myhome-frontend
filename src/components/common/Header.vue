<template>
<div>
  <v-toolbar flat height="40px" class="header-toolbar">
    <v-layout>
      <v-flex text-xs-right>
        <span v-if="isLogin" style="width:100%; text-align:right;font-family: 'Nanum Pen Script'; font-size:20px;">{{$session.get("user").u_name}}님 환영합니다.</span>
        <LoginModal v-on:loginstate="loginstate" />
      </v-flex>
    </v-layout>
  </v-toolbar>
  <v-toolbar flat height="60px" class="header-toolbar">
    <v-toolbar-title>
      <router-link to="/" id="Main" style="color:black;"><span class="header-title">MY HOME</span></router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items id="header-toolbar-items">
      <v-btn flat to="/introduce"><span class="header-btn">소개</span></v-btn>
      <v-btn flat to="/products"><span class="header-btn">제품/서비스</span></v-btn>
      <v-btn flat to="/gallery"><span class="header-btn">갤러리</span></v-btn>
      <v-btn flat to="/calendar"><span class="header-btn">일정</span></v-btn>
      <v-btn flat to="/boardlist"><span class="header-btn">게시판</span></v-btn>
      <v-btn flat @click.stop="drawer = !drawer"><span class="header-btn">Menu</span></v-btn>
    </v-toolbar-items>
    <v-toolbar-items id="header-toolbar-items2">
      <v-btn flat @click.stop="drawer = !drawer"><span class="header-btn"><v-icon>menu</v-icon></span></v-btn>
    </v-toolbar-items>

  </v-toolbar>
  <v-navigation-drawer v-model="drawer" right fixed temporary hide-overlay style="background-color: rgba(61, 179, 158, 0.8);">
    <v-list style="background-color: rgba(0, 0, 0, 0);">
      <div v-if="isLogin" class="navigation-user">
        <v-list-tile >
          <v-list-tile-avatar>
            <v-img v-if="!$session.get('user').u_profile" src="https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927"></v-img>
            <v-img v-else :src="$session.get('user').u_profile"></v-img>

          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title class="title" style="font-family: 'Nanum Pen Script' !important; font-size:25px !important;color:black">{{$session.get("user").u_name}}</v-list-tile-title>
            <v-list-tile-title style="font-family: 'Nanum Pen Script' !important; font-size:20px !important; color:grey;">{{$session.get("user").u_mail}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <!-- <span class="navigation-user-info">게시글 : {{$store.state.user.u_boards}}</span> -->
            <span class="navigation-user-info">게시글 : {{$session.get("user").u_boards}}</span>
          </v-list-tile-content>
          <v-list-tile-content>
            <span class="navigation-user-info">댓글 : {{$session.get("user").u_comments}}</span>
          </v-list-tile-content>
        </v-list-tile>
      </div>
      <v-list-tile v-else>
        <v-list-tile-content>
          <span style="font-family: 'Nanum Pen Script' !important; font-size:30px !important; color:white; text-align:center; min-width:100%;">
            로그인 해주세요.
          </span>
        </v-list-tile-content>
      </v-list-tile>


      <v-list-tile @click="" to="/" style="margin-top:10px; background:rgba(0,0,0,0);">
        <v-list-tile-content style="height:auto;background:rgba(0,0,0,0);">
          <h1 style="margin-left: 15px;background:rgba(0,0,0,0);">
            <v-icon>home</v-icon>
            <span class="spantag"> Home</span>
          </h1>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile @click="" to="/introduce" style="margin-top:10px; background:rgba(0,0,0,0);">
        <v-list-tile-content style="height:auto;background:rgba(0,0,0,0);">
          <h1 style="margin-left: 15px;background:rgba(0,0,0,0);">
            <v-icon>accessibility_new</v-icon>
            <span class="spantag"> Introduce</span>
          </h1>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile @click="" to="/products" style="margin-top:10px; background:rgba(0,0,0,0);">
        <v-list-tile-content style="height:auto;background:rgba(0,0,0,0);">
          <h1 style="margin-left: 15px;background:rgba(0,0,0,0);">
            <v-icon>apps</v-icon>
            <span class="spantag"> Products</span>
          </h1>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile @click="" to="/gallery" style="margin-top:10px; background:rgba(0,0,0,0);">
        <v-list-tile-content style="height:auto;background:rgba(0,0,0,0);">
          <h1 style="margin-left: 15px;background:rgba(0,0,0,0);">
            <v-icon>insert_photo</v-icon>
            <span class="spantag"> Gallery</span>
          </h1>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile @click="" to="/calendar" style="margin-top:10px; background:rgba(0,0,0,0);">
        <v-list-tile-content style="height:auto;background:rgba(0,0,0,0);">
          <h1 style="margin-left: 15px;background:rgba(0,0,0,0);">
            <v-icon>calendar_today</v-icon>
            <span class="spantag"> Plan</span>
          </h1>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile @click="" to="/boardlist" style="margin-top:10px; background:rgba(0,0,0,0);">
        <v-list-tile-content style="height:auto;background:rgba(0,0,0,0);">
          <h1 style="margin-left: 15px;background:rgba(0,0,0,0);">
            <v-icon>dashboard</v-icon>
            <span class="spantag"> Board</span>
          </h1>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</div>
</template>

<script>
import LoginModal from "@/components/LoginModal"

export default {
  name: 'Header',
  components: {
    LoginModal
  },
  data() {
    return {
      drawer: "",
      isLogin: false,
    }
  },
  created() {
    if (this.$session.has("user")) {
      // this.$store.state.user = this.$session.get('user');
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  },
  methods: {
    loginstate() {
      if (this.$session.has('user')) {
        this.isLogin = true;
        // this.$store.state.user = this.$session.get('user');
      } else {
        this.isLogin = false;
        // this.$store.state.user = null;
      }
    }
  },
  props: {

  },
  computed: {

  }
}
</script>

<style>
#Main {
  text-decoration: none;
}

.header-toolbar {
  border-bottom: 0.5px solid rgba(165, 165, 165, 0.3) !important;
  background-color: rgb(255, 255, 255) !important;
}

.header-title {
  font-size: 20px;
  line-height: 1.5;
  font-family: 'Noto Sans', sans-serif;
  color: #555;
  font-weight: bold;
}

.header-btn {
  font-size: 14px;
  line-height: 1.5;
  font-family: 'Noto Sans', sans-serif;
  color: #666;
  font-weight: bold;
}

.spantag {
  color: white;
}

.navigation-user {
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background: white;
}

.navigation-user-info{
  font-family: 'Nanum Pen Script' !important;
   font-size:20px !important;
   color:black;
}
#header-toolbar-items2{
  display:none;
}
@media screen and (max-width: 768px) {
  #header-toolbar-items {
     display:none;
  }
  #header-toolbar-items2{
    display:block;
  }
 }

</style>
