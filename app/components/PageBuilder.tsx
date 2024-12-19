'use client'

import { useState } from 'react'
import { Code } from 'lucide-react'
import { CompRow } from '@/app/types/types'
import PagePreview from '@/app/components/PagePreview'
import PageCodeView from '@/app/components/PageCodeView'
import { usePageComponentSelection } from '@/app/hooks/usePageComponentSelection'
import ComponentSelection from '@/app/components/ComponentSelection'

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
  } = usePageComponentSelection(comps)

  const isHeroSelected = selectedHero !== ''

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-primary mb-6">Page Builder</h1>
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
            ]}
          />
          <div className="flex space-x-4 mb-6">
            <button
              disabled={!isHeroSelected}
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center px-4 py-2 bg-primary-dark text-white rounded-lg hover:bg-primary-light disabled:opacity-50"
            >
              <Code className="w-4 h-4 mr-2" />
              {showPreview ? 'Show Code' : 'Show Preview'}
            </button>
          </div>
          {isHeroSelected &&
            (showPreview ? (
              <PagePreview
                hero={hero ?? { html: '', css: '' }}
                services={services ?? { html: '', css: '' }}
              />
            ) : (
              <PageCodeView
                hero={hero ?? { html: '', css: '' }}
                services={services ?? { html: '', css: '' }}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
