# TwentyTwenty

A small component to quickly let users see the differences between 2 images. Based on the work I did for ZURB's [TwentyTwenty plugin](http://zurb.com/playground/twentytwenty).

## Installation

```
$ npm install vue-twentytwenty --save
```

## Usage

`vue-twentytwenty` is a UMD module, which can be used as a module in both CommonJS and AMD modular environments. When in a non-modular environment, `TwentyTwenty` will be registered as a global variable.

### ES6

```js
import TwentyTwenty from 'vue-twentytwenty';

export default {
  // ...
  components: {
    TwentyTwenty
  }
  // ...
};
```

It can then be used like so:

```html
<TwentyTwenty
  before="//placehold.it/600x200/E8117F/FFFFFF"
  after="//placehold.it/600x200/CCCCCC/FFFFFF" />
```

### CommonJS

```js
var Vue = require('vue')
var TwentyTwenty = require('vue-twentytwenty')

var YourComponent = Vue.extend({
  // ...
  components: {
    'twentytwenty': TwentyTwenty
  },
  // ...
})
```

### Browser

```html
<!doctype html>
<html>
<head>
  <link rel="stylesheet" href="path/to/vue-twentytwenty/dist/vue-twentytwenty.css" />
</head>
<body>
  <div id="app">
    <TwentyTwenty
      before="//placehold.it/600x200/E8117F/FFFFFF"
      after="//placehold.it/600x200/CCCCCC/FFFFFF" />
  </div>
  <script src="path/to/vue/vue.js"></script>
  <script src="path/to/vue-twentytwenty/dist/vue-twentytwenty.js"></script>
  <script>
  new Vue({
    el: '#app'
  })
  </script>
</body>
</html>
```

## Props
|Props|Description|Required|Type|Default|
|-----|-----------|--------|----|-------|
|before|URL of before image|true|String|-|
|beforeLabel|When hovering over image what label should show up over before image|false|String|-|
|after|URL of after image|true|String|-|
|afterLabel|When hovering over image what label should show up over after image|
|offset|How far from the left the slider should be on load (between 0 and 1)|false|Number|0.5|

## Usage

### Simple

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

### Advanced

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
