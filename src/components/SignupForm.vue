<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="email">email: </label>
          <input id="email" type="text" v-model="email" />
           <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && email">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="text" v-model="password" />
        </div>
        <div>
          <label for="name">이름: </label>
          <input id="name" type="text" v-model="name" />
        </div>
        <div>
          <label for="genderType">성별: </label>
           <select v-model="genderType" class="form input">
           <option disabled value="">Please select one</option>
          <option>MALE</option>
          <option>FEMAIL</option>
        </select>
        <span>선택함: {{ genderType }}</span>
        </div>
        <div>
          <label for="handType">주로 사용하는 손: </label>
           <select v-model="handType" class="form input">
           <option disabled value="">Please select one</option>
          <option>LEFT</option>
          <option>RIGHT</option>
        </select>
                <span>선택함: {{ handType }}</span>
        </div>
        <button
          :disabled="!isUsernameValid || !password || !genderType || !handType || !name"
          type="submit"
          class="btn"
        >
          회원가입
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
      email: '',
      password: '',
      name: '',
      genderType: '',
      handType: '',
      // log
      logMessage: '',
    };
  },
   computed: {
    isUsernameValid() {
      return validateEmail(this.email);
    },
  },
  methods: {
    async submitForm() {
      try{
      const userData = {
        email: this.email,
        password: this.password,
        name: this.name,
        genderType: this.genderType,
        handType: this.handType,
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
      this.email = '';
      this.password = '';
      this.name = '';
      this.genderType = '';
      this.handType = '';
    },
  },
};
</script>

<style></style>
