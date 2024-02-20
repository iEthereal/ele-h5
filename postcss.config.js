module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowsersList: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      // 根节点 body 的 footSize 值
      rootValue: 16,
      propList: ['*'],
      selectorBlackList: [':root']
    }
  }
}
