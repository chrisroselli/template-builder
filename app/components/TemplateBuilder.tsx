'use client'

import React, { useState } from 'react'
import { Code } from 'lucide-react'
import { CompRow, TemplateRow } from '@/app/types/types'
import TemplatePreview from '@/app/components/TemplatePreview'
import TemplateCodeView from '@/app/components/TemplateCodeView'
import ComponentSelection from '@/app/components/ComponentSelection'
import { useComponentSelection } from '@/app/hooks/useComponentSelection'
import ResetBtn from '@/app/components/ResetBtn'

export default function TemplateBuilder({
  templates,
  comps,
}: {
  templates: TemplateRow[]
  comps: CompRow[]
}) {
  const [showPreview, setShowPreview] = useState(true)
  const {
    selectedTemplate,
    setSelectedTemplate,
    selectedHeader,
    setSelectedHeader,
    selectedFooter,
    setSelectedFooter,
    selectedHero,
    setSelectedHero,
    selectedServices,
    setSelectedServices,
    selectedWhyChoose,
    setSelectedWhyChoose,
    template,
    header,
    footer,
    whyChoose,
    combinedTemplateCss,
    combinedHomepageHtml,
    combinedHomepageCss,
  } = useComponentSelection(templates, comps)

  const isSelectionComplete =
    selectedTemplate !== '' && selectedHeader !== '' && selectedFooter !== ''
  // selectedHero !== '' &&
  // selectedServices !== ''

  const isSelection =
    selectedTemplate !== '' ||
    selectedHeader !== '' ||
    selectedHero !== '' ||
    selectedServices !== '' ||
    selectedFooter !== ''

  const reset = () => {
    setSelectedTemplate('')
    setSelectedHeader('')
    setSelectedHero('')
    setSelectedServices('')
    setSelectedWhyChoose('')
    setSelectedFooter('')
  }
  return (
    <>
      <ComponentSelection
        selections={[
          {
            label: 'Template',
            value: selectedTemplate,
            onChange: setSelectedTemplate,
            options: templates,
          },
          {
            label: 'Header',
            value: selectedHeader,
            onChange: setSelectedHeader,
            options: comps.filter((d) => d.comp_type === 'Headers'),
          },
          {
            label: 'Footer',
            value: selectedFooter,
            onChange: setSelectedFooter,
            options: comps.filter((d) => d.comp_type === 'Footers'),
          },
        ]}
      />
      <ComponentSelection
        selections={[
          {
            label: 'Hero',
            value: selectedHero,
            onChange: setSelectedHero,
            options: comps.filter((d) => d.comp_type === 'Heros'),
          },
          {
            label: 'Services',
            value: selectedServices,
            onChange: setSelectedServices,
            options: comps.filter((d) => d.comp_type === 'Services'),
          },
          {
            label: 'Why Choose',
            value: selectedWhyChoose,
            onChange: setSelectedWhyChoose,
            options: comps.filter((d) => d.comp_type === 'Why Choose'),
          },
        ]}
      />
      <div className="flex space-x-1 mb-6">
        <button
          disabled={!isSelectionComplete}
          onClick={() => setShowPreview(!showPreview)}
          className="flex items-center px-4 py-2 bg-primary-dark text-white rounded-lg hover:bg-primary-light disabled:opacity-50"
        >
          <Code className="w-4 h-4 mr-2" />
          {showPreview ? 'Show Code' : 'Show Preview'}
        </button>
        <ResetBtn reset={reset} disabled={!isSelection} />
      </div>
      {isSelectionComplete &&
        (showPreview ? (
          <TemplatePreview
            template={template}
            combinedTemplateCss={combinedTemplateCss}
            combinedHomepageCss={combinedHomepageCss}
            data={{
              header: header,
              combinedHomepageHtml: `<div id="homepage">\n${combinedHomepageHtml}\n</div>`,
              footer: footer,
            }}
          />
        ) : (
          <TemplateCodeView
            template={template}
            combinedTemplateCss={combinedTemplateCss}
            combinedHomepageHtml={combinedHomepageHtml}
            combinedHomepageCss={combinedHomepageCss}
            data={{
              header: header,
              footer: footer,
              whyChoose: whyChoose,
            }}
          />
        ))}
    </>
  )
}
