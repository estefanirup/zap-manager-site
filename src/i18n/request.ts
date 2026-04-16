import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale
  }

  const commonMessages = (await import(`../../messages/${locale}.json`)).default

  const casesMessages = (await import(`../../messages/${locale}/casos-de-sucesso.json`)).default

  let productMessages = {}
  try {
    productMessages = (await import(`../../messages/${locale}/product.json`)).default
  } catch {}

  let ultimateDriftMessages = {}
  try {
    ultimateDriftMessages = (await import(`../../messages/${locale}/ultimate-drift.json`)).default
  } catch {}

  let appSiliconMessages = {}
  try {
    appSiliconMessages = (await import(`../../messages/${locale}/app-silicon.json`)).default
  } catch {}

  return {
    locale,
    messages: {
      ...commonMessages,

      cases: {
        ...(commonMessages.cases ?? {}),
        ...(casesMessages.cases ?? {})
      },

      product: productMessages,

      'ultimate-drift': ultimateDriftMessages,

      'app-silicon': appSiliconMessages
    }
  }
})