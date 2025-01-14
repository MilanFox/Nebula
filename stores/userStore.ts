import { defineStore } from 'pinia';
import { useCurrentUser } from 'vuefire';

export const useUserStore = defineStore('userStore', () => {
    const user = useCurrentUser();

    return { user };
  },
);
