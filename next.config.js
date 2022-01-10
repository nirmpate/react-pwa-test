const withTM = require("next-transpile-modules")([
	"@pusher/push-notifications-web",
]); // pass the modules you would like to see transpiled

module.exports = withTM();


const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
})