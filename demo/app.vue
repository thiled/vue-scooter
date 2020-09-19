<template>
  <div>
    <template>{{a}}</template>
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
};
</script>

<style>
:root {
  --primary-color: blue;
}
</style>
