<template>
  <div class="l-preview-page">
    <div class="l-preview-page__title">Персональные данные</div>
    <div class="l-preview-page__person-info">
      {{ formatInfo(personInfo.name, personInfo.age) }}
    </div>
    <div class="l-preview-page__kids-title">Дети</div>
    <div class="l-preview-page__kids">
      <div class="kids-item" v-for="child in personChildren" :key="child.id">
        {{ formatInfo(child.name, child.age) }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "LPreviewPage",
  computed: mapGetters({
    personInfo: "personInfo",
    personChildren: "personChildren",
  }),
  methods: {
    formatInfo(name, age) {
      return `${name}, ${age} лет`;
    },
  },
};
</script>

<style lang="scss">
.l-preview-page {
  &__title {
    margin-bottom: 20px;
  }

  &__person-info {
    font-weight: 700;
    margin-bottom: 60px;
  }

  &__kids-title {
    margin-bottom: 20px;
  }

  &__kids {
    .kids-item {
      background: #f1f1f1;
      border-radius: 5px;
      padding: 10px 20px;
      font-weight: 700;
      width: fit-content;
      margin-bottom: 20px;
    }
  }
}
</style>
