<template>
  <div class="twentytwenty-container"
    v-bind:style="containerStyle"
    v-on:touchstart="startSlide"
    v-on:mousedown="startSlide">
    <img :src="after" alt="after"
      v-on:mousedown.prevent
      v-on:load="setDimensions" />
    <img :src="before" alt="before"
      v-on:mousedown.prevent
      v-bind:style="beforeImgStyle" />
    <div class="twentytwenty-overlay">
      <div v-if="beforeLabel" class="twentytwenty-before-label">{{beforeLabel}}</div>
      <div v-if="afterLabel" class="twentytwenty-after-label">{{afterLabel}}</div>
    </div>
    <div class="twentytwenty-handle"
      v-bind:style="handleStyle">
        <div class="twentytwenty-arrow-left"></div>
        <div class="twentytwenty-arrow-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgOffset: null,
      slideOffset: this.offset,
      sliding: false,
      containerStyle: {}
    }
  },

  props: {
    before: {
      type: String,
      required: true
    },
    beforeLabel: {
      type: String
    },
    after: {
      type: String,
      required: true
    },
    afterLabel: {
      type: String
    },
    offset: {
      type: [String, Number],
      default: 0.5,
      validator: (value) => {
        return (value > 0 && value <= 1)
      }
    }
  },

  methods: {
    setDimensions () {
      const img = this.$el.querySelector("img")
      this.imgOffset = img.getBoundingClientRect()
      this.containerStyle = { width: `${this.w}px`, height: `${this.h}px` };
    },

    startSlide (event) {
      this.sliding = true
      this.moveSlide(event)
    },

    moveSlide (event) {
      if (this.sliding) {
        var x = (event.touches ? event.touches[0].pageX : event.pageX) - this.imgOffset.left
        x = (x < 0) ? 0 : ((x > this.w) ? this.w : x)

        this.slideOffset = (x / this.w)
      }
    },

    endSlide () { this.sliding = false },

    resize () {
      this.containerStyle = {};
      this.$nextTick(() => this.setDimensions());
    }
  },

  computed: {
    beforeImgStyle () {
      return { clip: `rect(0, ${this.x}px, ${this.h}px, 0)` }
    },

    handleStyle () {
      const size = 40;
      return {
        width: `${size}px`,
        height: `${size}px`,
        top:  `calc(50% - ${size/2}px)`,
        left: `calc(${this.slideOffset*100}% - ${size/2}px)`
      }
    },

    x () {
      return this.w * this.slideOffset
    },

    w () {
      if (this.imgOffset)
        return this.imgOffset.width
    },

    h () {
      if (this.imgOffset)
        return this.imgOffset.height
    }
  },

  mounted () {
    document.addEventListener("touchmove", this.moveSlide)
    document.addEventListener("touchup", this.endSlide)
    document.addEventListener("mousemove", this.moveSlide)
    document.addEventListener("mouseup", this.endSlide)
    window.addEventListener("resize", this.resize)
  },

  beforeDestroy () {
    document.removeEventListener("touchmove", this.moveSlide)
    document.removeEventListener("touchup", this.endSlide)
    document.removeEventListener("mousemove", this.moveSlide)
    document.removeEventListener("mouseup", this.endSlide)
    window.removeEventListener("resize", this.resize)
  }
}
</script>

<style>
.twentytwenty-container {
  position: relative;
  overflow: hidden;
}
.twentytwenty-container img {
  max-width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  user-select: none;
  z-index: 20;
}
.twentytwenty-container .twentytwenty-overlay {
  z-index: 25;
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  background: transparent;
  transition-property: background;
  transition-duration: 0.5s;
}
.twentytwenty-container .twentytwenty-overlay .twentytwenty-before-label,
.twentytwenty-container .twentytwenty-overlay .twentytwenty-after-label {
  user-select: none;
  position: absolute;
  font-size: 0.8em;
  top: calc(50% - 0.4em - 5px);
  padding: 10px;
  background: rgba(255, 255, 255, 0);
  color: rgba(255, 255, 255, 0);
  transition-property: all;
  transition-duration: 0.5s;
}
.twentytwenty-container .twentytwenty-overlay .twentytwenty-before-label {
  left: 0;
}
.twentytwenty-container .twentytwenty-overlay .twentytwenty-after-label {
  right: 0;
}
.twentytwenty-container .twentytwenty-overlay:hover {
  background: rgba(0, 0, 0, 0.5);
}
.twentytwenty-container .twentytwenty-overlay:hover .twentytwenty-before-label,
.twentytwenty-container .twentytwenty-overlay:hover .twentytwenty-after-label {
  background: rgba(255, 255, 255, 0.4);
  color: white;
}
.twentytwenty-container .twentytwenty-handle {
  cursor: move;
  z-index: 30;
  position: absolute;
  background: none;
  border: 4px solid white;
  border-radius: 50px;
  margin-left: -4px;
  margin-top: -4px;
  user-select: none;
}
.twentytwenty-container .twentytwenty-handle:before, .twentytwenty-container .twentytwenty-handle:after {
  content: "";
  border: 2px solid white;
  height: 9999px;
  position: absolute;
  left: calc(50% - 2px);
}
.twentytwenty-container .twentytwenty-handle:before {
  top: 40px;
}
.twentytwenty-container .twentytwenty-handle:after {
  bottom: 40px;
}
.twentytwenty-container .twentytwenty-arrow-right,
.twentytwenty-container .twentytwenty-arrow-left {
  user-select: none;
  position: relative;
  width: 0;
  height: 0;
}
.twentytwenty-container .twentytwenty-arrow-right {
  bottom: 10px;
  left: 23px;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid white;
}
.twentytwenty-container .twentytwenty-arrow-left {
  top: 10px;
  left: 7px;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid white;
}
</style>
