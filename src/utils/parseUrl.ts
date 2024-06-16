import { languages } from "./langs";

export default function parseUrl(url: string): {
  language: string;
  slug: string;
  langSwitch: {
    [key: string]: string;
  };
} {
  //converting the current url to an array based on '/'
  let urlToArray: string[] = url?.split("/");
  //Setting the fallback language to be german
  let defaultLang: string = "de";
  //Checking if current url contains a known language
  let isKnownLang: boolean = languages.some((l) => l === urlToArray?.[0]);
  //setting current language based on above
  let currentLang: string = url && isKnownLang ? urlToArray[0] : defaultLang;
  // removing language from the url and only keeping the slug
  let slug: string = url
    ? isKnownLang
      ? urlToArray?.slice(1)?.join("/") || undefined
      : urlToArray?.join("/")
    : undefined;

  //Same logic for generating the lang switch as we have in getStaticPaths
  let langSwitch: { [key: string]: string } = {};
  languages.forEach((lang) => {
    langSwitch = {
      ...langSwitch,
      [lang]: lang === "de" ? `/${slug ?? ""}` : `/${lang}/${slug ?? ""}`,
    };
  });
  //finally returning the same three variables we also get from getStaticPaths
  return { language: currentLang, slug, langSwitch };
}
