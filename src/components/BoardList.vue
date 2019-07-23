<template>
  <v-data-table
    :items="boardList"
    class="elevation-1"
    hide-actions
    hide-headers
  >
    <template v-slot:items="props">
      <td>{{ props.item.b_number }}</td>
      <td class="text-xs-right">[{{props.item.b_category }}]{{ props.item.b_title }}</td>
      <td class="text-xs-right">{{ props.item.b_writer }}</td>
      <td class="text-xs-right">{{ props.item.b_views }}</td>
      <td class="text-xs-right">{{ props.item.b_like }}</td>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    props:{
      boardList:{}
    }
  }
</script>
