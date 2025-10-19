import ReactGA from 'react-ga4';

export const initGA = () => {
  // Replace with your actual Google Analytics 4 Measurement ID
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

export const trackEvent = (action: string, category: string, label?: string) => {
  ReactGA.event({
    action,
    category,
    label,
  });
};