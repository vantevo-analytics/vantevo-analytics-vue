const VueVantevo = {
    install(app, options) {
        var existScript = document.querySelector('#vantevo-analytics');
        var existScriptEcommerce = document.querySelector('#vantevo-analytics-ecommerce');
        if (!existScript) {
            let script = document.createElement('script');
            script.src = 'https://vantevo.io/js/vantevo.js';
            if (options.srcScript) {
                script.src = options.srcScript;
            }
            script.defer = true;
            script.id = 'vantevo-analytics';
            if (options.dev) {
                script.setAttribute("data-param-dev", "");
            }
            if (options.excludePath && Array.isArray(options.excludePath)) {
                script.setAttribute("data-param-exclude", options.excludePath.join(",").split(" ").join(""));
            }
            if (options.manualPageview) {
                script.setAttribute("data-param-manual-pageview", "");
            }
            if (options.hash) {
                script.setAttribute("data-param-hash", "");
            }
            if (options.outboundLinks) {
                script.setAttribute("data-param-outbound-links", "");
            }
            if (options.domain) {
                script.setAttribute("data-param-domain", options.domain);
            }
            if (options.trackFiles) {
                script.setAttribute("data-param-track-files", options.trackFiles.join(",").split(" ").join(""));
            }
            if (options.saveExtensionFiles) {
                script.setAttribute("data-param-save-extension", "");
            }
            let s = document.createElement('script');
            s.type = 'text/javascript';
            s.appendChild(document.createTextNode("window.vantevo = window.vantevo || function() { (window.vantevo.data = window.vantevo.data || []).push(arguments)}"));
            document.head.appendChild(script);
            document.head.appendChild(s);
        }
        if (!existScriptEcommerce && options.trackEcommerce) {
            let script_ecommerce = document.createElement('script');
            script_ecommerce.src = 'https://vantevo.io/js/vantevo-ecommerce.js';
            if (options.scrScriptEcommerce) {
                script_ecommerce.src = options.scrScriptEcommerce;
            }
            script_ecommerce.defer = true;
            script_ecommerce.id = 'vantevo-analytics-ecommerce';
            if (options.dev) {
                script_ecommerce.setAttribute("data-param-dev", "");
            }
            if (options.domain) {
                script_ecommerce.setAttribute("data-param-domain", options.domain);
            }
            let ec = document.createElement('script');
            ec.type = 'text/javascript';
            ec.appendChild(document.createTextNode("window.vantevo_ecommerce = window.vantevo_ecommerce || function() { (window.vantevo_ecommerce.data = window.vantevo_ecommerce.data || []).push(arguments)}"));
            document.head.appendChild(script_ecommerce);
            document.head.appendChild(ec);
        }
        app.config.globalProperties.$vantevo = (event, meta, callbak) => {
            if (typeof window !== 'undefined' && window.vantevo) {
                return window.vantevo(event, meta, callbak);
            }
            console.log("window.vantevo error call function.");
            return;
        };
        app.config.globalProperties.$trackEcommerce = (event, values, callbak) => {
            if (typeof window !== 'undefined' && window.vantevo_ecommerce) {
                return window.vantevo_ecommerce(event, values, callbak);
            }
            console.log("window.vantevo_ecommerce error call function.");
            return;
        };
    },
};
export default VueVantevo;
//# sourceMappingURL=vantevo.plugin.js.map