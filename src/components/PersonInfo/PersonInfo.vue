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

</style>
