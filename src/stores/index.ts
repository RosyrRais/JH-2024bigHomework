import { defineStore } from "pinia";
import useUserStore from "./service/userStore";

export const useMainStore = defineStore("main", () => {
  return {
    useUserStore,
  };
},{ persist: true });