// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Layouts
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)

  Vue.directive('resize', {
    bind(element) {
      element.style.height = 'auto'
      element.style.height = element.scrollHeight + 'px'
    },
    inserted(element) {
      element.style.height = 'auto'
      element.style.height = element.scrollHeight + 'px'
    },
    update(element) {
      element.style.height = 'auto'
      element.style.height = element.scrollHeight + 'px'
    },
  })

  head.htmlAttrs = {
    lang: 'en',
  }

  head.meta.push(
    {
      name: 'charset',
      content: 'UTF-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-title',
      content: 'Gridsome Template',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent',
    },
  )
}

// Styles
import '@/css/global.css'
