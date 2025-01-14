<template>
  <ul class="main-nav">
    <li v-for="{href, label} in navItems" :key="label" class="main-nav__link">
      <a :href="href">{{ label }}</a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useUserStoreStore } from '~/stores/userStore';
import { storeToRefs } from 'pinia';

const userStore = useUserStoreStore();
const { user } = storeToRefs(userStore);

const baseItems = [
  { href: '/', label: 'Home' },
  { href: '/', label: 'Puzzles' },
  { href: '/', label: 'Repo' },
];

const navItems = computed(() => {
  const accountLink = { href: '/login', label: 'Account' };
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
