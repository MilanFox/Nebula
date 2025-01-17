<template>
  <div class="auth-button">
    <TextButton v-if="user" @click="handleSignOut">Log Out</TextButton>
    <NuxtLink v-else :to="`/login?redirect=${redirectionKey}`">Login</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { getAuth, signOut } from 'firebase/auth';
import { useUserStore } from '~/stores/userStore';
import { storeToRefs } from 'pinia';

const route = useRoute();
const redirectionKey = computed(() => btoa(route.fullPath));

const auth = getAuth();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const handleSignOut = async () => { await signOut(auth); };
</script>

<style lang="scss">
@use 'assets/scss/responsive';
@use 'assets/scss/colors';

.auth-button {
  @mixin auth-button-style {
    padding: 16px;
    display: flex;
    justify-content: center;
    border: 1px solid colors.$black;
    background: colors.$black;
    color: colors.$white;

    &:hover {
      color: colors.$white;
      text-decoration: none;
    }
  }

  > a {
    @include responsive.from-breakpoint(tablet) {
      @include auth-button-style;
    }

    &:active {
      background: colors.$blue;
      border-color: colors.$blue;
    }
  }

  > button {
    all: unset;
    cursor: pointer;

    &:hover {
      color: colors.$blue;
      text-decoration: underline;
    }

    @include responsive.from-breakpoint(tablet) {
      @include auth-button-style;
    }
  }
}
</style>
