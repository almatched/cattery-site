let languages = ['de', 'en']
function getTransLink(language, slug) {
  return language === 'de' ? slug : `/${language}${slug}`
}
export { getTransLink, languages }