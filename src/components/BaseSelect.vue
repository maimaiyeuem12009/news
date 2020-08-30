<template>
  <div class="select">
    <label v-if="label" class="">{{label}}</label>
    <select class=""
            :value="value" @change="updateEvent" v-bind="$attrs">
      <div class="select-button"></div>
      <option v-for="option in options" :selected="option === value" :value="option" :key="option">
        {{option}}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "BaseSelect",
  inheritAttrs: false,
  props: {
    value: [String,Number],
    label: String,
    options: {
      type: Array,
      required: true
    }
  },
  methods:{
    updateEvent(event){
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style scoped lang="scss">

.select{
  font-size: 25px;
  display: flex;
  flex-direction: column;
  select{
    margin-top: 5px;
    border: 3px solid black;
    height: 50px;
    font-size: 30px;
    padding-left: 20px;
    position: relative;

    option{
      border: none;
      height: 50px;
      font-size: 30px;
    }
  }

  margin-bottom: 25px;
}
</style>
