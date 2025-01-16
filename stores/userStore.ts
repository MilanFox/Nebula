import { defineStore } from 'pinia';
import { useCurrentUser } from 'vuefire';

export const useUserStore = defineStore('userStore', () => {
  const user = useCurrentUser();
  const loading = ref(true);

  watchEffect(() => { if (user.value !== null) loading.value = false; });

  const hashUUID = (input: string) => {
    return input
      .split('')
      .map(char => char.charCodeAt(0))
      .reduce((hash, code) => (hash * 31 + code) >>> 0, 0);
  };

  const seed = computed(() => user?.value ? hashUUID(user.value.uid) : undefined);

  return { user, loading, seed, hashUUID };
});
