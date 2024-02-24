import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
const env = loadEnv("", process.cwd(), 'STORYBLOK');


// https://astro.build/config
export default defineConfig({
  redirects: {
    '/home': '/',
    '/en/home': '/en/'
  },
  integrations: [storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    bridge: env.STORYBLOK_IS_PREVIEW === "yes",
    components: {
      page: 'storyblok/Page',
      grid: 'storyblok/Grid',
      config: 'storyblok/Config',
      profile: 'storyblok/Profile',
      'all-profiles': 'storyblok/AllProfiles',
      'contact-page': 'storyblok/Contact',
      'gallery-page': 'storyblok/GalleryPage',
      'home-page': 'storyblok/HomePage',
      'values-list': 'storyblok/ValuesList',
      entry: 'storyblok/Entry',
      'menu-link': 'storyblok/MenuLink',
      'all-information-posts': 'storyblok/AllInformationPosts',
      'information-post': 'storyblok/InformationPost',
      relative: 'storyblok/Relative'
    },
    apiOptions: {
      region: 'eu'
    }
  }), react(), tailwind({
    applyBaseStyles: false
  })],
  output: env.STORYBLOK_IS_PREVIEW === 'yes' ? 'server' : 'static',
  ...(env.STORYBLOK_ENV === 'development' && {
    vite: {
      plugins: [basicSsl()],
      server: {
        https: true
      }
    }
  }),
  adapter: vercel()
});