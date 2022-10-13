export const KEY_SEGMENT = "CsfF3gSeQksXM2LhFnDTdPXYvyJAYw9g";
export const KEY_BRANCH = "key_live_bhZfXKuSirfWvRNcAsUCdenkxtbyGWkK";
export const KEY_GTM = "GTM-PWH67XF";

export const onlyEssentialsArguments = [
  "consent",
  "default",
  {
    ad_storage: "denied",
    analytics_storage: "denied",
  },
];

export const onlyAnalyticsArguments = [
  "consent",
  "default",
  {
    ad_storage: "denied",
    analytics_storage: "granted",
  },
];

export const onlyAdvertisingArguments = [
  "consent",
  "default",
  {
    ad_storage: "granted",
    analytics_storage: "denied",
  },
];

export const bothArguments = [
  "consent",
  "default",
  {
    ad_storage: "granted",
    analytics_storage: "granted",
  },
];
