import React, { useEffect, useState } from 'react'
import { TemplatePreviewProps } from '../types/types'
import { replacePlaceholders } from '../utils/templateReplacer'
import { combineCode } from '@/app/utils/templateUtils'
import ResizableIframe from '@/app/components/ResizableIframe'

export default function TemplatePreview({
  template,
  templateCss,
  combinedTemplateCss,
  combinedHomepageCss,
  combinedHomepageJs,
  data,
}: TemplatePreviewProps) {
  const [replacedHtml, setReplacedHtml] = useState(template)

  useEffect(() => {
    const replaced = replacePlaceholders(template, data)
    setReplacedHtml(replaced)
  }, [template, data])
  const cssOverwrites = `#page-wrap {display: initial !important;}#content-wrap {width: 100% !important;max-width: initial !important;} #silo-sidebar,#siloBanner {display: none !important;}`
  const combinedCss = combineCode(
    cssOverwrites,
    templateCss,
    combinedTemplateCss,
    combinedHomepageCss,
  )
  return (
    <div className="border-2 border-gray-200 rounded-xl p-5 overflow-hidden">
      <div className="border rounded-md bg-white">
        <ResizableIframe
          html={replacedHtml}
          css={combinedCss}
          js={combinedHomepageJs}
        />
      </div>
    </div>
  )
}
