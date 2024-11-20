'use client'
import {useEffect, useState} from 'react';
import TemplateBuilder from './TemplateBuilder';
import PageBuilder from './PageBuilder';
import ComponentManager from './ComponentManager';
import ComponentCreator from './ComponentCreator';
import {LayoutDashboard, PanelsTopLeft, PanelTop, PlusCircle} from 'lucide-react';

interface ExampleData {
  id: number;
  data: {
    name: string;
    age: number;
    skills: string[];
  };
}

function App() {
  const [activeView, setActiveView] = useState<'template' | 'page' | 'manager' | 'creator'>('template');

  const [data, setData] = useState<ExampleData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result: ExampleData[] = await response.json();
        setData(result);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
      <h1>Data from PostgreSQL</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>Name: {item.data.name}</p>
            <p>Age: {item.data.age}</p>
            <p>Skills: {item.data.skills.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;