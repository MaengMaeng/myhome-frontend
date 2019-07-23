import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    isLogin:false,
    user:{
      u_mail:'',
      u_name:'',
      u_tel:'',
      u_birth:''
    }
	}
});
