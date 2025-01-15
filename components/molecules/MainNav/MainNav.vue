<template>
  <nav class="main-nav">
    <ul class="main-nav__list">
      <li v-for="{to, label} in navItems" :key="label" class="main-nav__link">
        <NuxtLink :to="to">{{ label }}</NuxtLink>
      </li>
      <li class="main-nav__link">
        <AuthButton/>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/userStore';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const baseItems = [
  { to: '/', label: 'Home' },
  { to: 'https://github.com/MilanFox/Nebula-Frontend', label: 'Repo' },
];

const navItems = computed(() => {
  const accountLink = { to: '/login', label: 'Account' };
  return user.value ? [...baseItems, accountLink] : baseItems;
});
</script>

<style lang="scss">
@use 'assets/scss/responsive';
@use 'assets/scss/colors';

.main-nav {
  @include responsive.to-breakpoint(tablet) {
    width: 100%;
  }

  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin: unset;
    padding: unset;

    @include responsive.to-breakpoint(tablet) {
      padding: 16px 0;
      border-width: 1px 0;
      border-color: colors.$grey;
      border-style: solid;
      width: 100%;
      gap: 16px;
      flex-wrap: wrap;
    }
  }

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

      @include responsive.to-breakpoint(desktop) {
        width: 16px;
        margin-right: 16px;
      }

      @include responsive.to-breakpoint(tablet) {
        content: none;
      }
    }
  }
}
</style>
