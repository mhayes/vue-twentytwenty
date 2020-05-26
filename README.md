# TwentyTwenty

[![npm](https://img.shields.io/npm/v/vue-twentytwenty.svg)
![npm](https://img.shields.io/npm/dm/vue-twentytwenty.svg)](https://www.npmjs.com/package/vue-twentytwenty)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

A small component to quickly let users see the differences between 2 images. Based on the work I did for ZURB's [TwentyTwenty plugin](http://zurb.com/playground/twentytwenty).

<a href="https://mhayes.github.io/vue-twentytwenty/" target="_blank">Live Demo</a>

## Installation

```
$ npm install vue-twentytwenty --save
```

Or download the latest release using:

  * https://unpkg.com/vue-twentytwenty/dist/vue-twentytwenty.umd.min.js
  * https://unpkg.com/vue-twentytwenty/dist/vue-twentytwenty.css

## Usage

`TwentyTwenty` is a UMD module, which can be used as a module in both CommonJS and AMD modular environments. When in a non-modular environment, `TwentyTwenty` will be registered as a global variable.

### ES6

```js
import 'vue-twentytwenty/dist/vue-twentytwenty.css';
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
  <link rel="stylesheet" href="//unpkg.com/vue-twentytwenty/dist/vue-twentytwenty.css" />
</head>
<body>
  <div id="app">
    <twenty-twenty
      before="//placehold.it/600x200/E8117F/FFFFFF"
      after="//placehold.it/600x200/CCCCCC/FFFFFF" />
  </div>
  <script src="//unpkg.com/vue@2/dist/vue.js"></script> 
  <script src="//unpkg.com/vue-twentytwenty/dist/vue-twentytwenty.umd.min.js"></script> 
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
|afterLabel|When hovering over image what label should show up over after image|false|String|-|
|offset|How far from the left the slider should be on load (between 0 and 1)|false|Number|0.5|
|keyboardStep|How far the slider should be moved on arrow key press (between 0 and 1)|false|Number|0.2|

## Usage

### Simple

```vue
<template>
  <TwentyTwenty
    before="//placehold.it/600x200/E8117F/FFFFFF"
    after="//placehold.it/600x200/CCCCCC/FFFFFF" />
</template>

<script>
import 'vue-twentytwenty/dist/vue-twentytwenty.css';
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
import 'vue-twentytwenty/dist/vue-twentytwenty.css';
import TwentyTwenty from 'vue-twentytwenty';

export default {
  components: {
    TwentyTwenty
  }
};
</script>
```

### Publish

From a clean repository (no pending changes) run the following:

```
yarn version --patch
git push --follow-tags
```
