import type { PagePreviewProps } from '@/app/types/types'
import React from 'react'

export default function PagePreview({
  hero,
  services,
  whyChoose,
  reviews,
  beforeAfter,
  textBlock,
  videoBlock,
}: PagePreviewProps) {
  return (
    <div className="border-2 border-gray-200 rounded-xl p-5 overflow-hidden">
      <div className="border rounded-md bg-white">
        <iframe
          srcDoc={`<style>${hero.css}${services.css}${whyChoose.css}${reviews.css}${beforeAfter.css}${textBlock.css}${videoBlock.css}</style>${hero.html}${services.html}${whyChoose.html} ${reviews.html} ${beforeAfter.html} ${textBlock.html} ${videoBlock.html}`}
          className="w-full h-lvh"
          title="Preview"
        />
      </div>
    </div>
  )
}
