<template>
  <ul>
    <li v-for="i in 10" :key="i">
      <div class="container">
        <img v-lazy="'http://placeimg.com/320/240/animals?'+Math.random()" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import "./lazy-load";

export default {
  methods: {
    // Math,
  },
};
</script>

<style>
.container {
  height: 500px;
}
</style>
