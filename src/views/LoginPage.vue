<template>
  <div>
      <div class="contents">
            <div class="form-wrapper form-wrapper-sm">
       <img src="../assets/pay.jpg">
            </div>
       </div>
    <h1 class="page-header">이벤트 인증 페이지</h1>
    <SignupForm></SignupForm>
  </div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';

export default {
  components: {
    SignupForm,
  },
};
</script>

<style></style>
