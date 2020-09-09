<template>
  <div>
    <template>app</template>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      a: 'app',
    };
  },
  mounted() {
    console.log(this.a);
  },
};
</script>

<style>
:root {
  --primary-color: blue;
}
</style>
