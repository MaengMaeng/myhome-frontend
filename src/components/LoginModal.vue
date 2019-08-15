<template>
<v-dialog v-model="dialog" persistent max-width="600px" @keydown.esc="closeDialog">
  <template v-slot:activator="{ on }">
    <!-- <span v-if="$store.state.userInfo" @click="signout()" v-on="">Logout</span> -->
    <!-- <span v-else v-on="on">Login</span> -->
    <v-btn v-if="!isLogin" flat class="outlined" v-on="on">Login</v-btn>
    <v-btn v-else @click="logout" flat class="outlined" v-on="">Logout</v-btn>
  </template>
  <v-card>
    <v-card-title>
      <span class="headline">LOGIN</span>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap @keydown.enter="normalLogin">
          <v-flex xs12>
            <v-text-field label="Email*" required v-model="id"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field label="Password*" type="password" required v-model="pw"></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" flat @click="normalLogin">LOGIN</v-btn>
      <v-btn color="blue darken-1" flat @click="closeDialog">CANCEL</v-btn>
    </v-card-actions>
    <Loading :isLoading="isLoading" :isFullPage="false"/>
    <Loading :isLoading="isLoadingForSignout" :isFullPage="true"/>
  </v-card>
</v-dialog>
</template>

<script>
import Loading from '@/components/common/Loading';

export default {
  name: "LoginModal",
  data() {
    return {
      id: "",
      pw: "",
      isLogin:false,
      dialog: false,
      isLoading: false,
      isLoadingForSignout:false,
    }
  },
  components:{
    Loading
  },
  created() {
    if(this.$session.has('user')){
      this.isLogin = true;
    }
    else{
      this.isLogin = false;
    }
  },
  methods: {
    async normalLogin() {
      this.isLoading = true;
      var config = {
        u_mail:this.id,
        u_pw:this.pw,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'dataType':"jsonp"
        }
      };

      this.axios.post("http://ec2-52-79-126-1.ap-northeast-2.compute.amazonaws.com:8080/login", config)
        .then((response) => {
          console.log(response.data)
          if(response.data == ""){
            alert("ID 혹은 비밀번호를 다시 확인해주세요.")
            this.id = "";
            this.pw = "";
            this.isLoading = false;
          }
          else{
            this.isLoading = false;
            this.$session.set("user", response.data);
            alert("로그인 되었습니다.")
            this.isLogin = true;
            this.$emit("loginstate")
            this.id = "";
            this.pw = "";
            this.dialog = false;
          }

        })
        .catch((error) => {
          console.log(error)
          alert("ID 혹은 비밀번호를 다시 확인해주세요.")
          this.id = "";
          this.pw = "";
        })
    },

    logout(){
      this.$session.remove("user");

      alert("로그아웃 되었습니다.")
      this.isLogin = false;

      this.$emit("loginstate")

      this.$router.push("/");
    },

    closeDialog() {
      this.dialog = false;
      this.id = "";
      this.pw = "";
    }
  }
}
</script>

<style scoped>
.v-btn.outlined {
    border: 1px solid black;
    border-radius:5px;
    height: 30px;
    width: 30px;
    font-size:20px;
    font-family: 'Nanum Pen Script';
    /* color:rgb(57, 117, 72); */
  }
</style>
