import {useState} from 'react';
import {Code, Copy, Download} from 'lucide-react';
import {PageData, PageRow} from "@/app/types/types";
import {TemplatePreview} from "@/app/components/Previews";
import CodeView from "@/app/components/CodeView";

export default function TemplateBuilder({ data }: { data: PageRow[] }) {
  const [selectedHeader, setSelectedHeader] = useState('');
  const [selectedFooter, setSelectedFooter] = useState('');
  const [showPreview, setShowPreview] = useState(true);

  const findTemplate = (selection: PageData[], selectedItem: string) => {
    return selection.find(item => item.name === selectedItem);
  }

  const compArr = data.map(item => item.data)

  const generateFullTemplate = () => {
    const header = findTemplate(compArr, selectedHeader);
    const footer = findTemplate(compArr, selectedFooter);

    const combinedCSS = [header?.css,footer?.css]
      .filter(Boolean)
      .join('\n\n');

    return `<style>
    ${combinedCSS}
    </style>

    ${header?.html || ''}
    ${footer?.html || ''}
    `;
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
    findTemplate(compArr, selectedHeader)?.css,
    findTemplate(compArr, selectedFooter)?.css,
  ].filter(Boolean).join('\n\n');
  const header = findTemplate(compArr, selectedHeader)?.html;
  const footer = findTemplate(compArr, selectedFooter)?.html;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-primary mb-6"> Template Builder</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Header</label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2"
                onChange={(e) => setSelectedHeader(e.target.value)}
                value={selectedHeader}
              >
                <option value="">Select Header</option>
                {data.map((d) => (d.comp_type === 'header' &&
                  <option key={d.id} value={d.data.name}>{d.data.name}</option>
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
                <option value="">Select Footer</option>
                {data.map((d) => (d.comp_type === 'footer' &&
                  <option key={d.id} value={d.data.name}>{d.data.name}</option>
                ))}
              </select>
            </div>
            {/*<div>*/}
            {/*  <label className="block text-sm font-medium text-gray-700 mb-2">Call to Action</label>*/}
            {/*  <select*/}
            {/*    className="w-full border border-gray-300 rounded-lg p-2"*/}
            {/*    onChange={(e) => setSelectedCta(e.target.value)}*/}
            {/*    value={selectedCta}*/}
            {/*  >*/}
            {/*    <option value="">Select CTA</option>*/}
            {/*    {templates.ctas.map((cta, index) => (*/}
            {/*      <option key={index} value={cta.code}>{cta.name}</option>*/}
            {/*    ))}*/}
            {/*  </select>*/}
            {/*</div>*/}
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
              header={header || ''}
              footer={footer || ''}
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