<template>
    <div class="person_wrapper">
      <div>
        <span>头像</span>
      </div>
      <div>
        <div>
          <span>姓名: {{name}}</span>
        </div>
        <div>
          <span>学历: 本科</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'PersonInfo',
  data () {
    return {
      name: '刘琪'
    }
  }
}
</script>

<style scoped lang="less">
.person_wrapper{
  width: 100%;
  height: 310px;
  border: 40px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d;
}
</style>
