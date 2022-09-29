<template>
  <div id="app">
    <Accordion/>
    <Tabs/>
  </div>
</template>

<script>
import Accordion from './components/Accordion'
import Tabs from './components/Tabs'

export default {
  name: 'App',
  components: { Accordion, Tabs },
}
</script>

<style>
</style>
