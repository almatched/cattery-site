const languages = ['de', 'en', 'ru']
function getTransLink(language, slug) {
  return language === 'de' ? slug : `/${language}${slug}`
}
export { getTransLink, languages }