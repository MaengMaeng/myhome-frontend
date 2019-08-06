<template>
    <form @submit.prevent="handleSubmit">
    <div class="input-holder">
        <input type="text" placeholder="Event title" v-model="event.title"/>
    </div>
    <div class="input-holder">
        <date-picker :placeholder="'Start date'" v-model="event.start" />
    </div>
    <div class="input-holder">
        <date-picker :placeholder="'End date'" v-model="event.end"/>
    </div>
    <div class="input-holder">
        <textarea placeholder="Event description" rows="4" v-model="event.data.description" ></textarea>
    </div>
    <div class="theme">
        <color-picker @colorPicked="selectColor" color="red" />
    </div>
    <div class="input-holder2">
        <button type="submit">Schedule</button>
    </div>
    </form>
</template>

<script>
import DatePicker from 'vuejs-datepicker';
import format from 'date-fns/format';
import ColorPicker from './ColorPicker';

export default {
    name: 'EventForm',
    data(){
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
        async handleSubmit(){
            const start = format(this.event.start, 'YYYY-MM-DD');
            const end = format(this.event.end, 'YYYY-MM-DD');
            const event = {
                ...this.event,
                start,
                end
            }

            var config = {
                // body: JSON.stringify(event),
                body: {
                    p_content: event.data.description,
                    p_edate:event.end,
                    p_sdate:event.start,
                    p_title: event.title,
                },
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'content-type': 'application/json'
                },
                data: {
                    num: this.$session.get('userInfo').user_num
                }
            }

            this.$http.post('http://192.168.31.63:3000/plan/personal', config)
                .then((response) => {
                    this.$store.state.plan = response.data;
                })
                .catch((error) =>{
                    console.log(error)
                })
            this.resetValues();
        },
        selectColor(color){
            this.event = {
                ...this.event,
                cssClass: color
            }
        },
        resetValues(){
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
    form {
      display: fix;
      flex-direction: column;
      /* margin-left: 30px; */
    }
    .input-holder {
      margin: 10px 0;
      display: flex;
      /* justify-content: flex-start; */
      width: 77%;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }
    .input-holder input,
    .input-holder textarea {
      padding: 12px 15px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 0;
      width: 100%;
      opacity: 0.8;
      font-size: 15px;
      font-weight: normal;
      color: black !important;
    }
    .input-holder input:focus,
    .input-holder textarea:focus,
    .input-holder button:focus {
      border: 2px solid rgb(155, 20, 255);
      outline: none;
      box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.2);
    }

    .vdp-datepicker {
      width: 100%;
    }
    .vdp-datepicker > div > input {
      width: 100%;
    }
    .input-holder2 > button {
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
    .theme{
      padding-top: 5%;
      padding-bottom: 10%;
    }
</style>
