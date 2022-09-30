<template>
    <div class="accordion__container" v-for="data in data" :key="data.title">
      <button class="accordion__button" id="openAccordionByDefault">{{ data.title }}</button>
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
      data: data,
    }
  }
}

</script>

<style >

.accordion__container {
    max-width: 400px;
}

.accordion__button {
    background-color: #879eff;
    color: #000000;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
    border-bottom: 4px solid #5d7cff;
    outline: none;
    transition: 0.4s;
    color: #ffffff;
    font-size: 16px;
    font-family: sans-serif;
    width: 400px;
    transition: ease 0.5s;
  }

  .accordion__content {
    padding: 20px 30px;
    background-color: #b5c3ff;
    display: none;
    overflow: hidden;
    transition: 2s ease-in;
    color: #ffffff;
    font-size: 16px;
    font-family: sans-serif;
  }

  @media (min-width: 769px) {
    .accordion__container {
        display: none;
    }
}
</style>
