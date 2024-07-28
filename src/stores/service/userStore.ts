import { defineStore } from "pinia";
import { ref } from "vue";

const useUserStore = defineStore("login", () => {
    const loginSession = ref(false);
    const userId = ref<number>(-1);
    const userType = ref<1|2>(1);
    const setUserStates = (id: number, type: 1|2) => {
        loginSession.value = true;
        userId.value = id;
        userType.value = type;
    }

    const userName = ref();
    const setUserName = (name: string) => {
        userName.value = name;
    }

    const resetUserStates = () => {
        loginSession.value = false;
    }

    return{
        loginSession,
        userId,
        userType,
        setUserStates,
        userName,
        setUserName,
        resetUserStates,
    };
},{ persist: true });

export default useUserStore;