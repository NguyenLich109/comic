// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@ant-design-vue/nuxt",'nuxt-swiper'],
  components: [
    {
      path: "~/components/user",
      extensions: [".vue"],
      pathPrefix: false,
    },
    {
      path: "~/components/admin",
      extensions: [".vue"],
      pathPrefix: false,
    },
  ],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  runtimeConfig:{
    port: "https://server-vue.vercel.app/api/comic",
    public:{

    }
  }
});
