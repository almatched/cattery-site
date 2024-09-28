const languages: string[] = ["de", "en", "ru"];

function getTransLink(language: string, slug: string): string {
  return language === "de" ? slug : `/${language}${slug}`;
}

function getFullUrl(language, slug) {
  return language === "de" ? `/${slug}` : slug;
}

export { getTransLink, getFullUrl, languages };
