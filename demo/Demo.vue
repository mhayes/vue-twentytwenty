<template>
  <div class="container">
    <h2>Demo</h2>
    <TwentyTwenty
      offset="0.7"
      before="//placehold.it/600x200/E8117F/FFFFFF"
      beforeLabel="before"
      after="//placehold.it/600x200/CCCCCC/FFFFFF"
      afterLabel="after" />
  </div>
</template>

<script>
  import TwentyTwenty from '../src/TwentyTwenty.vue';

  export default {
    components: {
      TwentyTwenty
    }
  }
</script>

<style>
  .container {
    margin: 0 auto;
    width: 80%;
    font-family: sans-serif;
  }
  .container img {
    max-width: 100%;
  }
</style>
