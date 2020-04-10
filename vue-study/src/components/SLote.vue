<template>
  <div>
    <slot></slot>
    <slot name="content1"></slot>
    <slot name='content' :foo='foo'></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foo:'foo'
    }
  }
}
</script>

<style>

</style>