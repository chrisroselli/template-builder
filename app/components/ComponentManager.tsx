import React, { useRef, useState } from 'react'
import { Code } from 'lucide-react'
import { DeleteComponentButton } from '@/app/components/DeleteComponentButton'
import { CompRow } from '@/app/types/types'
import { usePersistedState } from '@/app/hooks/usePersistedState'
import ComponentView from '@/app/components/ComponentView'
import ResizableIframe from './ResizableIframe'

export default function ComponentManager({ comps }: { comps: CompRow[] }) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [showCode, setShowCode] = useState<string | null>(null)
  const [activeTab, setActiveTab] = usePersistedState(
    'Component Manager activeTab',
    'Headers',
  )
  const handleIframeLoad = () => {
    if (iframeRef.current) {
      const iframeDocument =
        iframeRef.current.contentDocument ||
        iframeRef.current.contentWindow?.document
      if (iframeDocument) {
        const newHeight = iframeDocument.body.scrollHeight
        iframeRef.current.style.height = newHeight + 'px'
      }
    }
  }

  const customOrderTypes = [
    'Headers',
    'Footers',
    'Heros',
    'Services',
    'Why Choose',
    'Reviews',
    'Before & After',
    'Text Block',
    'Video Block',
  ]

  function sortByCustomOrder(array: string[], customOrder: string[]): string[] {
    return [...array].sort((a, b) => {
      const indexA = customOrder.indexOf(a)
      const indexB = customOrder.indexOf(b)

      return (
        (indexA === -1 ? Infinity : indexA) -
        (indexB === -1 ? Infinity : indexB)
      )
    })
  }

  const dedupeCompTypes = [...new Set(comps.map(({ comp_type }) => comp_type))]
  const orderedCompTypes: string[] = sortByCustomOrder(
    dedupeCompTypes,
    customOrderTypes,
  )

  return (
    <>
      <div className="text-base font-semibold text-primary mb-4">
        Component Manager
      </div>
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          {orderedCompTypes.map((comp_type, id) => (
            <button
              key={id}
              onClick={() => setActiveTab(comp_type)}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === comp_type
                  ? 'border-primary-dark text-primary-dark'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {comp_type}
            </button>
          ))}
        </nav>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {comps
          .filter((item) => item.comp_type === activeTab)
          .map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-lg p-6 border border-gray-200"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <div className="flex space-x-1">
                  <button
                    onClick={() =>
                      setShowCode(showCode === item.html ? null : item.html)
                    }
                    className="flex items-center px-3 py-1 bg-primary-dark text-white rounded hover:bg-primary-light"
                  >
                    <Code className="w-4 h-4 mr-1" />
                    {showCode === item.html ? 'Hide Code' : 'View Code'}
                  </button>
                  <DeleteComponentButton id={item.id} status={item.status} />
                </div>
              </div>
              {showCode === item.html ? (
                <div className="mb-4">
                  <ComponentView html={item.html} css={item.css} js={item.js} />
                </div>
              ) : (
                <ResizableIframe html={item.html} css={item.css} js={item.js} />
              )}
            </div>
          ))}
      </div>
    </>
  )
}
