import type { PagePreviewProps } from '@/app/types/types'
import React from 'react'
import ResizableIframe from '@/app/components/ResizableIframe'
import { combineCode } from '@/app/utils/templateUtils'

export default function PagePreview({
  hero,
  services,
  whyChoose,
  reviews,
  beforeAfter,
  textBlock,
  videoBlock,
}: PagePreviewProps) {
  const components = [
    hero,
    services,
    whyChoose,
    reviews,
    beforeAfter,
    textBlock,
    videoBlock,
  ]

  const combinedComponentHtml = combineCode(
    ...components.map((component) => component.html),
  )
  const combinedComponentCss = combineCode(
    ...components.map((component) => component.css),
  )
  const combinedComponentJs = combineCode(
    ...components.map((component) => component.js),
  )
  return (
    <div className="border-2 border-gray-200 rounded-xl p-5 overflow-hidden">
      <div className="border rounded-md bg-white">
        <ResizableIframe
          html={combinedComponentHtml}
          css={combinedComponentCss}
          js={combinedComponentJs}
        />
      </div>
    </div>
  )
}
