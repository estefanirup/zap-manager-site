import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale
  }

  // COMMON (arquivo raiz: pt.json, pt-pt.json, etc)
  const loadCommon = async () => {
    try {
      return (await import(`../../messages/${locale}.json`)).default
    } catch {
      return (await import(`../../messages/pt.json`)).default
    }
  }

  // PÁGINAS (dentro de /locale/)
  const loadScoped = async (file: string) => {
    try {
      return (await import(`../../messages/${locale}/${file}.json`)).default
    } catch {
      try {
        return (await import(`../../messages/pt/${file}.json`)).default
      } catch {
        return {}
      }
    }
  }

  const commonMessages = await loadCommon()
  const casesMessages = await loadScoped('casos-de-sucesso')

  const productMessages = await loadScoped('product')
  const ultimateDriftMessages = await loadScoped('ultimate-drift')
  const appSiliconMessages = await loadScoped('app-silicon')
  const sobreMessages = await loadScoped('sobre')

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
      'app-silicon': appSiliconMessages,
      sobre: sobreMessages
    }
  }
})