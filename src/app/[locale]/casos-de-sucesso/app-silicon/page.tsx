import AppSilicon from "./AppSilicon"
import { getTranslations } from "next-intl/server"

export async function generateMetadata({
  params
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "app-silicon"
  })

  return {
    title: t("title"),
    description: t("subtitle")
  }
}

export default function Page() {
  return <AppSilicon />
}