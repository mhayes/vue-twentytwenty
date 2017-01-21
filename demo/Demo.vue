<template>
  <div class="container">
    <h2>Demo 1</h2>
    <TwentyTwenty
      offset="0.7"
      before="//placehold.it/600x200/E8117F/FFFFFF"
      beforeLabel="before"
      after="//placehold.it/600x200/CCCCCC/FFFFFF"
      afterLabel="after" />

    <!-- <h2>Demo 2</h2>
    <TwentyTwenty
      before="http://i2.cdn.turner.com/cnnnext/dam/assets/170120124940-inauguration-crowd-2009-obama-super-169.jpg"
      after="http://i2.cdn.turner.com/cnnnext/dam/assets/170120125040-inauguration-crowd-2017-trump-super-169.jpg" /> -->
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
