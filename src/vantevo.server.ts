const { resolve } = require('path');
import { Module, NuxtVantevoOptions } from '@nuxt/types'

const defaultOptions = {
  "excludePath": [],
  "dev": false,
  "hash": false,
  "domain": null,
  "manualPageview": false,
  "outboundLinks": false,
  "trackFiles": null,
  "saveExtensionFiles": false,
  "trackEcommerce": false,
  "scrScript": "https://vantevo.io/js/vantevo.js",
  "scrScriptEcommerce": "https://vantevo.io/js/vantevo.ecommerce.js",
  "proxyServer": "https://api.vantevo.io/event",
  "proxyServerEcommerce": "https://api.vantevo.io/event-ecommerce",
  "params": {}
}

const VantevoModule: Module<NuxtVantevoOptions> = function (moduleOptions) {
  const options = {
    ...defaultOptions,
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'vantevo.client.js'),
    mode: 'client',
    fileName: 'vantevo.client.js',
    options: options,
  });

}


export default VantevoModule;

export const meta = require('../../package.json');
