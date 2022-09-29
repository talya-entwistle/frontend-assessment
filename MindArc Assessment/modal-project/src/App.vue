<template>
  <div id="app">
    <Accordion title="Section 1" content="Testing" />
  </div>
</template>

<script>
import Accordion from './components/Accordion'

export default {
  name: 'App',
  components: { Accordion },
  data() {
    return {
      title: 'test'
    }
  }
}
</script>

<style>
</style>
