<template>
    <div class="accordion__container" v-for="data in data" :key="data.title">
      <button class="accordion__button" id="openByDefault">{{ data.title }}</button>
      <div class="accordion__content">
          <p v-html="data.content"></p>
      </div>
  </div>
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

<style >
.accordion__button {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    transition: 0.4s;
  }

  .accordion_button:hover, .active {
    background-color: #ccc;
  }

  .accordion__content {
    padding: 0 18px;
    background-color: white;
    display: none;
    overflow: hidden;
  }

  .accordion__content.show {
    display: block;
  }

  @media (min-width: 769px) {
    .accordion__container {
        display: none;
    }
}
</style>
