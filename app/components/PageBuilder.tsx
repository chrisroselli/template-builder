'use client'

import React, { useState } from 'react'
import { Code } from 'lucide-react'
import { CompRow } from '@/app/types/types'
import PagePreview from '@/app/components/PagePreview'
import PageCodeView from '@/app/components/PageCodeView'
import { usePageComponentSelection } from '@/app/hooks/usePageComponentSelection'
import ComponentSelection from '@/app/components/ComponentSelection'
import ResetBtn from '@/app/components/ResetBtn'
//TODO: Refactor ComponentSelection
export default function PageBuilder({ comps }: { comps: CompRow[] }) {
  const [showPreview, setShowPreview] = useState(true)
  const {
    selectedHero,
    setSelectedHero,
    selectedServices,
    setSelectedServices,
    hero,
    services,
    heroOptions,
    servicesOptions,
    selectedWhyChoose,
    setSelectedWhyChoose,
    whyChoose,
    whyChooseOptions,
  } = usePageComponentSelection(comps)

  const isHeroSelected = selectedHero !== ''

  const isSelection = selectedHero !== '' || selectedServices !== ''

  const reset = () => {
    setSelectedHero('')
    setSelectedServices('')
    setSelectedWhyChoose('')
  }
  return (
    <>
      <div className="text-base font-semibold text-primary mb-4">
        Page Builder
      </div>
      <ComponentSelection
        selections={[
          {
            label: 'Hero',
            value: selectedHero,
            onChange: setSelectedHero,
            options: heroOptions,
          },
          {
            label: 'Services',
            value: selectedServices,
            onChange: setSelectedServices,
            options: servicesOptions,
          },
          {
            label: 'Why Choose',
            value: selectedWhyChoose,
            onChange: setSelectedWhyChoose,
            options: whyChooseOptions,
          },
        ]}
      />
      <div className="flex space-x-1 mb-6">
        <button
          disabled={!isHeroSelected}
          onClick={() => setShowPreview(!showPreview)}
          className="flex items-center px-4 py-2 bg-primary-dark text-white rounded-lg hover:bg-primary-light disabled:opacity-50"
        >
          <Code className="w-4 h-4 mr-2" />
          {showPreview ? 'Show Code' : 'Show Preview'}
        </button>
        <ResetBtn reset={reset} disabled={!isSelection} />
      </div>
      {isHeroSelected &&
        (showPreview ? (
          <PagePreview
            hero={hero ?? { html: '', css: '', js: '' }}
            services={services ?? { html: '', css: '', js: '' }}
            whyChoose={whyChoose ?? { html: '', css: '', js: '' }}
          />
        ) : (
          <PageCodeView
            hero={hero ?? { html: '', css: '', js: '' }}
            services={services ?? { html: '', css: '', js: '' }}
            whyChoose={whyChoose ?? { html: '', css: '', js: '' }}
          />
        ))}
    </>
  )
}
