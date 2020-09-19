<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="password">이메일: </label>
          <input id="password" type="text" v-model="password" />
        </div>
        <div>
          <label for="name">전화번호: </label>
          <input id="name" type="text" v-model="name" />
        </div>
        <button
          type="submit"
          class="btn"
        >
          인증하기
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { registerUser } from '@/api/auth';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      // form values
      password: '',
      name: '',
      // log
      logMessage: '',
    };
  },
   computed: {
  },
  methods: {
    async submitForm() {
      try{
      const userData = {
        password: this.password,
        name: this.name,
      };
      await registerUser(userData);
      console.log(userData.name);
      this.logMessage = `${userData.name} 님이 가입되었습니다`;
      } catch( error ){
        console.log(error.response.data);
        this.logMessage = error.response.data;
      } finally{
      this.initForm();
      }
    },
    initForm() {
      this.password = '';
      this.name = '';
    },
  },
};
</script>

<style></style>
