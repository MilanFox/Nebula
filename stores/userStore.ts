import { defineStore } from 'pinia';
import { useCurrentUser } from 'vuefire';

export const useUserStore = defineStore('userStore', () => {
  const user = useCurrentUser();
  const loading = ref(true);

  watchEffect(() => { if (user.value !== null) loading.value = false; });

  return { user, loading };
});
