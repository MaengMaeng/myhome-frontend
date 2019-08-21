<template>
    <div>
      <footer>
        <div class="footer">
          <span>copyright @ </span>
          <span>My Home Corp</span>
        </div>
      </footer>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {

  },
  computed: {

  }
}
</script>

<style>
.footer{
  background: #f0f0f0;
  height: 64px;
  line-height: 64px;
  text-align: center;
}

.footer > span{
  font-size: 16px;
  font-weight: bold;
  color: #aaa;
}

.footer > span:nth-child(2){
  color: #3db39e;
}
</style>
