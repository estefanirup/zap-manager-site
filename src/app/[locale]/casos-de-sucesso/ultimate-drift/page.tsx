import UltimateDriftClient from "./UltimateDriftClient"
import { getTranslations } from "next-intl/server"

export async function generateMetadata({ params }: any) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "ultimate-drift",
  });

  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default function Page() {
  return <UltimateDriftClient />
}