export default {
  // 站点级选项
  title: 'WeMeeting 的故事',
  description: '记录开发WeMeeting项目时的故事',
  base: '/we-meeting-story/',

  // @see https://vitepress.dev/zh/reference/site-config#head
  head: [['script', {}, `console.log('自定义脚本');`]],

  themeConfig: {
    // aside: 'right',
    // @see https://vitepress.dev/zh/reference/default-theme-config#outline
    outline: {
      level: 'deep',
      label: '大纲',
    },
    // @see https://vitepress.dev/zh/reference/default-theme-config#docfooter
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    // @see https://vitepress.dev/zh/reference/default-theme-config#lightmodeswitchtitle
    // @see https://vitepress.dev/zh/reference/default-theme-config#darkmodeswitchtitle
    lightModeSwitchTitle: '浅色模式',
    darkModeSwitchTitle: '深色模式',

    // @see https://vitepress.dev/zh/reference/default-theme-config#sociallinks
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dadaowuma/we-meeting-story' },
    ],

    nav: [
      { text: '首页', link: '/' },
    ],
    sidebar: [
      { text: '首页', link: '/' },
      { text: '故事1', link: '/story-001'},
      { text: '腾讯会议截图', link: '/story-002'}
    ],
  },
}