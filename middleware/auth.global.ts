import { useUserStore } from '~/stores/userStore';

export default defineNuxtRouteMiddleware((to) => {
  const userStore = useUserStore();
  const guardedRoutes = ['/puzzle', '/account'];
  if (guardedRoutes.some(route => to.path.startsWith(route)) && !userStore.user) {
    return navigateTo(`/login?redirect=${btoa(to.fullPath)}`);
  }
});
