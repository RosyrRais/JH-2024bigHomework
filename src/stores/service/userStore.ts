import { defineStore } from "pinia";
import { ref } from "vue";

const useUserStore = defineStore("login", () => {
    const loginSession = ref(false);
    const setLogin = (loginNewSession: boolean) => {
        loginSession.value = loginNewSession;
    };

    return{
        setLogin,
        loginSession
    };
},{ persist: true });

export default useUserStore;