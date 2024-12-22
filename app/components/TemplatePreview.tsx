import React, { useEffect, useState } from 'react'
import { TemplatePreviewProps } from '../types/types'
import { replacePlaceholders } from '../utils/templateReplacer'

export default function TemplatePreview({
  template,
  combinedTemplateCss,
  combinedHomepageCss,
  data,
}: TemplatePreviewProps) {
  const [replacedHtml, setReplacedHtml] = useState(template)

  useEffect(() => {
    const replaced = replacePlaceholders(template, data)
    setReplacedHtml(replaced)
  }, [template, data])

  const headerFix = `header{position:relative;}`

  return (
    <div className="border-2 border-gray-200 rounded-xl p-5 overflow-hidden">
      <style>
        {combinedTemplateCss}
        {combinedHomepageCss}
        {headerFix}
      </style>
      <div dangerouslySetInnerHTML={{ __html: replacedHtml }} />
    </div>
  )
}
