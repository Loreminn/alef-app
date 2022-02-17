<template>
  <div class="l-input-block">
    <label for="l-input" class="l-input-block__label">{{ placeholder }}</label>
    <input
      id="l-input"
      :style="{ width: width }"
      :type="type"
      @input="onInput"
      :value="value"
    />
  </div>
</template>

<script>
export default {
  name: "LInput",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "100px",
    },
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: [String, Number],
      default: null,
    },
  },
  methods: {
    onInput(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style lang="scss">
.l-input-block {
  position: relative;
  margin-bottom: 10px;

  #l-input {
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    outline: none;
    font-size: 14px;
    line-height: 24px;
    font-family: "Montserrat", sans-serif;
    padding: 26px 16px 6px 16px;
  }

  &__label {
    position: absolute;
    top: 8px;
    left: 16px;
    font-size: 13px;
    line-height: 16px;
    color: #1111117a;
  }
}
</style>
