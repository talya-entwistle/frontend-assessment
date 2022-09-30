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

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (min-width: 769px) {
    #app {
        flex-direction: row;
    }
}

</style>
