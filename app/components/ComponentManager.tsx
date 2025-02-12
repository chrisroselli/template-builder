import React, { useState } from 'react'
import { Code, Monitor, Pencil } from 'lucide-react'
import { DeleteComponentButton } from '@/app/components/DeleteComponentButton'
import { CompRow } from '@/app/types/types'
import { usePersistedState } from '@/app/hooks/usePersistedState'
import ComponentView from '@/app/components/ComponentView'
import ResizableIframe from './ResizableIframe'
import { updateComponent } from '@/app/actions/componentActions'
//TODO: Disable modal save button if no changes*
//TODO: Add processing spinner and success/error handling to save button
//TODO: Reset modal tab to html when modal is closed
export default function ComponentManager({ comps }: { comps: CompRow[] }) {
  const [showCode, setShowCode] = useState<string | null>(null)
  const [activeTab, setActiveTab] = usePersistedState(
    'Component Manager activeTab',
    'Headers',
  )
  const [modalActiveTab, setModalActiveTab] = usePersistedState(
    'Modal activeTab',
    'html',
  )

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

  const [editingComponent, setEditingComponent] = useState<CompRow | null>(null)
  const [formValues, setFormValues] = useState({
    name: '',
    html: '',
    css: '',
    js: '',
  })

  const handleOpenEditModal = (component: CompRow) => {
    setEditingComponent(component)
    setFormValues({
      name: component.name,
      html: component.html,
      css: component.css,
      js: component.js,
    })
  }

  const handleCloseModal = () => {
    setEditingComponent(null)
    setModalActiveTab('html')
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  const handleModalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!editingComponent) return

    const formData = new FormData()
    formData.append('componentName', formValues.name)
    formData.append('html', formValues.html)
    formData.append('css', formValues.css)
    formData.append('js', formValues.js)

    const response = await updateComponent(editingComponent.id, formData)
    if (response.success) {
      alert('Component updated successfully.')
      // Optionally update your components list or state here.
      handleCloseModal()
    } else {
      alert('Failed to update component: ' + response.message)
    }
  }

  const disableModalSaveBtn = () => {
    if (!editingComponent) return true
    return (
      formValues.name === editingComponent.name &&
      formValues.html === editingComponent.html &&
      formValues.css === editingComponent.css &&
      formValues.js === editingComponent.js
    )
  }

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
              className="bg-gray-50 rounded-lg p-6 border shadow-md"
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
                    {showCode === item.html ? (
                      <Monitor className="w-4 h-4" />
                    ) : (
                      <Code className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    disabled={item.status}
                    onClick={() => handleOpenEditModal(item)}
                    className="flex items-center px-3 py-1 bg-primary text-white rounded hover:bg-primary-default_light disabled:hidden"
                  >
                    <Pencil className="w-4 h-4" />
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
      {editingComponent && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={handleCloseModal}
          ></div>
          <div className="bg-white p-6 rounded-xl shadow-lg z-10 w-11/12 md:w-3/4">
            <h2 className="text-2xl font-semibold mb-4 text-primary-dark">
              Edit Component
            </h2>
            <form onSubmit={handleModalSubmit}>
              <div className="mb-4">
                <label className="block text-base font-medium mb-1 text-primary">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formValues.name}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2"
                  required
                />
              </div>

              <div className="flex space-x-4 mb-2">
                <button
                  type="button"
                  className={`py-2 px-4 font-medium text-sm ${
                    modalActiveTab === 'html'
                      ? 'border-b-2 border-primary-dark text-primary-dark'
                      : 'text-gray-500'
                  }`}
                  onClick={() => setModalActiveTab('html')}
                >
                  HTML
                </button>
                <button
                  type="button"
                  className={`py-2 px-4 font-medium text-sm ${
                    modalActiveTab === 'css'
                      ? 'border-b-2 border-primary-dark text-primary-dark'
                      : 'text-gray-500'
                  }`}
                  onClick={() => setModalActiveTab('css')}
                >
                  CSS
                </button>
                <button
                  type="button"
                  className={`py-2 px-4 font-medium text-sm ${
                    modalActiveTab === 'js'
                      ? 'border-b-2 border-primary-dark text-primary-dark'
                      : 'text-gray-500'
                  }`}
                  onClick={() => setModalActiveTab('js')}
                >
                  JS (Optional)
                </button>
              </div>

              <div className="mb-4">
                <textarea
                  name="html"
                  value={formValues.html}
                  onChange={handleInputChange}
                  placeholder="HTML"
                  className={`bg-gray-700 text-white w-full border border-gray-300 rounded-lg p-2 font-mono text-sm ${
                    modalActiveTab === 'html' ? 'block' : 'hidden'
                  }`}
                  rows={25}
                  required
                />

                <textarea
                  name="css"
                  value={formValues.css}
                  onChange={handleInputChange}
                  placeholder="CSS"
                  className={`bg-gray-700 text-white w-full border border-gray-250 rounded-lg p-2 font-mono text-sm ${
                    modalActiveTab === 'css' ? 'block' : 'hidden'
                  }`}
                  rows={25}
                  required
                />

                <textarea
                  name="js"
                  value={formValues.js || ''}
                  onChange={handleInputChange}
                  placeholder="JS"
                  className={`bg-gray-700 text-white w-full border border-gray-300 rounded-lg p-2 font-mono text-sm ${
                    modalActiveTab === 'js' ? 'block' : 'hidden'
                  }`}
                  rows={25}
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 text-white bg-primary rounded hover:bg-primary-default_light"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={disableModalSaveBtn()}
                  className="px-4 bg-primary-dark text-white rounded hover:bg-primary-light disabled:opacity-50"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
