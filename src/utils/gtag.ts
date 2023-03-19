declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: any;
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const gaPageview = (url: URL) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};
