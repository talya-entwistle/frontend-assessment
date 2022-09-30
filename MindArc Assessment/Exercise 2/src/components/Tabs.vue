<template>
    <section class="tab__container">
        <div class="tab__sidebar">
            <button class="tab__button"
                v-for="(data, index) in data"
                :key="data.title"
                @click="activeTabIndex = index" id="openTabByDefault">{{ data.title }}</button>
        </div>
        <div class="tab__content" v-for="(data, index) in data"
        :key="data.content"
        @click="activeTabIndex = index">
            <p class="tab__text" v-html="activeContent"></p>
        </div>
      </section>
</template>

<script>
import data from '../assets/data.json'

export default {
  props: ['title', 'content'],
  data() {
    return {
      data,
      activeTabIndex: 0,
    }
  },
  computed: {
    activeContent() {
      return this.data[this.activeTabIndex]?.content;
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
        flex-direction: column;
        border-radius: 10px;
        max-width: 800px;
    }

    .tab__sidebar {
        display: flex;
        flex-shrink: 0;
    }

    .tab__button {
        display: flex;
        justify-content: center;
        padding: 10px;
        border: none;
        width: 100%;
        outline: none;
        cursor: pointer;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;;
        background-color: #b5c3ff;
        color: #ffffff;
        font-family: sans-serif;
        font-size: 18px;
    }
    
    .tab__button.is__active {
        font-weight: bold;
        background-color: #879eff;
        border-right: 4px solid #5d7cff;
    }

    .tab__content {
        font-size: 18px;
        display: none;
        height: 300px;
        color: #ffffff;
        font-family: sans-serif;
    }

    .tab__content.is__active {
        display: block;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        background-color: #879eff;
    }


    .tab__text {
        padding: 40px 60px;  
        margin: 0px;
    }
}
</style>
