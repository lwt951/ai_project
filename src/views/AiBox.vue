<template>
  <transition>
    <div class="wrapper" v-if="isGenerateShow">
      <el-col class="input-box">
        <h3>What do you want to make?</h3>
        <el-input
          placeholder="Type your message here..."
          v-model="msg"
          @keyup="handleGenerate"
        >
          <template #append>
            <el-button @click="handleGenerate" :loading="generateLoading">
              Generate
            </el-button>
          </template>
        </el-input>

        <transition>
          <div v-show="fackMsg">
            <div class="chat-box bot fack">
              Leave sytem? Sounds interesting! Let me come up with a few
              ideas...
            </div>
            <div class="chat-box bot fack">
              Here's an outline for you. What do you think?
            </div>
          </div>
        </transition>
        <transition>
          <el-card class="chat-card" v-show="isChatCardShow">
            <template #header>
              <div>
                <span class="title"
                  >You can edit this outline, or continue as is:
                </span>
              </div>
            </template>
            <div class="content">
              <el-input
                v-model="fackAnswer"
                :autosize="{ minRows: 5 }"
                type="textarea"
                resize="none"
              />
            </div>
            <div class="button-area">
              <el-button icon="Refresh" type="warning">Try again</el-button>
              <el-button icon="Select" color="#626aef" @click="demo"
                >Continue</el-button
              >
            </div>
          </el-card>
        </transition>
      </el-col>
    </div>
  </transition>
  <div>
    <el-tooltip content="AI is here !">
      <el-button
        class="ai-btn"
        :type="aiBtnType"
        circle
        size="large"
        :icon="isAiBoxShow ? 'Close' : 'ChatLineRound'"
        @click="toggleAiBox"
      ></el-button>
    </el-tooltip>

    <transition>
      <section class="chatbox-popup" v-show="isAiBoxShow">
        <header class="chatbox-popup-header">
          <div style="flex: 3">
            <el-icon class="chatbox-popup-icon" :size="60"><Avatar /></el-icon>
          </div>
          <div style="flex: 8">
            <h1 style="margin-bottom: 0.5rem">Website Builder</h1>
            <span>Chat A.I.</span>
          </div>
        </header>
        <ul class="chatbox-popup-main">
          <li
            class="chat-box"
            :class="{ bot: item.isBot }"
            :key="index"
            v-for="(item, index) in chatList"
          >
            {{ item.content }}
            <span class="time-stamp" :class="{ done: item.isDone }">{{
              item.time
            }}</span>
          </li>
        </ul>
        <footer class="chatbox-popup-footer">
          <el-input
            suffix-icon="Promotion"
            v-model="msg"
            placeholder="Type your message here..."
            @keyup="handleInput"
          />
        </footer>
      </section>
    </transition>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const isAiBoxShow = ref(false);
const isGenerateShow = ref(true);
const isChatCardShow = ref(false);
const generateLoading = ref(false);
const fackMsg = ref(false);
const aiBtnType = ref('primary');
const msg = ref('');

const fackAnswer = ref(`◆ A list of time sheet
◆ A form about leave apply
◆ A list of leave record
◆ Location management`);
const chatList = ref([
  {
    content: `I make things simple and smart, Ask me anything.`,
    isBot: true,
    isDone: true,
    time: getChatTime()
  }
]);

function toggleAiBox() {
  isAiBoxShow.value = !isAiBoxShow.value;
  if (isAiBoxShow.value) {
    aiBtnType.value = 'danger';
  } else {
    aiBtnType.value = 'primary';
  }
}
function handleInput(e) {
  if (e.key === 'Enter' || e.type === 'click') {
    const newChat = {};
    newChat.content = msg.value.trim();
    newChat.isBot = false;
    newChat.time = getChatTime();
    chatList.value.push(newChat);
    msg.value = '';
    isAiBoxShow.value = true;
    demo();
  }
}
function getChatTime() {
  const time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  hour = hour < 10 ? `0${hour}` : `${hour}`;
  min = min < 10 ? `0${min}` : `${min}`;
  return `${hour}:${min}`;
}
function handleGenerate(e) {
  if (e.key === 'Enter' || e.type === 'click') {
    generateLoading.value = true;
    const newChat = {};
    newChat.content = msg.value.trim();
    newChat.isBot = false;
    newChat.time = getChatTime();
    chatList.value.push(newChat);
    setTimeout(() => {
      fackMsg.value = true;
    }, 1000);
    setTimeout(() => {
      isAiBoxShow.value = true;
      isChatCardShow.value = true;
      generateLoading.value = false;
    }, 4000);
  }
}
function demo() {
  if (window.x) {
    setTimeout(() => {
      window
        .$(
          `<div class="form-group p-1" style="width: 50%;"><label for="input-31169" class="form-label">Agent</label><input id="input-31169" class="form-control"></div>`
        )
        .insertBefore('.submit-btn');
      const answer = {};
      answer.content = "Ok, it's done! set a agent column in the apply form.";
      answer.isBot = true;
      answer.time = getChatTime();
      chatList.value.push(answer);
      document.querySelectorAll('.time-stamp').forEach((el) => {
        el.classList.add('done');
      });
    }, 2000);
    return;
  }
  msg.value = '';
  const answer = {};
  answer.content = "Ok, it's done! Take a look.";
  answer.isBot = true;
  answer.time = getChatTime();
  chatList.value.push(answer);
  document.querySelectorAll('.time-stamp').forEach((el) => {
    el.classList.add('done');
  });
  location.href = '#/preview';
  document.querySelector('.wrapper').style.display = 'none';
  window.x = true;
}
</script>
<style scoped>
.ai-btn {
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  z-index: 5;
  min-width: 60px;
  min-height: 60px;
  font-size: 40px;
}
.chatbox-popup {
  border-radius: 1rem;
  z-index: 10;
  display: flex;
  position: absolute;
  box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.2);
  flex-direction: column;
  bottom: 100px;
  right: 16px;
  width: 477px;
  height: auto;
  background-color: #fff;
  border-radius: 0.25rem;
  animation: op infinite;
}
.chatbox-popup .chatbox-popup-header {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: 16px;
  color: #fff;
  background-color: #242f42;
  align-items: center;
  justify-content: space-around;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}
