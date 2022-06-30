<template>
  <div class="relative h-screen bg-[url('/src/assets/images/login/background.svg')] bg-no-repeat bg-cover flex items-center">
    <div 
      class="w-[1200px] h-[700px] bg-white mx-auto rounded-3xl px-[4.31rem] py-14 relative"
      style="box-shadow: 0px 0px 59px 7px rgba(255, 67, 42, 0.3)"
    >
      <img :src="loginImg" alt="插画" width="575" height="540" class="absolute top-[22px] left-[70px] w-[575px] h-[540px]">
      <h1 class="text-right">欢迎登录<br>光大健康在线后台管理系统</h1>
      <div class="ml-auto mr-16 mt-24 w-[21.14rem]">
        <!-- 账号 -->
        <div class="w-full p-2.5 border-b flex items-center space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <input v-model="form.account" type="text" placeholder="请输入您的账号" class="text-lg w-full">
        </div>
        <!-- 密码 -->
        <div class="mt-8 w-full p-2.5 border-b flex items-center space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <input v-model="form.password" type="password" placeholder="请输入您的密码" class="text-lg w-full">
        </div>
        <!-- 忘记密码 -->
        <div class="mt-6 text-right text-lg text-gray-400 cursor-pointer">忘记密码</div>
        <!-- btn-登录 -->
        <div class="mt-12 text-center">
          <button 
            class="w-[20.71rem] h-[3.73rem] bg-primary text-white text-2xl rounded-lg hover:opacity-80 active:opacity-100"
            @click="login"
          >
            登录
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import loginImg from '/src/assets/images/login/illustration.png'

const router = useRouter()

const form = reactive({
  account: '',
  password: ''
})

const login = function() {
  // Message({ text: '恭迎老祖', type: 'success' })
  router.push('/')
}
</script>