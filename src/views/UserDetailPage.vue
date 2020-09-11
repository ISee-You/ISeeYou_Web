<template>
  <div>

   <div class="main list-container contents">
        <h1 class="page-header"> 프로필</h1>
      <li  class="list-container">
        <div class="post-title">
         Id:  {{ id }}
        </div>
        <div class="post-title">
         이메일: {{ email }}
        </div>
        <div class="post-title">
         이름: {{ name }}
        </div>
        <div class="post-title">
         성별: {{ genderType }}
        </div>
        <div class="post-title">
         주로 사용하는 손: {{ handType }}
        </div>
      </li>
     <router-link to="/main" class="back-main">
      <i class="ion-md-arrow-back"></i>
     </router-link>
     
   </div>
  </div>
  
</template>

<script>

import { fetchUsers } from '@/api/users';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';

export default {
 components: {
    LoadingSpinner,
  },
    data(){
        return{
          id: '',
          email: '',
          name: '',
          genderType: '',
          handType: '',
          isLoading: false,

        };
    },
    methods: {
        async fetchData() {

            this.isLoading = true;
            const {data}= await fetchUsers(this.$store.state.id);
            this.isLoading = false;
            this.id = data.id;
            this.email = data.email;
            this.name = data.name;
            this.genderType = data.genderType;
            this.handType = data.handType;         

        },
    },
     async created(){   
        this.fetchData();
    },
};
</script>

<style>

</style>