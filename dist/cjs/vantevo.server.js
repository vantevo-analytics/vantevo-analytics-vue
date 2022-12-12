"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meta = void 0;
const { resolve } = require('path');
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
};
const VantevoModule = function (moduleOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), moduleOptions);
    this.addPlugin({
        src: resolve(__dirname, 'vantevo.client.js'),
        mode: 'client',
        fileName: 'vantevo.client.js',
        options: options,
    });
};
exports.default = VantevoModule;
exports.meta = require('../../package.json');
//# sourceMappingURL=vantevo.server.js.map