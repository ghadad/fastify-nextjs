const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withOffline = require("next-offline");
const withOptimizedImages = require("next-optimized-images");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    const devConfig = {
      analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
      bundleAnalyzerConfig: {
        server: {
          analyzerMode: "static",
          reportFilename: "../bundles/server.html"
        },
        browser: {
          analyzerMode: "static",
          reportFilename: "../bundles/client.html"
        }
      },
      webpack(config) {
        return config;
      }
    };
    return withBundleAnalyzer(withOptimizedImages(withOffline(devConfig)));
  }
  return withOffline(withOptimizedImages(defaultConfig));
};
