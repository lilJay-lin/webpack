/**
 * Created by linxiaojie on 2017/1/23.
 */
module.exports = (ctx) => ({
  plugins: [
    require('autoprefixer')({
      remove: false,
      browsers: [
        'ie >= 8',
        'ie_mob >= 10',
        'ff >= 30',
        'chrome >= 34',
        'safari >= 7',
        'opera >= 23',
        'ios >= 7',
        'android >= 2.3',
        'bb >= 10']
    })
  ]
})