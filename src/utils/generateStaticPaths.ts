import { useStoryblokApi } from '@storyblok/astro'
import isPreview from './isPreview'
import { languages } from './langs'

export default async function generateStaticPaths() {
    const storyblokApi = useStoryblokApi();
    const { data } = await storyblokApi.get("cdn/links", {
        version: isPreview() ? "draft" : "published",
    });
    let links = data.links;
    links = Object.values(links);
    let paths = [];
    links.forEach((link: { slug: string }) => {
        languages.forEach((language) => {
            //This slug will be used for fetching data from storyblok
            let slug = link.slug;
            //This will be used for generating all the urls for astro
            let full_url = language === "de" ? slug : `${language}/${slug}`;
            //This will let us change the url for diffrent versions
            //We are storing all the possible language urls
            let langSwitch = {};
            languages.forEach((lang) => {
                langSwitch = {
                    ...langSwitch,
                    [lang]: lang === "de" ? `/${slug}` : `/${lang}/${slug}`,
                };
            });
            paths.push({
                props: { language, slug, langSwitch },
                params: {
                    slug: full_url,
                },
            });
        });
    });
    return paths;
}