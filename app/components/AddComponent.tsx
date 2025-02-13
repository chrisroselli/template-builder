import React, { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Check, Eye, Loader2, Save } from 'lucide-react'
import { submitComponent } from '@/app/actions/componentActions'
import ResetBtn from '@/app/components/ResetBtn'
import { usePersistedState } from '@/app/hooks/usePersistedState'
import confetti from 'canvas-confetti'
// TODO: Uppercase comp name on submit

export default function AddComponent() {
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'pending' | 'success'
  >('idle')
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
  const submitButtonRef = useRef<HTMLButtonElement>(null)
  const router = useRouter()

  const btnConfetti = ['#4a8332', '#48403e', '#5d9147', '#61534f']
  async function handleSubmit(formData: FormData) {
    setSubmitStatus('pending')
    const result = await submitComponent(formData)
    if (result.success) {
      console.log(result.message)
      if (formRef.current) {
        formRef.current.reset()
        setComponentType('')
        setName('')
        setHtml('')
        setCss('')
        setJs('')
      }
      setTimeout(() => {
        setSubmitStatus('success')
        if (submitButtonRef.current) {
          const rect = submitButtonRef.current.getBoundingClientRect()
          confetti({
            colors: btnConfetti,
            particleCount: 150,
            angle: 60,
            spread: 55,
            origin: {
              x: (rect.left + rect.width / 2) / window.innerWidth,
              y: (rect.top + rect.height / 2) / window.innerHeight,
            },
          })
        }
        setTimeout(() => setSubmitStatus('idle'), 2000)
      }, 2000)
      router.refresh()
    } else if (result.error) {
      console.log(result.error)
      setSubmitStatus('idle')
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
    setPreviewVisible(false)
    setComponentType('')
    setName('')
    setHtml('')
    setCss('')
    setJs('')
  }
  const customOrderTypes = [
    { key: 1, label: 'Headers' },
    { key: 2, label: 'Footers' },
    { key: 3, label: 'Heros' },
    { key: 4, label: 'Services' },
    { key: 5, label: 'Why Choose' },
    { key: 6, label: 'Reviews' },
    { key: 7, label: 'Before & After' },
    { key: 8, label: 'Text Block' },
    { key: 9, label: 'Video Block' },
  ]

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
            {customOrderTypes
              .map((comp_type) => comp_type)
              .map((comp_type) => (
                <option key={comp_type.key} value={comp_type.label}>
                  {comp_type.label}
                </option>
              ))}
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
            ref={submitButtonRef}
            type="submit"
            disabled={
              submitStatus === 'pending' ||
              previewVisible ||
              componentType === '' ||
              name === '' ||
              html === '' ||
              css === ''
            }
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-dark hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark disabled:opacity-50 cursor-pointer"
          >
            {submitStatus === 'pending' ? (
              <Loader2 className="w-4 h-4 mr-1 animate-spin" />
            ) : submitStatus === 'success' ? (
              <Check className="w-4 h-4 mr-1" />
            ) : (
              <Save className="w-4 h-4 mr-1" />
            )}
            {submitStatus === 'pending'
              ? 'Submitting...'
              : submitStatus === 'success'
                ? 'Success'
                : 'Submit Component'}
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
