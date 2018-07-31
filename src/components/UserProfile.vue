<template>
  <div class="user-profile">
    <p>{{ $route.params.name }}</p>
    <ul>
      <li>Email: {{ user.email }}</li>
      <li>Phone: {{ user.phone }}</li>
      <li>Website: {{ user.website }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'user-profile',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {

  }
}
</script>


<style scoped>

</style>