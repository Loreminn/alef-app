<template>
  <div class="l-children-list">
    <l-children-item
      v-for="child in children"
      :key="child.id"
      :child="child"
      @deleteChild="deleteHandler"
    />
  </div>
</template>

<script>
import LChildrenItem from "../components/ChildrenItem.vue";

export default {
  name: "LChildrenList",
  components: { LChildrenItem },
  props: {
    children: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
  },
  methods: {
    deleteHandler(id) {
      this.$emit("deleteChild", id);
    },
  },
};
</script>

<style lang="scss">
.l-children-list {
  margin-top: 10px;
}
</style>
