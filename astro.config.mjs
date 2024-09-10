import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";
import dotenvExpand from "dotenv-expand"

const storyblokEnv = loadEnv("", process.cwd(), 'STORYBLOK');

// check if in dev environment
const mode = storyblokEnv.STORYBLOK_ENV;
const isDevMode = mode === "development";

// vite doesn't expose process.env and @vercel/postgres searches for process.env.POSTGRES_URL variable
// expose .env variables via process.env. with POSTGRES prefix
if (isDevMode) {
  const env = loadEnv(mode, process.cwd(), 'POSTGRES');
  dotenvExpand.expand({ parsed: env });
}

// https://astro.build/config
export default defineConfig({
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  redirects: {
    '/': '/home',
    '/en/': '/en/home',
    '/ru/': '/ru/home',
  },
  site: "https://www.mainecoon-kitten.de",
  integrations: [storyblok({
    accessToken: storyblokEnv.STORYBLOK_TOKEN,
    bridge: storyblokEnv.STORYBLOK_IS_PREVIEW === "yes",
    components: {
      page: 'storyblok/Page',
      grid: 'storyblok/Grid',
      config: 'storyblok/Config',
      'all-profiles': 'storyblok/AllProfiles',
      'contact-page': 'storyblok/Contact',
      'gallery-page': 'storyblok/GalleryPage',
      'home-page': 'storyblok/HomePage',
      'values-list': 'storyblok/ValuesList',
      entry: 'storyblok/Entry',
      'menu-link': 'storyblok/MenuLink',
      'all-information-posts': 'storyblok/AllInformationPosts',
      'information-post': 'storyblok/InformationPost',
      relative: 'storyblok/Relative',
      'image-link': 'storyblok/ImageLink',
      profile: 'storyblok/Profile',
      'profile_parent': 'storyblok/ProfileParent',
      'profiles_parents': 'storyblok/ProfilesParents',
      'profiles_kittens': 'storyblok/ProfilesKittens'
    },
    apiOptions: {
      region: 'eu'
    }
  }), react(), tailwind({
    applyBaseStyles: false
  }), sitemap()],
  ...(storyblokEnv.STORYBLOK_IS_PREVIEW === "yes" ? {
    output: "server",
    adapter: vercel(),
  } : {
    output: "server",
    adapter: vercel(),
    // Individual image page that is accessed from a cat profile page -> gallery doesn't show the image with isr on
    // adapter: vercel({
    //   isr: {
    //     expiration: 60 * 60 * 12,
    //   },
    // }),
  }),
  ...(isDevMode && {
    vite: {
      plugins: [basicSsl()],
      server: {
        https: true
      }
    }
  })
});