<template>
  <ul class="main-nav">
    <li v-for="{to, label} in navItems" :key="label" class="main-nav__link">
      <NuxtLink :to="to">{{ label }}</NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/userStore';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const baseItems = [
  { to: '/', label: 'Home' },
  { to: '/', label: 'Puzzles' },
  { to: '/', label: 'Repo' },
];

const navItems = computed(() => {
  const accountLink = { to: '/login', label: 'Account' };
  return user.value ? [...baseItems, accountLink] : baseItems;
});
</script>

<style lang="scss">
.main-nav {
  display: flex;
  align-items: center;
  list-style: none;
  margin: unset;
  padding: unset;

  &__link + &__link {
    display: flex;
    align-items: center;

    &::before {
      content: '';
      height: 16px;
      width: 32px;
      margin-right: 32px;
      border-right: 2px solid #BEC2C5;
      transform: skew(-20deg);
    }
  }
}
</style>
