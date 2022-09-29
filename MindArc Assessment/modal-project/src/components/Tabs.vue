<template>
<section class="tab__container">
  <div class="wrapper">
    <div class="buttonWrapper">
      <button class="tab-button active" style="border-top-left-radius: 10px;" data-id="home" v-for="data in data" :key="data.title">{{ data.title }}</button>
    </div>
    <div class="contentWrapper">
      <p class="content active" id="1">{{ data.content }}</p>
      <p class="content active" id="2">{{ data.content }}</p>
      <p class="content active" id="3">{{ data.content }}</p>
      <p class="content active" id="4">{{ data.content }}</p>
    </div>
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
.wrapper {
  display: inline-block;
  margin: auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, .1);
}

.buttonWrapper {
  display: flex;
  justify-content: center;
}

button {
  letter-spacing: 3px;
  border: none;
  padding: 10px;
  background-color: #bccbe9;
  color: #232c3d;
  font-size: 18px;
  cursor: pointer;
  transition: 0.5s;
}

button:hover {
  background-color: #d5e3ff;
}

button.active {
  background-color: white;
}

.active {
  background-color: white;
}

p {
  text-align: left;
  padding: 10px;
  color: #000009;
}

.content {
  display: none;
  padding: 10px 20px;
}

.content.active {
  display: block;
}

@media (min-width: 769px) {
    .tab__container {
        display: block;
    }
}
</style>
