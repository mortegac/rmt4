import { KEY_BRANCH } from "./constants";


export async function initBranch() {
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
    (function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src="https://cdn.branch.io/branch-latest.min.js";k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},"addListener applyCode autoAppIndex banner closeBanner closeJourney creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode trackCommerceEvent logEvent disableTracking".split(" "), 0);
    branch.init("${KEY_BRANCH}");
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
