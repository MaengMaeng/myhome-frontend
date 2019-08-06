<template>
  <div>
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
      <LoginModal/>
      <v-btn flat @click.stop="drawer = !drawer">Menu</v-btn>

    </v-toolbar-items>
  </v-toolbar>
  <v-navigation-drawer v-model="drawer" right fixed temporary hide-overlay style="background-color: rgba(98, 132, 255, 0.8);">
    <v-list style="background-color: rgba(0, 0, 0, 0);"  >
    <!-- <v-list>
      <div ></div>
      <v-list-tile avatar style="height:75px">
        <v-list-tile-content style="margin-left: 13px;">
          <span id="SSAFY">
            <b>SSAFY</b>
          </span>
        </v-list-tile-content>
      </v-list-tile>
    </v-list> -->
    <v-btn round width="30px"  @click="drawer = !drawer">X</v-btn>
    <!-- <v-list-tile v-for="item in items" :key="item.title" @click="" :to="item.link" style="margin-top:10px;">
      <v-list-tile-content style="height:auto;">
        <h1 style="margin-left: 15px;">
          <v-icon>{{ item.icon }}</v-icon>
          <span class="spantag"> {{ item.title}}</span>
        </h1>
      </v-list-tile-content>
    </v-list-tile> -->
    <!-- <div v-if > -->
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
            <span v-if="newOne" style="color: red">new!</span>
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
      drawer:""
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

.spantag{
  color:white;
}
</style>
