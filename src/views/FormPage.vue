<template>
  <div class="l-form-page">
    <div class="l-form-page__title">Персональные данные</div>
    <l-input
      class="l-form-page__name"
      placeholder="Имя"
      width="100%"
      v-model="personInfo.name"
    />
    <l-input
      class="l-form-page__age"
      placeholder="Возраст"
      width="100%"
      type="number"
      v-model="personInfo.age"
    />
    <div class="l-form-page__children">
      <div class="children__title">Дети (макс. 5)</div>
      <div class="children__btn" v-if="children.length < 5" @click="addChild">
        <plus-icon />
        Добавить ребенка
      </div>
    </div>
    <l-children-list :children="children" @deleteChild="deleteChild" />
    <div class="l-form-page__save-btn" @click="saveHandler">Сохранить</div>
  </div>
</template>

<script>
import PlusIcon from "../assets/icons/PlusIcon.vue";
import LInput from "../common/Input.vue";
import LChildrenList from "../components/ChildrenList.vue";

import { mapMutations } from "vuex";
import { SET_PERSON_INFO, SET_CHILDREN } from "../store/mutation_types";

import { saveToLocalStorage, getFromLocalStorage } from "../utils/localStorage";

export default {
  name: "LFormPage",
  components: { LInput, LChildrenList, PlusIcon },
  data() {
    return {
      personInfo: {
        name: "",
        age: null,
      },
      children: [],
    };
  },
  computed: {
    personState() {
      return {
        personName: this.personInfo.name,
        personAge: this.personInfo.age,
        children: this.children,
      };
    },
  },
  watch: {
    personState() {
      const personData = {
        personInfo: this.personInfo,
        children: this.children,
      };
      saveToLocalStorage("personState", personData);
    },
  },
  methods: {
    ...mapMutations({
      savePersonInfo: SET_PERSON_INFO,
      saveChildren: SET_CHILDREN,
    }),
    addChild() {
      this.children.push({ id: Math.random(), name: "", age: null });
    },
    deleteChild(id) {
      this.children = this.children.filter((c) => c.id !== id);
    },
    deleteAllEmptyChildren() {
      this.children = this.children.filter((c) => c.name && c.age);
    },
    saveHandler() {
      this.deleteAllEmptyChildren();
      this.savePersonInfo(this.personInfo);
      this.saveChildren(this.children);
    },
  },
  mounted() {
    const personData = getFromLocalStorage("personState");
    if (personData) {
      this.personInfo = personData.personInfo;
      this.children = personData.children || [];
    }
    this.saveHandler();
  },
};
</script>

<style lang="scss">
.l-form-page {
  &__save-btn {
    background-color: #01a7fd;
    border-radius: 100px;
    padding: 10px 20px;
    font-size: 14px;
    line-height: 24px;
    color: #fff;
    display: inline-block;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background-color: #016394;
    }
  }

  &__title {
    margin-bottom: 20px;
    color: #111111;
    font-weight: 500;
  }

  &__children {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;

    .children__title {
      color: #111111;
    }

    .children__btn {
      border: 2px solid #01a7fd;
      box-sizing: border-box;
      border-radius: 100px;
      padding: 10px 20px;
      display: flex;
      align-items: center;
      color: #01a7fd;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      svg {
        margin-right: 8px;
      }

      &:hover {
        background-color: #01a7fd;
        transition: all 0.2s ease-in-out;
        color: #fff;

        svg {
          path {
            fill: #fff;
          }
        }
      }
    }
  }
}
</style>
