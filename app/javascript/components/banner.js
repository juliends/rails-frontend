import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["change your life", "learn to code"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
