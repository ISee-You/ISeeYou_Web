<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">{{ $store.state.username }}'s main</h1>
      <LoadingSpinner v-if="isLoading"></LoadingSpinner>   
       <ul v-else>
        <UserDetail></UserDetail>
      </ul>   
    </div>
  </div>
</template>

<script>
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import UserDetail from '@/components/UserDetail.vue';

export default {
  components: {
    UserDetail,
    LoadingSpinner,
  },
  

};
</script>

<style>

</style>