import { defineStore } from 'pinia';

export const useUserStoreStore = defineStore('userStore', () => {
    const user = useCurrentUser();

    return { user };
  },
);
