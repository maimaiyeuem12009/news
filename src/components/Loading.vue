<template>
  <div class="loading">
    <div class="loading-text">
      <div id="made">A website made by<br/> Nam Nguyen</div>
      <div class="aka">aka TheRealNam</div>
    </div>
    <div class="loading-cover"></div>
  </div>
</template>

<script>
import gsap from "gsap"
import scrambleText from "../gsap/ScrambleTextPlugin"
export default {
name: "Loading",
  mounted() {
    gsap.registerPlugin(scrambleText)
    const made = document.getElementById("made")
    console.log(made)
    let tl = new gsap.timeline()
    tl.to(made, {duration: 2, scrambleText:"A website made by Nam Nguyen"});
    tl.from(".aka",{duration: 0.7, y : "100", opacity : 0 , ease: "Power2.in"})
    tl.to(".loading-cover", {delay: 0.5,duration: 0.5, left : "0%", ease: "Power2.in"});
    tl.set(".loading-cover",{display:"none"})
    tl.set(".loading-text",{display:"none"})
    tl.to(".loading", {duration: 0.5, top : "-100%", ease: "Power2.in"});

  }
}
</script>

<style scoped lang="scss">

.loading{
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 100;

  .loading-cover {
    position: fixed;
    top: 0px;
    left: -100%;
    width: 100vw;
    height: 100vh;
    background-color: black;
    z-index: 100;
  }
  .loading-text{
    position: fixed;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-family: "MoMA";
    color: white;
    font-size: 50px;
    text-align: center;
    #made{
      margin-bottom: 30px;
      font-size: 70px;
    }
  }
}
</style>
