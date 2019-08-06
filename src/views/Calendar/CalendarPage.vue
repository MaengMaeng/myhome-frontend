<template>
  <div>
    <h1>똥차 Calendar</h1>

    <div id="app">
      <div class="main2" >
        <div class="calendar-holder">
          <calendar :events="events" />
        </div>

        <div class="form-holder">
          <h3>Schedule an event</h3>
          <event-form />
        </div>
      </div>
    </div>
  </div>
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
      events: []
    }
  },
  mounted(){
    // var data = {
    //     num : this.$session.get('userInfo').user_num
    // }
    this.$http.get('http://168.188.125.194:8080/getAllPlans')
      .then((response) => {
        var items = response.body;
        // console.log(items)
        for(var i = 0; i < items.length; i++){
          this.events.push({title: items[i].p_title, start: items[i].p_sdate,
                  end: items[i].p_edate, cssClass: "#000", description: items[i].p_content});
        }
      })
      .catch((error) =>{
        // console.log(error)
      })
  },
  computed:{
    // mapState(['plan'])
  }
  ,
  watch: {
    plan(to, from){
      // this.events.push(this.$store.state.plan);
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
