import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl'

const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [basicSsl()],
        server: {
            https: true,
        },
    },
    redirects: {
        '/home': '/',
        '/en/home': '/en/',
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
                'about-page': 'storyblok/AboutPage',
                'contact-page': 'storyblok/Contact',
                'gallery-page': 'storyblok/GalleryPage',
                'home-page': 'storyblok/HomePage',
                'values-list': 'storyblok/ValuesList',
                entry: 'storyblok/Entry',
                'menu-link': 'storyblok/MenuLink',
                'all-information-posts': 'storyblok/AllInformationPosts',
                'information-post': 'storyblok/InformationPost',
            },
            apiOptions: {
                region: 'eu',
            },
        })
    ],
});
