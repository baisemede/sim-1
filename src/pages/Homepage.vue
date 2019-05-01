<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="server酱" name="cyan">
      <servercyan/>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import servercyan from "./servercyan";
export default {
  data() {
    return {
      activeName:"cyan"
    }
  },
  components: {
    servercyan
  }
};
</script>
<style lang="less" scoped>
</style>

