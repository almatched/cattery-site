import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';

const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
    redirects: {
        '/home': '/',
    },
    integrations: [
        storyblok({
            accessToken: env.STORYBLOK_TOKEN,
            components: {
                page: 'storyblok/Page',
                grid: 'storyblok/Grid',
                feature: 'storyblok/Feature',
                teaser: 'storyblok/Teaser',
                config: 'storyblok/Config',
                profile: 'storyblok/Profile',
                'all-profiles': 'storyblok/AllProfiles',
            },
            apiOptions: {
                region: 'eu',
            },
        })
    ],
});
