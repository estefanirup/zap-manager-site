import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['pt', 'en', 'es'],
  defaultLocale: 'pt',
  pathnames: {
    '/': '/',
    '/gestao-atendimento-ia': {
      pt: '/gestao-atendimento-ia',
      en: '/customer-service-ai',
      es: '/gestion-atencion-ia',
    },
    '/casos-de-sucesso': {
      pt: '/casos-de-sucesso',
      en: '/success-stories',
      es: '/casos-de-exito',
    },
    '/casos-de-sucesso/ultimate-drift': {
      pt: '/casos-de-sucesso/ultimate-drift',
      en: '/success-stories/ultimate-drift',
      es: '/casos-de-exito/ultimate-drift',
    },
    '/casos-de-sucesso/app-silicon': {
      pt: '/casos-de-sucesso/app-silicon',
      en: '/success-stories/app-silicon',
      es: '/casos-de-exito/app-silicon',
    },
    '/sobre': {
      pt: '/sobre',
      en: '/about',
      es: '/sobre-nosotros',
    },
  },
})