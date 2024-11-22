'use client'
import {useState} from 'react';
import TemplateBuilder from './TemplateBuilder';
import PageBuilder from './PageBuilder';
import ComponentManager from './ComponentManager';
import ComponentCreator from './ComponentCreator';
import {LayoutDashboard, PanelsTopLeft, PanelTop, PlusCircle} from 'lucide-react';
import {PageRow, TemplateRow} from "@/app/types/types";


function App( { pages, templates }: { pages: PageRow[], templates: TemplateRow[] } ) {
  const [activeView, setActiveView] = useState<'template' | 'page' | 'manager' | 'creator'>('template');

  return (
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
                  <PanelsTopLeft className="w-4 h-4 mr-2"/>
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
                  <PanelTop className="w-4 h-4 mr-2"/>
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
                  <LayoutDashboard className="w-4 h-4 mr-2"/>
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
                  <PlusCircle className="w-4 h-4 mr-2"/>
                  Create Component
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {activeView === 'template' ? (
        <TemplateBuilder templates={templates}/>
      ) : activeView === 'page' ? (
        <PageBuilder pages={pages}/>
      ) : activeView === 'manager' ? (
        <ComponentManager data={pages}/>
      ) : (
        <ComponentCreator/>
      )}
    </div>
  );
}

export default App;