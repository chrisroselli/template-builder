import {useState} from 'react';
import {Code, Copy, Download} from 'lucide-react';
import {TemplateCompRow, TemplateRow} from "@/app/types/types";
import TemplatePreview from "@/app/components/TemplatePreview";
import TemplateCodeView from "@/app/components/TemplateCodeView";
// TODO: Root CSS variables color picker

export default function TemplateBuilder({ templates, templateComps }: { templates: TemplateRow[], templateComps: TemplateCompRow[] }) {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [selectedHeader, setSelectedHeader] = useState('');
  const [selectedFooter, setSelectedFooter] = useState('');
  const [showPreview, setShowPreview] = useState(true);

  const findTemplate = (selection: TemplateRow[], selectedItem: string) => {
    return selection.find(item => item.label === selectedItem);
  }
  // const compArr = templates.map(item => item.name)

  const generateFullTemplate = () => {
    const template = findTemplate(templates, selectedTemplate);
    const header = findTemplate(templateComps, selectedHeader);
    const footer = findTemplate(templateComps, selectedFooter);

    // const combinedCSS = [header?.css,footer?.css]
    //   .filter(Boolean)
    //   .join('\n\n');

    return `
    ${template?.borders || ''}

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
    findTemplate(templateComps, selectedFooter)?.css,
    findTemplate(templateComps, selectedHeader)?.css

  ].filter(Boolean).join('\n\n');
  console.log(combinedCSS)

  const template = findTemplate(templates, selectedTemplate)?.borders;
  const header = findTemplate(templateComps, selectedHeader)?.html;
  const footer = findTemplate(templateComps, selectedFooter)?.html;


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-primary mb-6"> Template Builder</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Template</label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2"
                onChange={(e) => setSelectedTemplate(e.target.value)}
                value={selectedTemplate}
              >
                <option value="">Select Template</option>
                {templates.map((d) => (
                  <option key={d.id} value={d.label}>{d.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Header</label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2"
                onChange={(e) => setSelectedHeader(e.target.value)}
                value={selectedHeader}
              >
                <option value="">Select Header</option>
                {templateComps.map((d) => (  d.comp_type === 'header' &&
                  <option key={d.id} value={d.label}>{d.name}</option>
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
                {templateComps.map((d) => ( d.comp_type === 'footer' &&
                  <option key={d.id} value={d.label}>{d.name}</option>
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
          {selectedTemplate && (
            showPreview ? (
            <TemplatePreview template={template} data={{header: header, footer: footer}}/>
          ) : (
            <TemplateCodeView template={template} data={{header: header, footer: footer}}/>
          ))}
        </div>
      </div>
    </div>
  );
}