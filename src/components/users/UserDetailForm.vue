<template>
  <li>
    <div class="post-title">
      id: {{ userDetail.id }}
    </div>

  </li>
</template>

<script>

export default {
  props: {
    userDetail: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
