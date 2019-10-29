<template>
  <div class="PDFPage" :style="{backgroundColor:bgColor}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: "#fff"
    }
  }
};
</script>

<style>
.PDFPage {
  margin: 0 auto;
  height: 297mm;
  width: 210mm;
}
</style>