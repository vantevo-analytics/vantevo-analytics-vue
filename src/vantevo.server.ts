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
