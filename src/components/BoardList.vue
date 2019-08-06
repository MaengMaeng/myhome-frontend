<template>
  <v-data-table
    :headers="headers"
    :items="boardList"
    class="elevation-1"
    hide-actions
  >
    <template v-slot:items="props" >
      <tr @click="goDetail(props.item.b_number)">
        <td class="text-xs-right">{{ props.item.b_number }}</td>
        <td class="text-xs-left"><span style="color:red;" v-if="props.item.b_category == 0">[공지] </span>{{ props.item.b_title }}</td>
        <td class="text-xs-center">{{ props.item.b_writer }}</td>
        <td class="text-xs-center">{{ props.item.b_views }}</td>
        <td class="text-xs-center">{{ props.item.b_like }}</td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        headers:[
          {text:'글 번호', align:'right',sortable:false,value:0},
          {text:'글 제목', align:'center',sortable:false,value:0},
          {text:'작성자', align:'center',sortable:false,value:0},
          {text:'조회수', align:'center',sortable:false,value:0},
          {text:'좋아요', align:'center',sortable:false,value:0},
        ]
      }
    },
    props:{
      boardList:{}
    },
    methods:{
      goDetail(b_number){
        this.$router.push({name:"BoardDetailPage", params:{id:b_number}})
      }
    }
  }
</script>
