const withTM = require("next-transpile-modules")([
  "@pusher/push-notifications-web",
]); // pass the modules you would like to see transpiled

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withTM(withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
  },
}));