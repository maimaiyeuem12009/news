<template>
  <div>
    <div class="headline-title">
      <h1>Headline News</h1>
    </div>
    <div class="headline-wrapper">
      <div v-if="headline.loading">
        <h1>loading</h1>
      </div>
      <div v-if="headline.articles" class="headline">
        <div v-for="article in headline.articles.slice(0,4)">
          <HeadlineNews :article="article"/>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import Cropper from "cropperjs";
import HeadlineNews from "./HeadlineNews";

export default {
  name: "Healine",
  components: {HeadlineNews},
  props: {
    headline: Object
  },
  methods:{

  },
  mounted() {

  }
}
</script>

<style scoped lang="scss">
  .headline-title {
    width: 100%;
    border-top: 5px solid black;
    padding-bottom: 20px;
    font-size: 60px;
    font-weight: 200;

    h1{
      font-weight: 300;
    }
  }
  .headline{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .headline-wrapper{
    height: 20vw;
  }


</style>
