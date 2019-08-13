<template>
  <div>
    <v-toolbar flat height="40px" style="border-bottom:1px solid rgba(165, 165, 165, 1); background-color:rgb(255, 255, 255);">
      <v-layout>
        <v-flex text-xs-right>
          <span v-if="isLogin" style="width:100%; text-align:right;font-family: 'Nanum Pen Script'; font-size:20px;">{{user.u_name}}님 환영합니다.</span>
          <LoginModal v-on:loginstate="loginstate"/>
        </v-flex>
      </v-layout>
    </v-toolbar>
  <v-toolbar flat height="60px" style="border-bottom:1px solid rgb(165, 165, 165); background-color:rgb(255, 255, 255);">
    <v-toolbar-title>
      <router-link to="/" id="Main" style="color:black;">My Home</router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat to="/introduce">소개</v-btn>
      <v-btn flat to="/products">제품/서비스</v-btn>
      <v-btn flat to="/gallery">갤러리</v-btn>
      <v-btn flat to="/calendar">일정</v-btn>
      <v-btn flat to="/boardlist">게시판</v-btn>
      <v-btn flat @click.stop="drawer = !drawer">Menu</v-btn>

    </v-toolbar-items>
  </v-toolbar>
  <v-navigation-drawer v-model="drawer" right fixed temporary hide-overlay style="background-color: rgba(98, 132, 255, 0.9);">
    <v-list style="background-color: rgba(0, 0, 0, 0);">

      <v-list-tile style="margin:10px; padding:10px; border-radius:5px; background:white;" v-if="isLogin">
         <v-list-tile-avatar>
           <v-img src="https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927"></v-img>
         </v-list-tile-avatar>
         <v-list-tile-content>
            <v-list-tile-title class="title" style="font-family: 'Nanum Pen Script' !important; font-size:25px !important;color:black">{{user.u_name}}</v-list-tile-title>
            <v-list-tile-title style="font-family: 'Nanum Pen Script' !important; font-size:20px !important; color:grey;">{{user.u_mail}}</v-list-tile-title>
          </v-list-tile-content>
       </v-list-tile>
       <v-list-tile v-else>
          <v-list-tile-content>
            <span style="font-family: 'Nanum Pen Script' !important; font-size:30px !important; color:grey; text-align:center; min-width:100%;">
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

    <v-list-group>
      <template v-slot:activator>
        <v-list-tile>
          <v-list-tile-content style="height:auto;">
            <h1 style="margin-left: 15px;">
              <v-icon>accessibility_new</v-icon>
              <span class="spantag"> Personal</span>
            </h1>
          </v-list-tile-content>
        </v-list-tile>
      </template>
      <v-divider />

      <v-list-tile to="/myproject" style="background:white;">
        <v-list-tile-content style="height:auto;">
          <h1 style="margin-left: 30px;">
            <span class="spantag">Project</span>
          </h1>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider />

      <v-list-tile to="/post" style="background:white;">
        <v-list-tile-content style="height:auto;">
          <h1 style="margin-left: 30px;">
            <span class="spantag">Post</span>
          </h1>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider/>

      <v-list-tile to="/todolist" style="background:white;">
        <v-list-tile-content style="height:auto;">
          <h1 style="margin-left: 30px;">
            <span class="spantag">To-Do List</span>
          </h1>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider/>

      <v-list-tile to="/calendar">
        <v-list-tile-content style="height:auto;">
          <h1 style="margin-left: 30px;">
            <span class="spantag">Calendar</span>
          </h1>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider/>
    </v-list-group>
<!-- dklafjlkdjfkljakldfjklasdjfkljadsklfjdfkljkldfjakljdklfjaklfj -->
    <v-list-group>
      <template v-slot:activator>
        <v-list-tile>
          <v-list-tile-content style="height:auto;">
            <h1 style="margin-left: 15px;">
              <v-icon>people</v-icon>
              <span class="spantag"> Team</span>
            </h1>
          </v-list-tile-content>
        </v-list-tile>
      </template>
      <v-divider />

      <v-list-tile to="/teamChoose" style="background:white;">
        <v-list-tile-content style="height:auto;">
          <h1 style="margin-left: 30px;">
            <span class="spantag">Team 선택</span>&nbsp;
          </h1>
        </v-list-tile-content>
      </v-list-tile>
<!--
      <v-list-tile v-else @click="go()" style="background:white;">
        <v-list-tile-content style="height:auto;">
          <h1 style="margin-left: 30px;">
            <span class="spantag">Team: {{ teamName }}</span>
          </h1>
        </v-list-tile-content>
      </v-list-tile>
-->
      <v-divider />
            <v-list-tile to="/teamCalendar" style="background:white;">
        <v-list-tile-content style="height:auto;">
          <h1 style="margin-left: 30px;">
            <span class="spantag">Calendar</span>
          </h1>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider/>

    </v-list-group>

        <v-list-tile to="/another" >
          <v-list-tile-content style="height:auto;">
            <h1 style="margin-left: 15px;">
              <v-icon>person_pin</v-icon>
              <span class="spantag"> AnotherUser</span>
            </h1>
          </v-list-tile-content>
        </v-list-tile>

    <v-list-group>
      <template v-slot:activator>
        <v-list-tile>
          <v-list-tile-content style="height:auto;">
            <h1 style="margin-left: 15px;">
              <v-icon>tag_faces</v-icon>
              <span class="spantag"> Users</span>
            </h1>
          </v-list-tile-content>
        </v-list-tile>
      </template>
      <v-divider />
      <v-list-tile to="/user/update" style="background:white;">
        <v-list-tile-content style="height:auto;">
          <h1 style="margin-left: 30px;">
            <span class="spantag">회원 정보 수정</span>
          </h1>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider />
      <v-list-tile to="/user/delete" style="background:white;">
        <v-list-tile-content style="height:auto;">
          <h1 style="margin-left: 30px;">
            <span class="spantag">회원 탈퇴</span>
          </h1>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider/>
    </v-list-group>
  </v-list>
  </v-navigation-drawer>
</div>
</template>

<script>
import LoginModal from "@/components/LoginModal"

export default {
  name: 'Header',
  components:{
    LoginModal
  },
  data () {
    return {
      drawer:"",
      isLogin:false,
      user:null,
    }
  },
  created(){
    if(this.$session.has("user")){
      this.user = this.$session.get('user');
      this.isLogin = true;
    }
    else{
      this.isLogin = false;
    }
  },
  methods: {
    loginstate(){
      if(this.$session.has('user')){
        this.isLogin = true;
        this.user = this.$session.get('user');
      }
      else{
        this.isLogin = false;
        this.user = null;
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
#Main{
  text-decoration:none;
}

.spantag{
  color:white;
}
</style>
