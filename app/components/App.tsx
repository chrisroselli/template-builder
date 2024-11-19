'use client'
import {useEffect, useState} from 'react';
import TemplateBuilder from './TemplateBuilder';
import PageBuilder from './PageBuilder';
import ComponentManager from './ComponentManager';
import ComponentCreator from './ComponentCreator';
import {LayoutDashboard, PanelsTopLeft, PanelTop, PlusCircle} from 'lucide-react';
import {Template} from "../types/types";


function App() {
  const [activeView, setActiveView] = useState<'template' | 'page' | 'manager' | 'creator'>('template');

  const [templateData, setTemplateData] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        console.log(result.data)
        setTemplateData(result.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }
  console.log(templateData)
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
                  <PanelsTopLeft className="w-4 h-4 mr-2"/>
                  Template Builder
                </button>
                <button
                  onClick={() => setActiveView('page')}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    activeView === 'page'
                      ? 'border-blue-500 text-gray-900'
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
                      ? 'border-blue-500 text-gray-900'
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
      ) : activeView === 'page' ? (
        <PageBuilder/>
      ) : activeView === 'manager' ? (
        <ComponentManager/>
      ) : (
        <ComponentCreator/>
      )}
      <ul>
        {templateData.map(d => (
          <li key={d.id}>{d.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;