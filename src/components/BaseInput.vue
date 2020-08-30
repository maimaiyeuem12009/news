<template>
  <div class="input">
    <label v-if="label" class="block text-xl mt-2">{{label}}</label>
    <input class=""
           :id="label"
           :value="value"
           v-bind="$attrs"
           @input="updateValue"
    />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  inheritAttrs: false,
  props: {
    value: [String,Number],
    label: String
  },
  methods: {
    updateValue(event){
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
.input{
  font-size: 25px;
  display: flex;
  flex-direction: column;

  input{
    border: none;
    height: 50px;
    border-bottom: 5px solid;
    font-size: 30px;
  }
  margin-bottom: 25px;
}

</style>
