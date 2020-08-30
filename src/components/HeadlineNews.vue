<template>
  <div class="headline-news">
    <a target="_blank" :href="article.url"></a>
    <div class="headline-news-text">
      <div class="news-overlay"></div>
      <h1>{{article.title}}</h1>
    </div>
    <div class="article_image">
      <img class="image" :src="article.urlToImage">
    </div>
  </div>
</template>

<script>
import Cropper from "cropperjs";

export default {
  name: "HeadlineNews",
  props: {
    article : Object
  },
  methods:{
    cropImg() {
      const image = this.$el.querySelector('.image');
      console.log(image)
      const cropper = new Cropper(image, {
        autoCrop: true,
        autoCropArea: 1,
        aspectRatio: 500 / 660,
        minCropBoxWidth: 500,
        minCropBoxHeight: 660,
        viewMode: 2,
        ready: function() {
          generatePreview();
        }
      });
    }
  },
  mounted() {
   }
}
</script>

<style scoped lang="scss">
.headline-news{
  font-family: "MoMA";
  width: 23.5vw;
  position: relative;
  overflow: hidden;

  a{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }

  .headline-news-text{

    position: absolute;
    top: 100%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    transition: 0.3s top ease-in;

    h1{
      font-size: 27px;
      font-weight: 400;
    }

    .news-overlay{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-image: linear-gradient(to top, rgba(255,255,255,0.6) , rgba(255,255,255,0.0));
      opacity: 1;
    }
    h1{
      padding: 10px;
      position: relative;
      z-index: 2;
    }
  }

  .article_image{
    width: 100%;
    height: 18vw;

    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  &:hover .headline-news-text{
    top: 0;
  }

}


</style>
