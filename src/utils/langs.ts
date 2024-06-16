const languages: string[] = ["de", "en", "ru"];
function getTransLink(language: string, slug: string): string {
  return language === "de" ? slug : `/${language}${slug}`;
}
export { getTransLink, languages };
