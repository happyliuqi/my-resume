<template>
  <div id="app">
    <!-- 第一行 -->
    <el-row>
      <el-col :xs="24" :sm="24" :md="5" :lg="6" :xl="5" class="part">
        <person-info></person-info>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8" class="part">
        <person-info></person-info>
      </el-col>
      <el-col :xs="24" :sm="24" :md="7" :lg="6" :xl="11" class="part">
        <person-info></person-info>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PersonInfo from '@/components/PersonInfo/PersonInfo'
export default {
  name: 'App',
  components: {
    PersonInfo
  }
}
</script>

<style>
 body{
   background: #011128;
   color: #fff;
 }
#app {
  width: 100%;
}

 .part {
   padding: 20px;
 }
</style>
