<template>
  <div class="topic_article_wrapper">
    <a target="_blank" :href="article.url"></a>
    <h2 class="author">{{article.author}}</h2>
    <div class="topic_article_image">
      <img class="image" :src="article.urlToImage">
    </div>
    <div class="time-wrapper">
      <img src="../assets/tri.svg">
      <h3 class="time">{{article.publishedAt.toString().slice(8,10)}}-{{article.publishedAt.toString().slice(5,7)}}.{{article.publishedAt.toString().slice(2,4)}}</h3>
    </div>
    <div class="topic_article_text">
      <h2>{{article.title}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopicNews",
  props: {
    article : Object
  },
  computed: {
    lmao: () =>   {return this.article}
  }
}
</script>

<style scoped lang="scss">
.topic_article_wrapper{
  position: relative;

  a{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;

  }
  .author{
    font-weight: 300;
    font-size: 18px;
    padding-top: 10px;
    padding-bottom: 20px;
    border-top: 1px solid black;
  }
  .topic_article_image{
    position: relative;
    padding-bottom: 100%;

    .image{
      position: absolute;
      top:0;
      left:0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .time-wrapper{
    padding-top: 20px;
    display: flex;
    img{
      height: 30px;
    }

    .time {
      padding-left: 20px;
      line-height: 30px;
      font-weight: 500;
      font-size: 35px;
    }
  }
  .topic_article_text{
    margin-top: 20px;
    h2{
      font-weight: 400;
      font-size: 30px;
    }
  }

}


</style>
