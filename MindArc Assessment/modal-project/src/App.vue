<template>
  <div id="app">
    <Accordion title="Section 1" content="Testing" />
    <Tabs/>
  </div>
</template>

<script>
import Accordion from './components/Accordion'
import Tabs from './components/Tabs'

export default {
  name: 'App',
  components: { Accordion, Tabs },
  data() {
    return {
      title: 'test'
    }
  }
}
</script>

<style>
</style>
