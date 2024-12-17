import { useState } from 'react'
import { Code } from 'lucide-react'
import { CompRow, TemplateRow } from '@/app/types/types'
import TemplatePreview from '@/app/components/TemplatePreview'
import TemplateCodeView from '@/app/components/TemplateCodeView'
// TODO: Add Homepage components
// TODO: :root CSS variables color picker

export default function TemplateBuilder({
  templates,
  comps,
}: {
  templates: TemplateRow[]
  comps: CompRow[]
}) {
  const [selectedTemplate, setSelectedTemplate] = useState('')
  const [selectedHeader, setSelectedHeader] = useState('')
  const [selectedFooter, setSelectedFooter] = useState('')
  const [showPreview, setShowPreview] = useState(true)

  const findTemplate = (selection: TemplateRow[], selectedItem: string) => {
    return selection.find((item) => item.label === selectedItem)
  }

  const findComp = (selection: CompRow[], selectedItem: string) => {
    return selection.find((item) => item.label === selectedItem)
  }

  const template = findTemplate(templates, selectedTemplate)?.borders ?? ''
  if (template === undefined) {
    throw new Error('Template component not found')
  }

  const header = findComp(comps, selectedHeader)?.html ?? ''
  if (header === undefined) {
    throw new Error('Header component not found')
  }
  const footer = findComp(comps, selectedFooter)?.html ?? ''
  if (footer === undefined) {
    throw new Error('Footer component not found')
  }

  const combinedCSS = [
    findComp(comps, selectedHeader)?.css,
    findComp(comps, selectedFooter)?.css,
  ]
    .filter(Boolean)
    .join('\n\n')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-primary mb-6">
            {' '}
            Template Builder
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Template
              </label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2"
                onChange={(e) => setSelectedTemplate(e.target.value)}
                value={selectedTemplate}
              >
                <option value="">Select Template</option>
                {templates.map((d) => (
                  <option key={d.id} value={d.label}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Header
              </label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2"
                onChange={(e) => setSelectedHeader(e.target.value)}
                value={selectedHeader}
              >
                <option value="">Select Header</option>
                {comps.map(
                  (d) =>
                    d.comp_type === 'Headers' && (
                      <option key={d.id} value={d.label}>
                        {d.name}
                      </option>
                    ),
                )}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Footer
              </label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2"
                onChange={(e) => setSelectedFooter(e.target.value)}
                value={selectedFooter}
              >
                <option value="">Select Footer</option>
                {comps.map(
                  (d) =>
                    d.comp_type === 'Footers' && (
                      <option key={d.id} value={d.label}>
                        {d.name}
                      </option>
                    ),
                )}
              </select>
            </div>
          </div>
          <div className="flex space-x-4 mb-6">
            <button
              disabled={
                selectedTemplate === '' ||
                selectedHeader === '' ||
                selectedFooter === ''
              }
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center px-4 py-2 bg-primary-dark text-white rounded-lg hover:bg-primary-light disabled:opacity-50"
            >
              <Code className="w-4 h-4 mr-2" />
              {showPreview ? 'Show Code' : 'Show Preview'}
            </button>
          </div>
          {selectedTemplate !== '' &&
            selectedHeader !== '' &&
            selectedFooter !== '' &&
            (showPreview ? (
              <TemplatePreview
                template={template}
                css={combinedCSS}
                data={{ header: header, footer: footer }}
              />
            ) : (
              <TemplateCodeView
                template={template}
                css={combinedCSS}
                data={{ header: header, footer: footer }}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
