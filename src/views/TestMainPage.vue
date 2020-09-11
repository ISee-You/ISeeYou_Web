<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">{{ $store.state.username }}'s main</h1>
      <LoadingSpinner v-if="isLoading"></LoadingSpinner>   
       <ul v-else>
        <router-link to="/student/profile" class="student-detail">
          <i class="ion-md-person"></i>
         </router-link>

      </ul>   
    </div>
  </div>
</template>

<script>
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';

export default {
  components: {
    LoadingSpinner,
  },

};
</script>

<style>

</style>