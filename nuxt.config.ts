// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

const alias = {
  '@assets': resolve(__dirname, './components/assets'),
  '@atoms': resolve(__dirname, './components/atoms'),
  '@molecules': resolve(__dirname, './components/molecules'),
  '@organisms': resolve(__dirname, './components/organisms'),
  '@puzzles': resolve(__dirname, './components/puzzles'),
  '@templates': resolve(__dirname, './templates'),
  '@store': resolve(__dirname, './store'),
  '@composables': resolve(__dirname, './composables'),
  '@constants': resolve(__dirname, './components/constants'),
  '@server': resolve(__dirname, './server'),
  '@layouts': resolve(__dirname, './layouts'),
};

const dirs = [
  { path: '~/components/atoms' },
  { path: '~/components/molecules' },
  { path: '~/components/organisms' },
  { path: '~/components/puzzles', extensions: ['vue'], ignore: ['index.ts'] },
];

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@pinia/nuxt', '@vueuse/nuxt', 'nuxt-vuefire'],
  alias,
  components: { dirs },

  css: ['~/assets/scss/main.scss'],
  postcss: {
    plugins: {
      'postcss-pxtorem': {
        rootValue: 16,
        unitPrecision: 3,
        propList: ['*', '!border*'],
        replace: true,
        mediaQuery: true,
        minPixelValue: 2,
      },
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Nebula',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      ],
      meta: [
        { hid: 'description', name: 'description', content: 'Beginner-friendly Coding Puzzles' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Milan Fox' },
      ],
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },

  vuefire: {
    auth: { enabled: true },
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
    },
  },
});
