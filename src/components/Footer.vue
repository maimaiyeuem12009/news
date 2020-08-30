<template>
  <div class="footer">
    <a class="social-link" href="https://www.instagram.com/the_realnam/" target="_blank" rel="noopener noreferrer">Instagram</a>
    <a class="social-link" href="https://twitter.com/NamNguy14962134" target="_blank" rel="noopener noreferrer">Twitter</a>
    <div>
      Make by Nam Nguyen aka <a href="http://therealnam.com/#/" target="_blank" rel="noopener noreferrer">TheRealNam</a>
    </div>

  </div>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped lang="scss">
.footer{
  padding-bottom: 40px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  font-weight: 400;

  font-size: 25px;

  .social-link{
    padding-left: 30px;
    padding-right: 30px;
  }
  div{
    padding-left: 100px;
  }
}

</style>
