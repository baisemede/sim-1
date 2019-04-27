<template>
  <div class="hello">你好呀</div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      title: "",
      desp: ""
    };
  },
  methods: {
    wachat() {
      this.$http
        .get(
          "https://sc.ftqq.com/SCU50021T8f24b6a3edb1d632cbfb265b1fb62a705cc446a5c78a2.send",
          {
            text: this.title,
            desp: this.desp
          }
        )
        .then(res => {
          console.log("TCL: wachat -> res", res);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
