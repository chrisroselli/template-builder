import {useState} from 'react';
import {Code, Copy, Download} from 'lucide-react';
import {templates} from '../data/templates';
import {TemplatePreview} from './Previews';
import CodeView from './CodeView';
import type {Types} from '../types/types';

export default function TemplateBuilder() {
  const [selectedHeader, setSelectedHeader] = useState('');
  const [selectedFooter, setSelectedFooter] = useState('');
  const [showPreview, setShowPreview] = useState(true);

  const findTemplate = (section: Types[], code: string) =>
    section.find(item => item.code === code);

  const generateFullTemplate = () => {
    const header = findTemplate(templates.headers, selectedHeader);
    const footer = findTemplate(templates.footers, selectedFooter);
    console.log(header?.code)
    const combinedCSS = [header?.css, footer?.css]
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
    ${header?.code || ''}
    ${footer?.code || ''}
</body>
</html>`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateFullTemplate());
  };

  const downloadTemplate = () => {
    const blob = new Blob([generateFullTemplate()], { type: 'text/html' });
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
    findTemplate(templates.headers, selectedHeader)?.css,
    findTemplate(templates.footers, selectedFooter)?.css
  ].filter(Boolean).join('\n\n');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Template Builder</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Header</label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2"
                onChange={(e) => setSelectedHeader(e.target.value)}
                value={selectedHeader}
              >
                <option value="">Select a header</option>
                {templates.headers.map((header, index) => (
                  <option key={index} value={header.code}>{header.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Footer</label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2"
                onChange={(e) => setSelectedFooter(e.target.value)}
                value={selectedFooter}
              >
                <option value="">Select a footer</option>
                {templates.footers.map((footer, index) => (
                  <option key={index} value={footer.code}>{footer.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center px-4 py-2 bg-primary-dark text-white rounded-lg hover:bg-primary-light"
            >
              <Code className="w-4 h-4 mr-2"/>
              {showPreview ? 'Show Code' : 'Show Preview'}
            </button>
            <button
              onClick={copyToClipboard}
              className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-default_light"
            >
              <Copy className="w-4 h-4 mr-2"/>
              Copy Code
            </button>
            <button
              onClick={downloadTemplate}
              className="flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-700"
            >
              <Download className="w-4 h-4 mr-2"/>
              Download
            </button>
          </div>

          {showPreview ? (
            <TemplatePreview
              header={findTemplate(templates.headers, selectedHeader)?.code || ''}
              footer={findTemplate(templates.footers, selectedFooter)?.code || ''}
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