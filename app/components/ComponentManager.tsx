import React, {useState} from 'react';
import ComponentView from './ComponentView';
import {Code} from 'lucide-react';
import {PageCompRow} from "@/app/types/types";

type ComponentType = 'headers' | 'hero' | 'services' | 'footers';

export default function ComponentManager({ data }: { data: PageCompRow[] }) {
  const [activeTab, setActiveTab] = useState<ComponentType>('headers');
  const [showCode, setShowCode] = useState<string | null>(null);

  const tabs: { id: ComponentType; label: string }[] = [
    { id: 'headers', label: 'Headers' },
    { id: 'hero', label: 'Heros' },
    { id: 'services', label: 'Services' },
    { id: 'footers', label: 'Footers' },

  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-3xl font-bold text-primary mb-6">Component Manager</h1>
          
          <div className="border-b border-gray-200 mb-6">
            <nav className="flex space-x-8">
              {tabs.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === id
                      ? 'border-primary-dark text-primary-dark'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {data
              .filter((item) => item.comp_type === activeTab)
              .map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setShowCode(showCode === item.html ? null : item.html)}
                        className="flex items-center px-3 py-1 bg-primary-dark text-white rounded hover:bg-primary-light"
                      >
                        <Code className="w-4 h-4 mr-1" />
                        {showCode === item.html ? 'Hide Code' : 'View Code'}
                      </button>
                    </div>
                  </div>

                  {showCode === item.html ? (
                    <div className="mb-4">
                      <ComponentView html={item.html} css={item.css} />
                    </div>
                  ) : (
                    <div className="border rounded-lg overflow-hidden bg-white">
                      <style>{item.css}</style>
                      <div dangerouslySetInnerHTML={{ __html: item.html }} />
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}