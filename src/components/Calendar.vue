<template>
  <div>
    <full-calendar id="my-calendar" @eventClick="handleDateClick" :monthNames="monthNames" :weekNames="weekNames" :titleFormat="titleFormat" :events="events" />
    <v-dialog id="calendar-dialog" hide-overlay v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title style="display:flex; justify-content:center;">
          <h2> 일정을 확인하세요! </h2>
        </v-card-title>


        <v-card-text style="">
          <v-container grid-list-md style="">
            <v-layout wrap>
              <div class="form-area">
                <div class="text-area"> Event title: </div>
                <div class="input-holder" style="float:left">
                  <input type="text" v-model="title" />
                </div>
              </div>

              <div class="form-area">
                <div class="text-area"> Start date: </div>
                <div class="input-holder">
                  <date-picker v-model="start" />
                </div>
              </div>

              <div class="form-area">
                <div class="text-area"> End date: </div>
                <div class="input-holder">
                  <date-picker v-model="end" />
                </div>
              </div>

              <div class="form-area">
                <div class="text-area"> Description: </div>
                <div class="input-holder">
                  <textarea rows="4" v-model="description" style=" resize: none;"></textarea>
                </div>
              </div>

              <div class="form-area">
                <div class="text-area"> color: </div>
                <div class="theme">
                  <color-picker @colorPicked="selectColor" :color="cssClass" />
                </div>
              </div>
            </v-layout>
          </v-container>
        </v-card-text>

        <v-card-actions style="display:flex; justify-content:center;">
          <v-btn color="red darken-1" flat @click="del">Delete</v-btn>
          <v-btn color="blue darken-1" flat @click="modify">Modify</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

</template>

<script>
import FullCalendar from 'vue-fullcalendar';
import DatePicker from 'vuejs-datepicker';
import ColorPicker from './ColorPicker';
import format from 'date-fns/format';

export default {
  name: 'Calendar',
  props: ['events'],
  components: {
    FullCalendar,
    DatePicker,
    ColorPicker
  },
  data() {
    return {
      dialog: false,
      num:'',
      title: '',
      start: '',
      end: '',
      description: '',
      cssClass: '',
      weekNames:['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
      monthNames:['1','2','3','4','5','6월','7','8','9','10','11','12'],
      titleFormat :'yyyy년 MM월'
    }
  },
  methods: {
    handleDateClick(event, jsEvent, pos) {
      this.number = event.number;
      this.title = event.title;
      this.start = event.start;
      this.end = event.end;
      this.cssClass = event.cssClass;
      this.description = event.description;
      this.dialog = true
    },
    modify() {
      var start = format(this.start, 'YYYY-MM-DD');
      var end = format(this.end, 'YYYY-MM-DD');
      if(start > end){
        alert("Start date should be earlier than End date")
        return
      }

      var data = {
        p_number: this.number * 1,
        p_title: this.title,
        p_sdate: start,
        p_edate: end,
        p_content: this.description,
        p_color:this.cssClass.split("-")[2],
        headers: {
          'Access-Control-Allow-Origin': '*',
          'content-type': 'application/json'
        }
      }

      console.log(data);

      this.$http.put(this.$store.state.server_ip + '/updatePlan', data)
        .then((response) => {
          this.dialog = false;
          this.$emit("updatePlan");
        })
        .catch((error) => {
          console.log(error)
        })
    },
    del(){
      var config = {
        p_number:this.number,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'content-type': 'application/json'
        }
      }

      this.$http.post(this.$store.state.server_ip + '/deletePlan', config)
        .then((response) => {
          this.dialog = false;
          this.$emit("deletePlan");
        })
        .catch((error) => {
          console.log(error)
        })
    },
    selectColor(color){
        this.cssClass = color
    }
  }
}
</script>

<style>
  .input-holder {
    margin: 10px 0;
    display: flex;
  }

  .input-holder input,
  .input-holder textarea {
    padding: 12px 15px;
    border-radius: 0;
    width: 100%;
    opacity: 0.8;
    font-size: 15px;
    font-weight: normal;
    color: black !important;
    float: left;
  }

  .input-holder input:focus,
  .input-holder textarea:focus,
  .input-holder button:focus {
    border: 1.5px solid rgb(0, 0, 0);
    outline: none;
    box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.2);
  }

  .event-color-0{
    background: rgba(255,237,78,1) !important;
    color: black !important;
  }
  .event-color-1{
    background: rgba(88,191,162,1) !important;
    color: black !important;
  }
  .event-color-2{
    background: rgba(81,42,222,1) !important;
    color: white !important;
  }
  .event-color-3{
    background: rgba(255,42,42,1) !important;
    color: white !important;
  }
  .event-color-4{
    background: rgba(25,227,118,1) !important;
    color: black !important;
  }
  .event-color-5{
    background: rgba(182,64,230,1) !important;
    color: white !important;
  }

  .event-color-1,
  .event-color-2,
  .event-color-3,
  .event-color-4,
  .event-color-5 {
    font-size: 13px;
    font-weight: 500;
    text-transform: capitalize;
  }

  .event-item {
    padding: 2px 0 2px 4px !important;
  }

  .picker-main {
      width: 100% !important;
  }

  .form-area{
    display:flex; justify-content:center; text-align:center; width:80%;
  }
  .text-area{
    float:left; padding: 20px;
    min-width: 130px;
  }


.input-holder div{
  opacity:1 !important;
}

#my-calendar .events-week{
  height:100px !important;
  min-height:100px !important;
}
</style>
