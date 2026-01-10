/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Hasnain Somani | Machine Learning & Data Science',
  author: 'Hasnain Somani',
  headerTitle: 'Hasnain Somani',
  description:
    'Machine Learning–focused Master’s student in Data Science with hands-on experience in deep learning, computer vision, and generative AI. Experienced in building end-to-end ML pipelines using PyTorch and TensorFlow.',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://portfolio-gamma-liart-26.vercel.app',
  siteRepo: 'https://github.com/hasnain0504/portfolio',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  email: 'hasnain.somani2@gmail.com',
  github: 'https://github.com/hasnain0504',
  linkedin: 'https://www.linkedin.com/in/hasnain-somani',
  locale: 'en-US',
  stickyNav: false,

  // analytics disabled for now
  analytics: {},

  // newsletter disabled
  newsletter: {
    provider: '',
  },

  // comments disabled
  comments: {
    provider: '',
  },

  // search disabled (not needed for portfolio)
  search: {
    provider: '',
  },
}

module.exports = siteMetadata
