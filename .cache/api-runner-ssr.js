var plugins = [{
      plugin: require('/home/vadim/Public/marina/gatsby-themes/www/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"anonymize":true},
    },{
      plugin: require('/home/vadim/Public/marina/gatsby-themes/www/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[{"resolve":"/home/vadim/Public/marina/gatsby-themes/www/node_modules/gatsby-remark-autolink-headers","id":"df380aaa-460e-51a2-8830-e6712dc1f436","name":"gatsby-remark-autolink-headers","version":"2.1.21","pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":["onInitialClientRender","shouldUpdateScroll"],"ssrAPIs":["onRenderBody"]},{"resolve":"/home/vadim/Public/marina/gatsby-themes/www/node_modules/gatsby-remark-smartypants","id":"90305615-131b-5991-a708-2c2d1c43d946","name":"gatsby-remark-smartypants","version":"2.1.19","pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":[],"ssrAPIs":[]}],"gatsbyRemarkPlugins":["gatsby-remark-autolink-headers","gatsby-remark-smartypants"]},
    },{
      plugin: require('/home/vadim/Public/marina/gatsby-themes/www/node_modules/gatsby-remark-autolink-headers/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/vadim/Public/marina/gatsby-themes/www/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/vadim/Public/marina/gatsby-themes/www/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/vadim/Public/marina/gatsby-themes/www/node_modules/gatsby-plugin-theme-ui/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/vadim/Public/marina/gatsby-themes/www/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[],"feeds":[{"query":"\n        {\n          allNewsletter(sort: { fields: date, order: DESC }) {\n            nodes {\n              title\n              date(formatString: \"MMMM D, YYYY\")\n              excerpt\n              slug\n              html\n            }\n          }\n        }\n      ","output":"rss.xml","title":"Gatsby Themes by LekoArts - Newsletter"}]},
    },{
      plugin: require('/home/vadim/Public/marina/gatsby-themes/www/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Free & Open Source Gatsby Themes by LekoArts","short_name":"GatsbyThemes","description":"Get high-quality and customizable Gatsby themes to quickly bootstrap your website! Choose from many professionally created and impressive designs with a wide variety of features and customization options. Use Gatsby Themes to take your project to the next level and let you and your customers take advantage of the many benefits Gatsby has to offer.","start_url":"/","background_color":"#fff","theme_color":"#5A67D8","display":"standalone","icons":[{"src":"/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/android-chrome-512x512.png","sizes":"512x512","type":"image/png"}]},
    },{
      plugin: require('/home/vadim/Public/marina/gatsby-themes/www/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
