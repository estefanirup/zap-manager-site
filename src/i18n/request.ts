import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale
  }

  const commonMessages = (await import(`../../messages/${locale}.json`)).default

  let productMessages = {}
  try {
    productMessages = (await import(`../../messages/${locale}/product.json`)).default
  } catch (e) {
    // evita quebrar se o arquivo não existir ainda
    productMessages = {}
  }

  return {
    locale,
    messages: {
      ...commonMessages,
      product: productMessages
    }
  }
})