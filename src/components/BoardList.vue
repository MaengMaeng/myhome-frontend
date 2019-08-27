<template>
  <v-data-table
    :headers="headers"
    :items="boardList"
    class="elevation-1"
    hide-actions
  >
    <template v-slot:items="props" >
      <tr  v-if="props.item.b_category == 0" class="notice">
        <td class="text-xs-right"><span class="number">공지</span></td>
        <td class="text-xs-left" ><span @click="goDetail(props.item.b_number)" class="table-title">{{ props.item.b_title }}</span><span class="table-comments">{{props.item.b_comments|comments}}</span></td>
        <td class="text-xs-center">{{ props.item.b_writer }}</td>
        <td class="text-xs-center">{{ props.item.b_views }}</td>
        <td class="text-xs-center">{{ props.item.b_wdate|time}}</td>
        <!-- <td class="text-xs-center">{{ props.item.b_like }}</td> -->
      </tr>
      <tr  v-if="props.item.b_category == 1">
        <td class="text-xs-right">{{ props.item.b_number }}</td>
        <td class="text-xs-left"><span @click="goDetail(props.item.b_number)" class="table-title">{{ props.item.b_title }}</span><span class="table-comments">{{props.item.b_comments|comments}}</span></td>
        <td class="text-xs-center">{{ props.item.b_writer }}</td>
        <td class="text-xs-center ">{{ props.item.b_views }}</td>
        <td class="text-xs-center ">{{ props.item.b_wdate|time}}</td>
        <!-- <td class="text-xs-center">{{ props.item.b_like }}</td> -->
      </tr>
    </template>
  </v-data-table>
</template>

<script>
  import Time from "@/services/Time"

  export default {
    data () {
      return {
        headers:[
          {text:'*', align:'center',sortable:false, width:'100px'},
          {text:'글 제목', align:'center',sortable:false, width:'100px'},
          {text:'작성자', align:'center',sortable:false, width:'100px'},
          {text:'조회수', align:'center',sortable:false, width:'100px'},
          {text:'작성일', align:'center',sortable:false, width:'100px'},
          // {text:'좋아요', align:'center',sortable:false, width:'100px'},
        ]
      }
    },
    components:{
      Time
    },
    props:{
      boardList:{}
    },
    filters:{
      time(v){
        var date = v.split(" ");
        var time = date[1].split(":");

        if(date[0] == Time.getDate()){
          return time[0].padStart(2, '0') + ":" + time[1].padStart(2, '0');
        }

        return date[0];
      },
      comments(v){
        if(v == '0'){
          return "";
        }
        else{
          return " [" + v +"]";
        }
      }
    },
    methods:{
      goDetail(b_number){
        this.$router.push({name:"BoardDetailPage", params:{id:b_number}})
      }
    }
  }
</script>

<style media="screen">
  .notice{
    background:rgb(240, 252, 246);
  }

  .number{
    color:white;
    font-weight:900;
    border-radius:10px;
    border:rgb(82, 245, 166) 1px solid;
    background:rgb(82, 245, 166);
    padding:5px;
    width:50px;
  }

  .table-title:hover{
    cursor:pointer;
  }

  .table-comments{
    color:rgb(0, 215, 6);
  }
</style>
