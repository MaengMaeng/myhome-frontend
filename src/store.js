import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    server_ip:'http://10.3.144.218:8080',
    // server_ip:'http://168.188.125.194:8080',
    // server_ip:'http://ec2-52-79-126-1.ap-northeast-2.compute.amazonaws.com:8080',
    isLogin:false,
    user:{
      u_mail:'',
      u_name:'',
      u_tel:'',
      u_birth:''
    }
	}
});
