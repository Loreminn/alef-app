<template>
  <div class="l-children-item">
    <l-input placeholder="Имя" width="260px" v-model="child.name" />
    <l-input
      placeholder="Возраст"
      width="260px"
      type="number"
      v-model="child.age"
    />
    <div class="l-children-item__delete-btn" @click="handleDelete">Удалить</div>
  </div>
</template>

<script>
import LInput from "../common/Input.vue";

export default {
  name: "LChildrenItem",
  components: { LInput },
  props: {
    child: {
      type: Object,
      required: true,
      default() {
        return {
          id: 0,
          name: "",
          age: null,
        };
      },
    },
  },
  methods: {
    handleDelete() {
      this.$emit("deleteChild", this.child.id);
    },
  },
};
</script>

<style lang="scss">
.l-children-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  input {
    margin-right: 18px;
  }

  &__delete-btn {
    font-size: 14px;
    line-height: 24px;
    color: #01a7fd;
    margin-bottom: 10px;
    cursor: pointer;
  }
}
</style>
