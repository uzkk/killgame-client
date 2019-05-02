module.exports = (context) => ({
  base: '/killgame/',

  title: '二色幽紫蝶',

  description: '东方 Project - 从入坑到入坟',

  theme: 'uzkk',

  plugins: [
    [require('@uzkk/not-found')],
    [require('@uzkk/shared-assets')],
    [require('../..'), {
      host: process.env.CI ? '188.131.137.197' : 'localhost',
      base: '/',
    }],
  ],

  themeConfig: {
    search: false,
    nav: [
      { text: '主页', link: '/', exact: true },
      { text: '关于', link: '/about.html', exact: false },
      { text: 'GitHub', link: 'https://github.com/uzkk/killgame', exact: false },
    ],
  },

  evergreen: () => !context.isProd,
})
