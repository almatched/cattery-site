//You can have the languages in an utils file so it can be reused.
let languages = ['de', 'en']
function getTransLink(language, slug) {
  return language === 'de' ? slug : `/${language}${slug}`
}
export { getTransLink, languages }