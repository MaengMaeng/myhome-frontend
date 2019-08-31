<template>
  <v-container fluid>
    <v-layout wrap row>
      <v-flex xs12 md9>
        <calendar :events="events" @updatePlan="getAllPlans" @deletePlan="getAllPlans"/>
      </v-flex>
      <v-flex xs12 md3>
        <event-form @insertPlan="getAllPlans"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Calendar from '@/components/Calendar.vue'
import EventForm from '@/components/EventForm.vue'
import {mapState} from 'vuex';

export default {
  name: 'CalendarPage',
  components: {
    Calendar,
    EventForm
  },
  data(){
    return {
      events: [],

    }
  },
  created(){
    if(!this.$session.has("user")){
      alert("로그인 해주세요.");
      this.$router.go(-1);
    }
  },
  mounted(){
    this.getAllPlans();
  },
  computed:{
    // mapState(['plan'])
  },
  watch: {
    plan(to, from){
      // this.events.push(this.$store.state.plan);
    }
  },
  methods:{
    getAllPlans(){
      this.$http.get(this.$store.state.server_ip + '/getAllPlans')
        .then((response) => {
          var items = response.data;
          this.events = [];
          console.log(items);
          for(var i = 0; i < items.length; i++){
            this.events.push({number: items[i].p_number, title: items[i].p_title, start: items[i].p_sdate,
                    end: items[i].p_edate, cssClass:'family', description: items[i].p_content});
          }
        })
        .catch((error) =>{
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    background-color: rgb(255, 255, 255);
  }
  .main2 {
    padding: 0 5% 10% 10%;
    display: flex;
    align-items: center;
  }

  .calendar-holder {
    width: 65%;
  }

  .form-holder {
    padding-left: 5%;
    width: 35%;
  }
  .form-holder > h3 {
    color: rgb(155, 20, 255);
    text-transform: uppercase;
    font-size: 16px;
    text-align: left;
  }

</style>
