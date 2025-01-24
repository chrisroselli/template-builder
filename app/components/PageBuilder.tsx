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
    selectedWhyChoose,
    setSelectedWhyChoose,
    selectedReviews,
    setSelectedReviews,
    selectedBeforeAfter,
    setSelectedBeforeAfter,
    selectedTextBlock,
    setSelectedTextBlock,
    selectedVideoBlock,
    setSelectedVideoBlock,
    hero,
    heroOptions,
    services,
    servicesOptions,
    whyChoose,
    whyChooseOptions,
    reviews,
    reviewsOptions,
    beforeAfter,
    beforeAfterOptions,
    textBlock,
    textBlockOptions,
    videoBlock,
    videoBlockOptions,
  } = usePageComponentSelection(comps)

  const isHeroSelected = selectedHero !== ''

  const isSelection =
    selectedHero !== '' ||
    selectedServices !== '' ||
    selectedWhyChoose !== '' ||
    selectedReviews !== '' ||
    selectedBeforeAfter !== '' ||
    selectedTextBlock !== '' ||
    selectedVideoBlock !== ''

  const reset = () => {
    setSelectedHero('')
    setSelectedServices('')
    setSelectedWhyChoose('')
    setSelectedReviews('')
    setSelectedBeforeAfter('')
    setSelectedTextBlock('')
    setSelectedVideoBlock('')
  }
  return (
    <>
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
          {
            label: 'Reviews',
            value: selectedReviews,
            onChange: setSelectedReviews,
            options: reviewsOptions,
          },
          {
            label: 'Before & After',
            value: selectedBeforeAfter,
            onChange: setSelectedBeforeAfter,
            options: beforeAfterOptions,
          },
          {
            label: 'Text Block',
            value: selectedTextBlock,
            onChange: setSelectedTextBlock,
            options: textBlockOptions,
          },
          {
            label: 'Video Block',
            value: selectedVideoBlock,
            onChange: setSelectedVideoBlock,
            options: videoBlockOptions,
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
            reviews={reviews ?? { html: '', css: '', js: '' }}
            beforeAfter={beforeAfter ?? { html: '', css: '', js: '' }}
            textBlock={textBlock ?? { html: '', css: '', js: '' }}
            videoBlock={videoBlock ?? { html: '', css: '', js: '' }}
          />
        ) : (
          <PageCodeView
            hero={hero ?? { html: '', css: '', js: '' }}
            services={services ?? { html: '', css: '', js: '' }}
            whyChoose={whyChoose ?? { html: '', css: '', js: '' }}
            reviews={reviews ?? { html: '', css: '', js: '' }}
            beforeAfter={beforeAfter ?? { html: '', css: '', js: '' }}
            textBlock={textBlock ?? { html: '', css: '', js: '' }}
            videoBlock={videoBlock ?? { html: '', css: '', js: '' }}
          />
        ))}
    </>
  )
}
