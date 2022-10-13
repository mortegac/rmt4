import { KEY_SEGMENT } from "./constants";

export async function initSegment() {
  if (typeof window !== "undefined") {
    await loadScript();
  }
}

export async function loadScript() {
  const promise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    // script.async = true;
    // script.defer = true;
    script.text =`
    !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.13.1";
    analytics.load("${KEY_SEGMENT}");
    analytics.page();
    }}();
  `;
    script.onload = () => {
      resolve(script);
    };
    script.onerror = err => {
      reject(err);
    };
    document.head.appendChild(script);
  });
  return promise;
}
