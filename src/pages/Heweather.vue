
<template>
  <div>
    <div class="weather-input">
      <el-input v-model="location" placeholder="请输入查询的城市" @keyup.enter.native="serchweather"/>
      <el-button type="primary" icon="el-icon-search" @click="serchweather">查询</el-button>
    </div>
    <div v-if="isshow && air.length!==0">
      <el-card class="box-card" v-for="(item,index) in HeWeather6" :key="index">
        <div slot="header">
          <span>{{ item.basic.location }}</span>
        </div>
        <div>
          <p class="tmp">{{ item.now.tmp }}°C</p>
          <p class="cond_txt">{{ item.now.cond_txt }}</p>
        </div>
        <div class="footer">
          <p>
            <span v-cloak>空气{{ air.air_now_city.qlty }}</span>
            <span>{{ air.air_now_city.aqi }}</span>
          </p>
          <p>|</p>
          <p>{{ item.now.wind_dir }}</p>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      location: "",
      key: "53fbf95ef29649229bb8d64f41797d77",
      HeWeather6: [],
      air: [],
      isshow: false
    };
  },
  mounted() {},
  methods: {
    serchweather() {
      this.getweather();
    },
    getweather() {
      console.log("TCL: serchweather -> location", this.location);
      this.$http
        .get(
          `https://free-api.heweather.net/s6/weather/now?location=${
            this.location
          }&key=${this.key}`
        )
        .then(res => {
          // eslint-disable-next-line no-console
          console.log("TCL: getweather -> res", res);
          if (res.data.HeWeather6[0].status === "ok") {
            this.HeWeather6 = res.data.HeWeather6;
            this.getair();
          } else {
            this.$message.error("请输入正确的查询地址");
            this.location = "";
          }
        })
        // eslint-disable-next-line no-unused-vars
        .catch(err => {});
    },
    getair() {
      this.$http
        .get(
          `https://free-api.heweather.net/s6/air/now?location=${
            this.location
          }&key=${this.key}`
        )
        .then(res => {
          console.log("TCL: getair -> res", res);
          if (res.data.HeWeather6[0].status === "ok") {
            this.air = res.data.HeWeather6[0];
            this.isshow = true;
            this.location = "";
          } else {
            this.isshow = false;
          }
        })
        .catch(err => {
          console.log("TCL: getair -> err", err);
          /* ; */
        });
    }
  }
};
</script>
<style lang="less" scoped>
[v-cloak] {
  display: none;
}
.weather-input {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.box-card {
  margin-top: 20px;
  width: 250px;
}
.tmp {
  font-size: 18px;
}
.cond_txt {
  padding: 4px 0;
}
.footer {
  display: flex;
  margin-top: 25px;
  justify-content: space-around;
}
</style>
