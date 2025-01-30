import React, { useEffect, useState } from 'react'
import { TemplatePreviewProps } from '../types/types'
import { replacePlaceholders } from '../utils/templateReplacer'

export default function TemplatePreview({
  template,
  templateCss,
  combinedTemplateCss,
  combinedHomepageCss,
  data,
}: TemplatePreviewProps) {
  const [replacedHtml, setReplacedHtml] = useState(template)

  useEffect(() => {
    const replaced = replacePlaceholders(template, data)
    setReplacedHtml(replaced)
  }, [template, data])

  return (
    <div className="border-2 border-gray-200 rounded-xl p-5 overflow-hidden">
      <div className="border rounded-md bg-white">
        <iframe
          srcDoc={`<style>${templateCss}${combinedTemplateCss}${combinedHomepageCss}</style>${replacedHtml}`}
          className="w-full h-lvh"
          title="Preview"
        />
      </div>
    </div>
  )
}
