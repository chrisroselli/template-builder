import {useState} from 'react';
import {Code, Copy, Download} from 'lucide-react';
import {templates} from '../data/templates';
import CodeView from './CodeView';
import type {Template, Types} from '../types/types';
import {PagePreview} from "@/app/components/Previews";

interface PageBuilderProps {data?: Template[]}

export default function PageBuilder({data}: PageBuilderProps) {
  const [selectedFeature, setSelectedFeature] = useState('');
  const [selectedCta, setSelectedCta] = useState('');
  const [showPreview, setShowPreview] = useState(true);

  const findTemplate = (section: Types[], code: string) =>
    section.find(item => item.code === code);

  const generateFullTemplate = () => {
    const feature = findTemplate(templates.features, selectedFeature);
    const cta = findTemplate(templates.ctas, selectedCta);

    const combinedCSS = [feature?.css, cta?.css]
      .filter(Boolean)
      .join('\n\n');

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Template</title>
    <style>
      ${combinedCSS}
    </style>
</head>
<body>
    ${feature?.code || ''}
    ${cta?.code || ''}
</body>
</html>`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateFullTemplate());
  };

  const downloadTemplate = () => {
    const blob = new Blob([generateFullTemplate()], {type: 'text/html'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'template.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const combinedCSS = [
    findTemplate(templates.features, selectedFeature)?.css,
    findTemplate(templates.ctas, selectedCta)?.css,
  ].filter(Boolean).join('\n\n');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6"> Page Builder</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Hero</label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2"
                onChange={(e) => setSelectedFeature(e.target.value)}
                value={selectedFeature}
              >
                <option value="">Select features</option>
                {data?.map((d) => (
                  <option key={d.id} value={d.name}>{d.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Call to Action</label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2"
                onChange={(e) => setSelectedCta(e.target.value)}
                value={selectedCta}
              >
                <option value="">Select CTA</option>
                {templates.ctas.map((cta, index) => (
                  <option key={index} value={cta.code}>{cta.name}</option>
                ))}
              </select>
            </div>

          </div>

          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Code className="w-4 h-4 mr-2"/>
              {showPreview ? 'Show Code' : 'Show Preview'}
            </button>
            <button
              onClick={copyToClipboard}
              className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              <Copy className="w-4 h-4 mr-2"/>
              Copy Code
            </button>
            <button
              onClick={downloadTemplate}
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <Download className="w-4 h-4 mr-2"/>
              Download
            </button>
          </div>

          {showPreview ? (
            <PagePreview
              feature={findTemplate(templates.features, selectedFeature)?.code || ''}
              cta={findTemplate(templates.ctas, selectedCta)?.code || ''}
              css={combinedCSS}
            />
          ) : (
            <CodeView code={generateFullTemplate()}/>
          )}
        </div>
      </div>
    </div>
  );
}