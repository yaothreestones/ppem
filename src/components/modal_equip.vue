<template>
  <div>
      <div class='modal_body'>
          <h2>信息编辑
              <span @click="cancel">关闭</span>
          </h2>
          <main>
              <div class='font'>校验日期</div>
              <div class='input'></div>
              <div class='font'>上岗前培训人数</div>
              <div class='input'></div>
              <div class='font'>在岗培训人数</div>
              <div class='input'></div>
              <div class='button_box'>
                    <button type="button" class='button cancel' @click="cancel">取消</button>
                    <button type="button" class='button sure' @click='sure'>确定</button>
              </div>
          </main>
      </div>
      <div class='gray'></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    sure() {},
    cancel() {
      this.$emit("cancel");
    }
  }
};
</script>

<style scoped>
.modal_body {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 43.28%;
  height: 26vw;
  background-color: #f7f7f7;
  border-radius: 10px;
  z-index: 100;
}
.font {
  height: 1.4vw;
  margin-top: 1vw;
  color: #999;
}
h2 {
  background: url("../assets/modal.png") repeat-x right;
  background-size: auto 100%;
  height: 3.8vw;
  width: 100%;
  border-radius: 10px 10px 0 0;
  text-align: center;
  line-height: 3.8vw;
  text-shadow: 2px 2px 1px #fdfdfd;
  font-weight: 500;
  color: #333333;
}
main {
  width: 75%;
  margin: auto;
  height: 15vw;
  margin-top: 1.6vw;
}
.input {
  height: 2.6vw;
  background: #fff;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
}
.button {
  width: 8.6vw;
  height: 2.6vw;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.cancel {
  border: 1px solid #d6d6d6;
  background: url("../assets/modal_button.png") repeat-x right;
  background-size: auto 100%;
  color: #529ad4;
  text-shadow: 2px 2px 1px #fdfdfd;
}
.sure {
  border: 1px solid #327bb7;
  background: url("../assets/modal_sure.png") repeat-x right;
  background-size: auto 100%;
  color: #fff;
  text-shadow: 2px 2px 1px #529ad4;
}
.button_box {
  margin-top: 2.1vw;
  display: flex;
  justify-content: space-around;
}
.gray {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  min-height: 100vh;
  background: #949596;
  z-index: 99;
  opacity: 0.3;
}
h2 span {
  position: absolute;
  right: 1rem;
  cursor: pointer;
}
</style>
