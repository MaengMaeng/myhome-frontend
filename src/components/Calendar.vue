<template>
  <div>
    <full-calendar @eventClick="handleDateClick" :events="events" />
    <v-dialog hide-overlay v-model="dialog" persistent max-width="500px">
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
      title: '',
      start: '',
      end: '',
      description: '',
      cssClass: ''
    }
  },
  methods: {
    handleDateClick(event, jsEvent, pos) {
      var data = {
        id: this.$session.get('user').u_email,
        title: event.title,
        start: event.start,
        end: event.end,
        cssClass: event.cssClass,
        description: event.description
      }
      this.title = event.title;
      this.start = event.start;
      this.end = event.end;
      this.cssClass = event.cssClass;
      this.description = event.description;
      this.dialog = true

      this.$http.post(this.$store.state.server_ip + '/getCalId', data)
        .then((response) => {
          this.$store.state.cal_id = response.body[0].cal_id;
        })
        .catch((error) => {
          console.log(error)
        })
    },
    modify() {
      var start = format(this.start, 'YYYY-MM-DD');
      var end = format(this.end, 'YYYY-MM-DD');
      if(start > end){
        alert("Start date should be earlier than End date")
        return
      }

      var data = {
        id: this.$store.state.cal_id,
        title: this.title,
        start: start,
        end: end,
        description: this.description,
        cssClass: this.cssClass
      }

      this.$http.post(this.$store.state.server_ip + '/modifyPersonal', data)
        .then((response) => {
          this.$store.state.plan = true;
          this.dialog = false
        })
        .catch((error) => {
          console.log(error)
        })
    },
    del(){
      var data = {
        id : this.$store.state.cal_id
      }
      this.$http.post(this.$store.state.server_ip + '/delete', data)
        .then((response) => {
          this.$store.state.plan = true;
          this.dialog = false;
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

<style scoped>
.input-holder {
  margin: 10px 0;
  display: flex;
  /* justify-content: flex-start; */
  /* width: 77%; */
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


.red {
  background: rgb(235, 77, 77) !important;
  color: whitesmoke !important;
}

.blue {
  background: rgb(59, 59, 163) !important;
  color: whitesmoke !important;
}

.orange {
  background: orange !important;
  color: white !important;
}

.green {
  background: rgb(49, 155, 49) !important;
  color: white !important;
}

.blue,
.orange,
.red,
.green {
  font-size: 13px;
  font-weight: 500;
  text-transform: capitalize;
}

.event-item {
  padding: 2px 0 2px 4px !important;
}

.theme {
  width: 2000px;
}
.picker-main {
    width: 100%;
}

.form-area{
  display:flex; justify-content:center; text-align:center; width:80%;
}
.text-area{
  float:left; padding: 20px;
  min-width: 130px;
}
</style>
