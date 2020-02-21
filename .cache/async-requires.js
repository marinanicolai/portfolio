// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-newsletter-tsx": () => import("./../src/templates/newsletter.tsx" /* webpackChunkName: "component---src-templates-newsletter-tsx" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-tsx": () => import("./../src/pages/404.tsx" /* webpackChunkName: "component---src-pages-404-tsx" */),
  "component---src-pages-index-tsx": () => import("./../src/pages/index.tsx" /* webpackChunkName: "component---src-pages-index-tsx" */)
}

