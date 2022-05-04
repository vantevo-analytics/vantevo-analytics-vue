declare var window: any;

const VueVantevo = {
  install(app: any, options: any) {
    var existScript = document.querySelector('#vantevo');

    if (!existScript) {
      let script = document.createElement('script');
      script.src = 'https://vantevo.io/js/vantevo.js';

      if (options.srcScript) {
        script.src = options.srcScript;
      }
      script.defer = true;
      script.id = 'vantevo-analytics';
      if (options.dev) {
        script.setAttribute("data-param-dev", "")
      }

      if (options.excludePath && Array.isArray(options.excludePath)) {
        script.setAttribute("data-param-exclude", options.excludePath.join(",").split(" ").join(""))
      }

      if (options.manualPageview) {
        script.setAttribute("data-param-manual-pageview", "")
      }

      if (options.hash) {
        script.setAttribute("data-param-hash", "")
      }

      if (options.outboundLinks) {
        script.setAttribute("data-param-outbound-links", "")
      }

      if (options.domain) {
        script.setAttribute("data-param-domain", options.domain)
      }

      if (options.trackFiles) {
        script.setAttribute("data-param-track-files", options.trackFiles.join(",").split(" ").join(""))
      }

      if (options.saveExtesionFiles) {
        script.setAttribute("data-param-save-extension", "")
      }
      let s = document.createElement('script');
      s.type = 'text/javascript';
      s.appendChild(document.createTextNode("window.vantevo = window.vantevo || function() { (window.vantevo.data = window.vantevo.data || []).push(arguments)}"));
      document.head.appendChild(script);
      document.head.appendChild(s);
    }

    app.config.globalProperties.$vantevo = (event: any, meta: any, callbak: any) => {
      if (typeof window !== 'undefined' && window.vantevo) {
        return window.vantevo(event, meta, callbak);
      }
      console.log("window.vantevo error call function.")
      return;
    };
  },
};

export default VueVantevo;
