<template>
  <div class="wrap">
    <div class="wechatform">
      <el-form
        :label-position="labelPosition"
        :model="wechatmessage"
        :rules="rules"
        ref="wechatmessage"
      >
        <el-form-item class="text-a" label="消息标题" prop="title">
          <el-input v-model="wechatmessage.title"></el-input>
        </el-form-item>
        <el-form-item class="text-a" label="消息内容">
          <el-input
            type="textarea"
            :autosize="{ minRows: 3, maxRows: 8}"
            v-model="wechatmessage.desp"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('wechatmessage')">发送消息</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import auth from "../axios/auth.js";
export default {
  name: "servercyan",
  data() {
    return {
      labelPosition: "top",
      wechatmessage: {
        title: "",
        desp: ""
      },
      //对比和上次的内容是否相同
      title1: "",
      desp1: "",
      rules: {
        title: [
          { required: true, message: "请输入标题", trigger: "blur" }
          /*  { min: 5, message: "长度最小为 3 个字符", trigger: "blur" } */
        ]
      }
    };
  },
  methods: {
    //表单验证
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.wechat();
        } else {
          return false;
        }
      });
    },
    wechat() {
      let { title, desp } = this.wechatmessage;
      if (this.title1 === title && this.desp1 === desp) {
        this.$message.error("请不要发送重复的信息");
      } else {
        this.title1 = title;
        this.desp1 = desp;
        window.open(
          `https://sc.ftqq.com/SCU50021T8f24b6a3edb1d632cbfb265b1fb62a705cc446a5c78a2.send?text=${title}&desp=${desp}`,
          "newwindow",
          "height=100, width=400, top=250, left=600, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no"
        );
        this.$message.success("发送成功");
      }
      this.wechatmessage.title = "";
      this.wechatmessage.desp = "";
    }
  }
};
</script>

<style lang='less' scoped>
.wrap {
  width: 1200px;
  margin: 0 auto;
  /deep/ .el-form-item__label {
    color: #000000;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
  }
  .wechatform {
    width: 55%;
    background-color: #ecf0f1;
    padding: 20px;
  }
}
</style>
