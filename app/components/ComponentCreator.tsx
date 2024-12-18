import React, { useRef, useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, Save } from 'lucide-react'
import type { CompRow } from '../types/types'
import { submitComponent } from '@/app/actions/componentActions'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// TODO:
export default function ComponentCreator({ comps }: { comps: CompRow[] }) {
  const [isPending, startTransition] = useTransition()
  const [componentType, setComponentType] = useState('')
  const [activeTab, setActiveTab] = useState<string>('html')
  const [name, setName] = useState('')
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
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
      }
      startTransition(() => {
        router.refresh()
      })
    } else if (result.error) {
      toast.error(result.message)
      console.log(result.error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-3xl font-bold text-primary mb-6">
            Create Component
          </h1>
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
                      {comp_type === 'Services'
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
                rows={40}
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
                rows={40}
                placeholder="CSS"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                disabled={
                  componentType === '' ||
                  name === '' ||
                  html === '' ||
                  css === ''
                }
                onClick={() => setPreviewVisible(!previewVisible)}
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 cursor-pointer"
              >
                <Eye className="w-4 h-4 mr-2" />
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
                <Save className="w-4 h-4 mr-2" />
                {isPending ? 'Submitting...' : 'Submit Component'}
              </button>
            </div>
          </form>
          {previewVisible && (
            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Preview
              </h2>
              <div className="border rounded-lg overflow-hidden">
                <style>{css}</style>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
