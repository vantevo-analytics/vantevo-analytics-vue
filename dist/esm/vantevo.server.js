const { resolve } = require('path');
const defaultOptions = {
    "excludePath": [],
    "dev": false,
    "hash": false,
    "domain": null,
    "manualPageview": false,
    "outboundLinks": false,
    "trackFiles": null,
    "saveExtesionFiles": false,
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
export default VantevoModule;
export const meta = require('../../package.json');
//# sourceMappingURL=vantevo.server.js.map