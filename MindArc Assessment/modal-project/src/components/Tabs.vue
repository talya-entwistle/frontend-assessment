<template>
    <section class="tab__container">
    <div class="tab__background">
        <button v-for="data in data" :key="data.title" class="tab__links">{{ data.title }}</button>
      </div>
      <div id="1" class="tab__content">
        <p>{{ data.content }}</p>
      </div>
    </section>
</template>

<script>
import data from '../assets/data.json'

export default {
  props: ['title', 'content'],
  data() {
    return {
      data: data
    }
  }
}
</script>

<style>
.tab__container {
  display: none;
}

.tab__background {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

.tab__background .tab__links {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
}

.tab__background .tab__links:hover {
  background-color: #ddd;
}

.tab__background .tab__links.active {
  background-color: #ccc;
}

.tab__content {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}

@media (min-width: 769px) {
    .tab__container {
        display: block;
    }
}
</style>
