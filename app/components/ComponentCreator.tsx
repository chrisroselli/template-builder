import React, {useState} from 'react';
import {Eye, Save} from 'lucide-react';
import type {Types} from '../types/types';

type ComponentType = 'headers' | 'hero' | 'services' | 'footers';

export default function ComponentCreator() {
  const [componentType, setComponentType] = useState<ComponentType>('headers');
  const [name, setName] = useState('');
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [previewVisible, setPreviewVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newComponent: Types = {
      componentType,
      id: "",
      name,
      code: html,
      css
    };

    // In a real application, this would save to a backend
    console.log('New component:', newComponent);
    
    // Reset form
    setName('');
    setHtml('');
    setCss('');
    setPreviewVisible(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-3xl font-bold text-primary mb-6">Create Component</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Component Type
              </label>
              <select
                value={componentType}
                onChange={(e) => setComponentType(e.target.value as ComponentType)}
                className="w-full border border-gray-300 rounded-lg p-2"
              >
                <option value="headers">Header</option>
                <option value="features">Feature</option>
                <option value="footers">Footer</option>
                <option value="ctas">CTA</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Component Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="e.g., Modern Navigation"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                HTML
              </label>
              <textarea
                value={html}
                onChange={(e) => setHtml(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 font-mono text-sm"
                rows={10}
                placeholder="<div class='example'>...</div>"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CSS
              </label>
              <textarea
                value={css}
                onChange={(e) => setCss(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 font-mono text-sm"
                rows={10}
                placeholder=".example { ... }"
              />
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setPreviewVisible(!previewVisible)}
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                <Eye className="w-4 h-4 mr-2" />
                {previewVisible ? 'Hide Preview' : 'Show Preview'}
              </button>

              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-dark hover:bg-primary-light"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Component
              </button>
            </div>
          </form>

          {previewVisible && (
            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Preview</h2>
              <div className="border rounded-lg overflow-hidden">
                <style>{css}</style>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}