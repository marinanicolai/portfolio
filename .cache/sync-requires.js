const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-newsletter-tsx": hot(preferDefault(require("/home/vadim/Public/marina/gatsby-themes/www/src/templates/newsletter.tsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/vadim/Public/marina/gatsby-themes/www/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/home/vadim/Public/marina/gatsby-themes/www/src/pages/404.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/home/vadim/Public/marina/gatsby-themes/www/src/pages/index.tsx")))
}

