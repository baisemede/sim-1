<template>
  <div :class="{animated:isshow,rotateInUpLeft:isshow}" class="box">
    <el-card class="box-card">
      <div slot="header">
        <span class="hitikoto-from">{{ hitikoto.from }}</span>
      </div>
      <div class="hitikoto">{{ hitikoto.hitokoto }}</div>
      <div class="hitikoto-time">{{ time }}</div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hitikoto: {},
      time: "",
      isshow: true
    };
  },
  mounted() {
    const that = this;
    let timer = setTimeout(function f() {
      that.gethitikoto();
      timer = setTimeout(f, 15000);
    }, 1000);
  },
  methods: {
    gethitikoto() {
      this.$http.get("https://international.v1.hitokoto.cn/").then(res => {
        /* console.log("TCL: grthitikoto -> res", res); */
        /* this.toggle(); */
        this.isshow = false;
        setTimeout(() => {
          this.isshow = true;
          this.hitikoto = res.data;
          this.time = this.$dayjs
            .unix(res.data.created_at)
            .format("YYYY-MM-DD");
        }, 300);
      });
    },
    toggle() {
      this.isshow = false;
      setTimeout(() => {
        this.isshow = true;
      }, 300);
    }
  }
};
</script>
<style lang="less" scoped>
.box {
  width: 50%;
}
.box-card {
  width: 480px;
}
.hitikoto-time {
  text-align: right;
  padding-top: 10px;
}
</style>
