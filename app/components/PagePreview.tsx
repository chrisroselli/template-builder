import type { PagePreviewProps } from '@/app/types/types'
import React from 'react'

export default function PagePreview({
  hero,
  services,
  whyChoose,
}: PagePreviewProps) {
  return (
    <div className="border-2 border-gray-200 rounded-xl p-5 overflow-hidden">
      <div className="border rounded-md bg-white">
        <iframe
          srcDoc={`<style>${hero.css}${services.css}${whyChoose.css}</style>${hero.html}${services.html}${whyChoose.html}`}
          className="w-full h-lvh"
          title="Preview"
        />
      </div>
    </div>
  )
}
