import Image from "next/image"

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo.png"
      alt="Silicon Village Innovation"
      width={180}
      height={40}
      className={className}
      priority
    />
  )
}