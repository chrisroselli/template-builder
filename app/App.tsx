'use client'
import { useState } from 'react'
import TemplateBuilder from './components/TemplateBuilder'
import PageBuilder from './components/PageBuilder'
import ComponentManager from './components/ComponentManager'
import ComponentCreator from './components/ComponentCreator'
import {
  LayoutDashboard,
  PanelsTopLeft,
  PanelTop,
  PlusCircle,
} from 'lucide-react'
import { CompRow, TemplateRow } from '@/app/types/types'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App({
  templates,
  comps,
}: {
  templates: TemplateRow[]
  comps: CompRow[]
}) {
  const [activeView, setActiveView] = useState<
    'template' | 'page' | 'manager' | 'creator'
  >('template')

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex space-x-8">
                  <button
                    onClick={() => setActiveView('template')}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      activeView === 'template'
                        ? 'border-primary-dark text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    <PanelsTopLeft className="w-4 h-4 mr-2" />
                    Template Builder
                  </button>
                  <button
                    onClick={() => setActiveView('page')}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      activeView === 'page'
                        ? 'border-primary-dark text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    <PanelTop className="w-4 h-4 mr-2" />
                    Page Builder
                  </button>
                  <button
                    onClick={() => setActiveView('manager')}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      activeView === 'manager'
                        ? 'border-primary-dark text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    <LayoutDashboard className="w-4 h-4 mr-2" />
                    Component Manager
                  </button>
                  <button
                    onClick={() => setActiveView('creator')}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      activeView === 'creator'
                        ? 'border-primary-dark text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    <PlusCircle className="w-4 h-4 mr-2" />
                    Create Component
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {activeView === 'template' ? (
          <TemplateBuilder templates={templates} comps={comps} />
        ) : activeView === 'page' ? (
          <PageBuilder comps={comps} />
        ) : activeView === 'manager' ? (
          <ComponentManager comps={comps} />
        ) : (
          <ComponentCreator comps={comps} />
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        theme="colored"
      />
    </>
  )
}

export default App
