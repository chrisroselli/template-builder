import React, { useRef, useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, Save } from 'lucide-react'
import type { CompRow } from '../types/types'
import { submitComponent } from '@/app/actions/componentActions'
import { toast } from 'react-toastify'
import ResetBtn from '@/app/components/ResetBtn'
import { usePersistedState } from '@/app/hooks/usePersistedState'
// TODO: Uppercase comp name on submit
// TODO: Disable submit button when showing preview
export default function ComponentCreator({ comps }: { comps: CompRow[] }) {
  const [isPending, startTransition] = useTransition()
  const [componentType, setComponentType] = usePersistedState(
    'Add Component componentType',
    '',
  )
  const [activeTab, setActiveTab] = usePersistedState(
    'Add Component activeTab',
    'html',
  )
  const [name, setName] = usePersistedState('Add Component name', '')
  const [html, setHtml] = usePersistedState('Add Component HTML', '')
  const [css, setCss] = usePersistedState('Add Component CSS', '')
  const [js, setJs] = usePersistedState('Add Component JS', '')

  const [previewVisible, setPreviewVisible] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const router = useRouter()

  async function handleSubmit(formData: FormData) {
    const result = await submitComponent(formData)
    if (result.success) {
      toast.success(result.message, {
        style: {
          background: '#4a8332',
        },
      })
      console.log(result.message)
      if (formRef.current) {
        formRef.current.reset()
        setComponentType('')
        setName('')
        setHtml('')
        setCss('')
        setJs('')
      }
      startTransition(() => {
        router.refresh()
      })
    } else if (result.error) {
      toast.error(result.message)
      console.log(result.error)
    }
  }

  const isSelection =
    componentType !== '' ||
    name !== '' ||
    html !== '' ||
    css !== '' ||
    js !== ''

  const reset = () => {
    setActiveTab('html')
    setComponentType('')
    setName('')
    setHtml('')
    setCss('')
    setJs('')
  }

  return (
    <>
      <div className="text-base font-semibold text-primary mb-4">
        Add Component
      </div>
      <form ref={formRef} action={handleSubmit} className="space-y-6">
        <div className="flex gap-4">
          <select
            id="componentType"
            name="componentType"
            required
            className="text-sm w-full border border-gray-300 rounded-lg p-1 h-9 basis-1/4"
            onChange={(e) => setComponentType(e.target.value)}
            value={componentType}
          >
            <option value="">Select Component Type</option>
            {[...new Set(comps.map(({ comp_type }) => comp_type))].map(
              (comp_type, id) => (
                <option key={id} value={comp_type}>
                  {comp_type === 'Services' || comp_type === 'Why Choose'
                    ? comp_type
                    : comp_type.slice(0, -1)}
                </option>
              ),
            )}
          </select>
          <input
            id="componentName"
            type="text"
            name="componentName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-sm w-full border border-gray-300 rounded-lg p-2 h-9 basis-1/4"
            placeholder="Component Name"
            required
          />
        </div>
        {!previewVisible && (
          <>
            <div className="flex space-x-4 mb-2">
              <button
                type="button"
                className={`py-2 px-4 font-medium text-sm ${
                  activeTab === 'html'
                    ? 'border-b-2 border-primary-dark text-primary-dark'
                    : 'text-gray-500'
                }`}
                onClick={() => setActiveTab('html')}
              >
                HTML
              </button>
              <button
                type="button"
                className={`py-2 px-4 font-medium text-sm ${
                  activeTab === 'css'
                    ? 'border-b-2 border-primary-dark text-primary-dark'
                    : 'text-gray-500'
                }`}
                onClick={() => setActiveTab('css')}
              >
                CSS
              </button>
              <button
                type="button"
                className={`py-2 px-4 font-medium text-sm ${
                  activeTab === 'js'
                    ? 'border-b-2 border-primary-dark text-primary-dark'
                    : 'text-gray-500'
                }`}
                onClick={() => setActiveTab('js')}
              >
                JS (Optional)
              </button>
            </div>
            <div className="text-sm">
              <textarea
                id="html"
                name="html"
                required
                value={html}
                onChange={(e) => setHtml(e.target.value)}
                className={`bg-gray-700 text-white w-full border border-gray-300 rounded-lg p-2 font-mono text-sm ${
                  activeTab === 'html' ? 'block' : 'hidden'
                }`}
                rows={30}
                placeholder="HTML"
              />

              <textarea
                id="css"
                name="css"
                required
                value={css}
                onChange={(e) => setCss(e.target.value)}
                className={`bg-gray-700 text-white w-full border border-gray-300 rounded-lg p-2 font-mono text-sm ${
                  activeTab === 'css' ? 'block' : 'hidden'
                }`}
                rows={30}
                placeholder="CSS"
              />

              <textarea
                id="js"
                name="js"
                value={js}
                onChange={(e) => setJs(e.target.value)}
                className={`bg-gray-700 text-white w-full border border-gray-300 rounded-lg p-2 font-mono text-sm ${
                  activeTab === 'js' ? 'block' : 'hidden'
                }`}
                rows={30}
                placeholder="JS"
              />
            </div>
          </>
        )}
        <div className="flex space-x-1">
          <button
            type="button"
            disabled={
              componentType === '' || name === '' || html === '' || css === ''
            }
            onClick={() => setPreviewVisible(!previewVisible)}
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 cursor-pointer"
          >
            <Eye className="w-4 h-4 mr-1" />
            {previewVisible ? 'Hide Preview' : 'Show Preview'}
          </button>
          <button
            type="submit"
            disabled={
              isPending ||
              componentType === '' ||
              name === '' ||
              html === '' ||
              css === ''
            }
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-dark hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark disabled:opacity-50 cursor-pointer"
          >
            <Save className="w-4 h-4 mr-1" />
            {isPending ? 'Submitting...' : 'Submit Component'}
          </button>
          <ResetBtn reset={reset} disabled={!isSelection} />
        </div>
      </form>
      {previewVisible && (
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Preview</h2>
          <div className="border rounded-md overflow-hidden">
            <iframe
              srcDoc={`<style>${css}</style>${html}<script>${js}</script>`}
              className="w-full h-lvh"
              title="Preview"
            />
          </div>
        </div>
      )}
    </>
  )
}
