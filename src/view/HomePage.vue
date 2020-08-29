<template>
  <div>
    <h1>Hi {{account.user.firstName}}!</h1>
    <p>You're logged in with Vue + Vuex & JWT!!</p>
    <div v-if="headline.loading">
      <h1>loading</h1>
    </div>
    <div v-if="headline.articles" class="headline">
      <div v-for="article in headline.articles.slice(0,5)">
        <h1>{{article.title}}</h1>
        <p>{{article.description}}</p>
        <div class="article_image">
          <img class="image" :src="article.urlToImage">
        </div>
      </div>
    </div>
    <div v-if="topic.loading">
      <h1>loading</h1>
    </div>
    <div v-if="topic.articles" class="headline">
      <div v-for="article in topic.articles.slice(0,5)">
        <h1>{{article.title}}</h1>
        <p>{{article.description}}</p>
        <div class="article_image">
          <img class="image" :src="article.urlToImage">
        </div>
      </div>
    </div>

    <p>
      <router-link to="/login">Logout</router-link>
    </p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import 'cropperjs/dist/cropper.css';
import Cropper from 'cropperjs';

export default {
  computed: {
    ...mapState({
      account: state => state.account,
      headline: state => state.news.headline,
      topic: state => state.news.topic,
    })
  },
  created () {
    this.getHeadline("us"),
    this.getTopic("apple")

  },
  methods: {
    ...mapActions('news', {
      getHeadline: 'getHeadline',
      getTopic: 'getTopic',
    }),
    cropImg() {
      const image = document.querySelectorAll('.image');
      console.log(image)
      const cropper = new Cropper(image, {
        aspectRatio: 16 / 9,
        crop(event) {
          console.log(event.detail.x);
          console.log(event.detail.y);
          console.log(event.detail.width);
          console.log(event.detail.height);
          console.log(event.detail.rotate);
          console.log(event.detail.scaleX);
          console.log(event.detail.scaleY);
        },
      });
    }
  }
};
</script>
<style scoped>
img {
  display: block;

  /* This rule is very important, please don't ignore this */
  max-width: 100%;
}
.headline{
  display: flex;
  flex-direction: row;
}

</style>

