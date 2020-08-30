<template>
  <div class="user-wrapper">
    <h1>Hi {{account.user.firstName}}!</h1>
    <div class="search-wrapper">
      <div class="search">
        <div class="search-icon"></div>
        <h2>Search</h2>
      </div>
      <div class="date">
        <img src="../assets/tri.svg">
        <h3>{{date}}</h3>
      </div>
    </div>
    <router-link to="/login" class="logout">Logout</router-link>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    account: Object
  },
  computed:{
    date : () =>{
      let today = new Date()
      return `${today.getDate()}-${today.getMonth()}.${today.getUTCFullYear()}`
    }
  }
}
</script>

<style scoped lang="scss">
.user-wrapper{
  display: flex;
  flex-direction: row;
  font-size: 35px;
  height: 70px;
  padding-top: 10px;
  padding-bottom: 25px;

  h1{
    padding-top: 5px;
    width: 100px;
    flex-grow: 1;
    border-right: 8px solid;
  }
  .search-wrapper{
    display: flex;
    flex-grow: 3;
    flex-direction: row;

    .search{
      display: flex;
      flex-direction: row;
      width: 300px;
      flex-grow: 3;

      .search-icon{
        margin-left: 15px;
        margin-right: 10px;
        height: 40px;
        width: 40px;
        background-color: black;
        border-radius: 50%;
      }
    }
    .date{
      display: flex;
      flex-grow: 2;
      width: 200px;
      img{
        width: 40px;
        height: 40px;
        margin-left: 15px;
        margin-right: 10px;

      }
    }

  }
  .logout{
    width: 200px;
  }
}

</style>
