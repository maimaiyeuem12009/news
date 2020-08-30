<template>
  <div class="topic-wrapper">
    <div class="topic-title">
      <h1>{{topicName}}</h1>
    </div>
    <div v-if="topic.loading">
      <h1>loading</h1>
    </div>
    <div v-if="topic.articles" class="topic-news-wrapper">
      <div v-for="article in topic.articles.slice(0,5)" class="topic-news">
        <TopicNews :article="article"/>
      </div>
    </div>
  </div>

</template>

<script>
import TopicNews from "./TopicNews";
export default {
  name: "Topic",
  components: {TopicNews},
  props: {
    topic: Object,
    topicName : String,
  },

}

</script>

<style scoped lang="scss">
.topic-wrapper{
  .topic-title{
    margin-top: 20px;
    margin-bottom: 30px;

    h1{
      font-size: 60px;
      font-weight: 300;
      text-transform: capitalize;
    }
  }

  .topic-news-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-left: -20px;

    .topic-news{
      width : 10%;
      flex-grow: 1;
      margin-left: 20px;
    }
  }
}

</style>
