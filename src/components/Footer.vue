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
  background: #000;
  height: 64px;
  line-height: 64px;
  text-align: center;
}

.footer > span{
  font-size: 24px;
  font-weight: bold;
  color: #fff;
}

.footer > span:nth-child(2){
  color: #5e7eff;
}
</style>
