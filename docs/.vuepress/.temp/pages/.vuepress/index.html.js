export const data = JSON.parse("{\"key\":\"v-2b27949d\",\"path\":\"/.vuepress/\",\"title\":\"My Component library\",\"lang\":\"en-US\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[{\"level\":3,\"title\":\"Installation\",\"slug\":\"installation\",\"link\":\"#installation\",\"children\":[]}],\"git\":{},\"filePathRelative\":\".vuepress/README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
