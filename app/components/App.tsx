'use client'
import {useState} from 'react';
import TemplateBuilder from './TemplateBuilder';
import ComponentManager from './ComponentManager';
import ComponentCreator from './ComponentCreator';
import {Layers, LayoutGrid, PlusCircle} from 'lucide-react';
import HomePageBuilder from "./HomePageBuilder";


function App() {
  const [activeView, setActiveView] = useState<'template' | 'home' | 'manager' | 'creator'>('template');

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
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  <LayoutGrid className="w-4 h-4 mr-2"/>
                  Template Builder
                </button>
                <button
                  onClick={() => setActiveView('home')}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    activeView === 'home'
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  <LayoutGrid className="w-4 h-4 mr-2"/>
                  Home Page Builder
                </button>
                <button
                  onClick={() => setActiveView('manager')}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    activeView === 'manager'
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  <Layers className="w-4 h-4 mr-2"/>
                  Component Manager
                </button>
                <button
                  onClick={() => setActiveView('creator')}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    activeView === 'creator'
                      ? 'border-blue-500 text-gray-900'
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
        <TemplateBuilder/>
      ) : activeView === 'home' ? (
        <HomePageBuilder/>
      ) : activeView === 'manager' ? (
        <ComponentManager/>
      ) : (
        <ComponentCreator/>
      )}
    </div>
  );
}

export default App;