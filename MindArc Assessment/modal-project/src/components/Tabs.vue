<template>
    <section class="tab__container">
        <div class="tab__sidebar">
            <button class="tab__button" v-for="data in data" :key="data.title">{{ data.title }}</button>
        </div>
        <div class="tab__content" v-for="data in data" :key="data.content">
                <p v-html="data.content"></p>
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

@media (min-width: 769px) {
    .tab__container {
        display: flex;
        border: 1px solid #d2d2d2;
    }

    .tab__sidebar {
        flex-direction: row;
        width: 125px;
        flex-shrink: 0;
        background: #cccccc;
    }

    .tab__button {
        display: block;
        padding: 10px;
        background: #eeeeee;
        border: none;
        width: 100%;
        outline: none;
        cursor: pointer;
    }

    .tab__button:active {
        background: #dddddd;
    }

    .tab__button:not(:last-of-type) {
        border-bottom: 1px solid #cccccc;
    }

    .tab__button.is__active {
        font-weight: bold;
        border-right: 2px solid #009879;
        background: #dddddd;
    }

    .tab__content {
        padding: 20px;
        font-size: 18px;
        display: none;
    }

    .tab__content.is__active {
        display: block;
    }
}
</style>
