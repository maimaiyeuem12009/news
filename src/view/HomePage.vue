<template>
  <div class="homepage">
    <User :account="account"/>
    <Healine :headline="headline"/>
    <Topic :topic="topic" :topicName="this.account.user.topic"/>
    <Footer/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import 'cropperjs/dist/cropper.css';
import Cropper from 'cropperjs';
import Healine from "../components/Healine";
import Topic from "../components/Topic";
import User from "../components/User";
import Footer from "../components/Footer";

export default {
  components: {Footer, Topic, Healine,User},
  data(){
    return{

    }
  },
  computed: {
    ...mapState({
      account: state => state.account,
      headline: state => state.news.headline,
      topic: state => state.news.topic,
    })
  },
  created () {
    this.getHeadline("us"),
    this.getTopic(this.account.user.topic)

  },
  methods: {
    ...mapActions('news', {
      getHeadline: 'getHeadline',
      getTopic: 'getTopic',
    })

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

