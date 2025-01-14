<template>
  <div class="auth-button">
    <TextButton v-if="user" @click="handleSignOut">Log Out</TextButton>
    <a v-else href="/login"> Login</a>
  </div>
</template>

<script setup lang="ts">
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth();
const user = useCurrentUser();

const handleSignOut = async () => { await signOut(auth); };
</script>

<style lang="scss">
.auth-button {
  @mixin auth-button-style {
    padding: 16px;
    display: flex;
    justify-content: center;
    border: 1px solid black;
    background: black;
    color: white;

    &:hover {
      color: white;
      text-decoration: none;
    }
  }

  > a {
    @include auth-button-style;
  }

  > button {
    all: unset;
    cursor: pointer;
    @include auth-button-style;
  }
}
</style>