.chatbox-popup .chatbox-popup-header .chatbox-popup-icon {
  margin-top: -32px;
  background-color: #409eff;
  border: 10px solid transparent;
  border-radius: 50%;
}
.chatbox-popup .chatbox-popup-main {
  box-sizing: border-box;
  width: 100%;
  padding: calc(2 * 16px) 16px;
  line-height: calc(16px + 16px / 2);
  color: #888;
  text-align: center;
  overflow: auto;
  max-height: 66vh;
  min-height: 30vh;
}
.chatbox-popup .chatbox-popup-footer {
  box-sizing: border-box;
  width: 100%;
  padding: 16px;
  border-top: 1px solid #ddd;
  align-items: center;
  justify-content: space-around;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
}

.chatbox-panel .chatbo .chatbox-popup-header h1,
.chatbox-panel__header h1 {
  color: #38cae1;
}
.chat-box {
  background: #ecf1f8;
  width: 50%;
  float: right;
  border-radius: 15px;
  border-top-right-radius: 0px;
  padding: 1rem;
  margin: 0.8rem;
  text-align: left;
  clear: both;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  position: relative;
}
.content-box {
  word-wrap: break-word;
  letter-spacing: 0.06rem;
}
.chat-box.bot {
  background: #409eff;
  color: #fff;
  float: left;
  border-top-right-radius: 15px;
  border-top-left-radius: 0px;
}
.chat-box.fack {
  background: #244c75;
  font-weight: 500;
}
.time-stamp {
  color: #4a4a4a;
  position: absolute;
  right: 0;
  font-size: 0.8rem;
  bottom: -1.5rem;
}
.time-stamp::before {
  content: '';
  position: absolute;
  top: 0.4rem;
  left: -7.25rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 10px;
  border: 2px solid #4fa464;
  border-top-color: #ffffff;
  animation: loading 2s linear infinite;
}
.time-stamp::after {
  content: 'processing . . .';
  position: absolute;
  left: -6rem;
  color: #4fa464;
}
.time-stamp.done::before {
  left: -1rem;
  top: 0rem;
  content: ' ✔ ';
  color: #69cb64;
  animation: none;
  border: none;
}
.time-stamp.done::after {
  content: '';
}
.bot .time-stamp::before,
.bot .time-stamp::after {
  content: none;
}
.send-btn {
  cursor: pointer;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #e239dc, #285a9d, #e239dc, #285a9d);
  position: fixed;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 999;
  top: 0;
  left: 0;
  background-size: 400% 400%;
  animation: linear 20s infinite ease-in-out;
}
.input-box {
  width: 600px;
  position: absolute;
  top: 20%;
}
.input-box .el-input {
  height: 3rem;
  font-size: 1.2rem;
}
.input-box .el-input .el-button {
  height: 100%;
  display: flex;
  background: #323137;
  color: #ffffffd4;
  box-shadow: 0 1px 0 0 #323137 inset, 0 -1px 0 0 #323137 inset,
    -1px 0 0 0 #323137 inset;
  border-radius: 0.14rem;
}
.input-box h3 {
  font-size: 2.5rem;
  width: 100%;
  color: #fdfdfd85;
  margin-bottom: 1rem;
}
.chat-card {
  margin-top: 0.5rem;
  float: left;
  width: 100%;
}
.chat-card .title {
  font-weight: 600;
  color: darkslateblue;
}
.el-textarea {
  font-size: 1.5rem;
  max-height: 250px;
}
.button-area {
  margin-top: 1rem;
  text-align: right;
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes linear {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>
