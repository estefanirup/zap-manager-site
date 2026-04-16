import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['pt', 'pt-pt', 'en', 'es'],
  defaultLocale: 'pt',

  pathnames: {
    '/': {
      pt: '/',
      'pt-pt': '/',
      en: '/',
      es: '/'
    },

    '/gestao-atendimento-ia': {
      pt: '/gestao-atendimento-ia',
      'pt-pt': '/gestao-atendimento-ia',
      en: '/customer-service-ai',
      es: '/gestion-atencion-ia'
    },

    '/casos-de-sucesso': {
      pt: '/casos-de-sucesso',
      'pt-pt': '/casos-de-sucesso',
      en: '/success-stories',
      es: '/casos-de-exito'
    },

    '/casos-de-sucesso/ultimate-drift': {
      pt: '/casos-de-sucesso/ultimate-drift',
      'pt-pt': '/casos-de-sucesso/ultimate-drift',
      en: '/success-stories/ultimate-drift',
      es: '/casos-de-exito/ultimate-drift'
    },

    '/casos-de-sucesso/app-silicon': {
      pt: '/casos-de-sucesso/app-silicon',
      'pt-pt': '/casos-de-sucesso/app-silicon',
      en: '/success-stories/app-silicon',
      es: '/casos-de-exito/app-silicon'
    },

    '/sobre': {
      pt: '/sobre',
      'pt-pt': '/sobre',
      en: '/about',
      es: '/sobre-nosotros'
    }
  }
})