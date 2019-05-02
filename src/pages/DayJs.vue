<template>
  <div>{{time}}</div>
</template>
<script>
export default {
  data() {
    return {
      currenttime: ""
    };
  },
  mounted() {
    const that = this;
    let timer = setTimeout(function f() {
      that.currenttime = that.$dayjs();
      timer = setTimeout(f, 1000);
    }, 1000);
  },
  computed: {
    time() {
      return this.currenttime;
    }
  }
};
</script>
<style lang="less" scoped>
</style>
