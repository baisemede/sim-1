<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="server酱" name="cyan">
      <servercyan/>
    </el-tab-pane>
    <el-tab-pane label="时间" name="Day">
      <DayJs/>
    </el-tab-pane>
    <el-tab-pane label="天气" name="weather">
      <Heweather/>
    </el-tab-pane>
    <el-tab-pane label="一言" name="Hitokoto">
      <Hitokoto/>
    </el-tab-pane>
    <el-tab-pane label="中日节假日" name="holiday">
      <Holiday/>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import servercyan from "./servercyan";
import DayJs from "./DayJs";
import Heweather from "./Heweather";
import Hitokoto from "./Hitokoto";
import Holiday from "./Holiday";
export default {
  data() {
    return {
      activeName: "cyan"
    };
  },
  components: {
    servercyan,
    DayJs,
    Heweather,
    Hitokoto,
    Holiday
  }
};
</script>
<style lang="less" scoped>
</style>

