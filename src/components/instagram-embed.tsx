'use client'

import { useEffect } from "react"

interface Props {
  url: string
  maxWidth?: number
}

export default function InstagramEmbed({ url, maxWidth = 540 }: Props) {
  useEffect(() => {
    // Carrega o script de embed do Instagram
    const script = document.createElement("script")
    script.src = "//www.instagram.com/embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="w-full flex justify-center my-8">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          width: "100%",
          maxWidth: `${maxWidth}px`,
          margin: "0 auto",
          background: "#fff",
          border: "1px solid #ddd",
          borderRadius: "12px",
        }}
      />
    </div>
  )
}