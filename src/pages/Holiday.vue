<template>
  <div class="holiday">
    <div class="search">
      <div class="search-country">
        <el-select v-model="country" placeholder="请选择地区">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="search-year">
        <el-date-picker v-model="modelyear" type="year" placeholder="选择年" @change="getyear"></el-date-picker>
      </div>

      <div>
        <el-button type="primary" @click="searchholiday">查询</el-button>
      </div>
    </div>
    <div class="card-wrap">
      <el-card class="box-card" v-for="(item,index) in  holidaylist" :key="index" shadow="hover">
        <div slot="header">
          <span>{{ item.name }}</span>
        </div>
        <div>{{ item.description || " no description" }}</div>
        <div class="dateiso">{{ item.date.iso }}</div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: "5767da9bc3ab4cf613786e78b597db30e867119f",
      country: "CN",
      year: "",
      modelyear: "",
      options: [
        {
          value: "CN",
          label: "中国"
        },
        {
          value: "JP",
          label: "日本"
        }
      ],
      holidaylist: []
    };
  },
  mounted() {},
  methods: {
    searchholiday() {
      this.getcnholiday();
    },
    getyear(year) {
      this.year = this.$dayjs(year).format("YYYY");
    },
    getcnholiday() {
      this.$http
        .get(
          `https://calendarific.com/api/v2/holidays?&api_key=${
            this.key
          }&country=${this.country}&year=${this.year}`
        )
        .then(res => {
          console.log(res);
          if (!res.data.meta.error_type) {
            this.holidaylist = res.data.response.holidays;
            console.log(this.holidaylist);
          } else {
            this.$message.error("查询失败");
          }
        });
    }
  }
};
</script>

<style lang="less" scoped>
.search {
  display: flex;
  .search-year {
    margin: 0 10px;
  }
}
.card-wrap {
  display: flex;
  flex-wrap: wrap;
  .box-card {
    margin: 12px 18px 12px 0;
    cursor: pointer;
  }
  .dateiso {
    text-align: right;
    margin-top: 15px;
  }
}
</style>
