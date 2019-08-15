<template>
  <v-container fluid fill-height>
    <v-layout wrap row align-center>
      <v-flex xs12 text-xs-center>
        <div class="input-holder">
          <div>
            <input type="text" placeholder="Event title" v-model="event.title" />
          </div>
        </div>
        <date-picker :placeholder="'Start date'" v-model="event.start" class="input-holder" />
        <date-picker :placeholder="'End date'" v-model="event.end" class="input-holder" />
        <div class="input-holder">
          <div class="">
            <textarea placeholder="Event description" rows="4" v-model="event.data.description"></textarea>
          </div>
        </div>
        <div class="theme">
          <color-picker @colorPicked="selectColor" color="red" />
        </div>
        <v-btn @click="insertPlan" blue>스케쥴 추가하기</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import DatePicker from 'vuejs-datepicker';
  import format from 'date-fns/format';
  import ColorPicker from './ColorPicker';

  export default {
    name: 'EventForm',
    data() {
      return {
        event: {
          title: '',
          start: '',
          end: '',
          cssClass: '',
          data: {
            description: ''
          }
        }
      }
    },

    methods: {
      async insertPlan() {
        const start = format(this.event.start, 'YYYY-MM-DD');
        const end = format(this.event.end, 'YYYY-MM-DD');
        const event = {
          ...this.event,
          start,
          end
        }

        var config = {
          p_content: event.data.description,
          p_edate: event.end,
          p_sdate: event.start,
          p_title: event.title,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'content-type': 'application/json'
          }
        }

        this.$http.post(this.$store.state.server_ip + '/insertPlan', config)
          .then((response) => {
            this.$store.state.plan = response.data;
          })
          .catch((error) => {
            console.log(error)
          })
        this.resetValues();
      },
      selectColor(color) {
        this.event = {
          ...this.event,
          cssClass: color
        }
      },
      resetValues() {
        this.event = {
          title: '',
          start: '',
          end: '',
          data: {
            description: ''
          }
        }
      }
    },
    components: {
      DatePicker,
      ColorPicker
    }
  }
</script>

<style>
  .input-holder {
    display: flex;
    /* justify-content: flex-start; */
  }

  .input-holder div {
    float: center;
    width: 100%;
    opacity: 0.8;
    font-size: 15px;
    font-weight: normal;
    color: black !important;
  }

  .input-holder {
    margin: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  .input-holder input,
  .input-holder textarea {
    width: 100%;
    padding: 15px;

  }

  .input-holder input:focus,
  .input-holder textarea:focus,
  .input-holder button:focus {
    border: 2px solid rgb(155, 20, 255);
    outline: none;
    box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.2);
  }

  .input-holder2>button {
    justify-self: center;
    padding: 12px 25px;
    border-radius: 0;
    text-transform: uppercase;
    font-weight: 600;
    background: rgb(97, 97, 97);
    color: white;
    border: none;
    font-size: 14px;
    letter-spacing: -0.1px;
    cursor: pointer;
  }

  .theme {
    margin: 0 auto;
    text-align: center;
    padding-top: 5%;
    padding-bottom: 10%;
  }
</style>
