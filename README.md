# TwentyTwenty

A small component to quickly let users see the differences between 2 images. Based on the work I did for ZURB's [TwentyTwenty plugin](http://zurb.com/playground/twentytwenty).

## Installation

```
$ npm install vue-twentytwenty --save
```

## Examples

## Simple

```vue
<template>
  <TwentyTwenty
    before="//placehold.it/600x200/E8117F/FFFFFF"
    after="//placehold.it/600x200/CCCCCC/FFFFFF" />
</template>

<script>
import TwentyTwenty from 'vue-twentytwenty';

export default {
  components: {
    TwentyTwenty
  }
};
</script>
```

## Advanced

```vue
<template>
  <TwentyTwenty
    offset="0.7"
    before="//placehold.it/600x200/E8117F/FFFFFF"
    beforeLabel="BEFORE"
    after="//placehold.it/600x200/CCCCCC/FFFFFF"
    afterLabel="AFTER" />
</template>

<script>
import TwentyTwenty from 'vue-twentytwenty';

export default {
  components: {
    TwentyTwenty
  }
};
</script>
```
