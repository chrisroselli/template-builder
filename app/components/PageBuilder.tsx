import {useState} from 'react';
import {Code} from 'lucide-react';
import {PageData, PageRow} from "@/app/types/database";
import {PagePreview} from "@/app/components/Previews";
import CodeView from "@/app/components/CodeView";


export default function PageBuilder( { data }: { data: PageRow[] }) {
  const [selectedHero, setSelectedHero] = useState('');
  const [selectedServices, setSelectedServices] = useState('');
  const [showPreview, setShowPreview] = useState(true);

  const findTemplate = (selection: PageData[], selectedItem: string) => {
    return selection.find(item => item.name === selectedItem);
  }

  const compArr = data.map(item => item.data)

  const generateFullTemplate = () => {
    const hero = findTemplate(compArr, selectedHero);
    const services = findTemplate(compArr, selectedServices);

    const combinedCSS = [hero?.css,services?.css]
      .filter(Boolean)
      .join('\n\n');

    return `<style>
    ${combinedCSS}
    </style>

    ${hero?.html || ''}
    ${services?.html || ''}
    `;
  };

  // const copyToClipboard = () => {
  //   navigator.clipboard.writeText(generateFullTemplate());
  // };

  // const downloadTemplate = () => {
  //   const blob = new Blob([generateFullTemplate()], {type: 'text/html'});
  //   const url = URL.createObjectURL(blob);
  //   const a = document.createElement('a');
  //   a.href = url;
  //   a.download = 'template.html';
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  //   URL.revokeObjectURL(url);
  // };

  const combinedCSS = [
    findTemplate(compArr, selectedHero)?.css,
    findTemplate(compArr, selectedServices)?.css,
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
                onChange={(e) => setSelectedHero(e.target.value)}
                value={selectedHero}
              >
                <option value="">Select Hero</option>
                {data.map((d) => (d.comp_type === 'hero' &&
                  <option key={d.id} value={d.data.name}>{d.data.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Services</label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2"
                onChange={(e) => setSelectedServices(e.target.value)}
                value={selectedServices}
              >
                <option value="">Select Services</option>
                {data.map((d) => (d.comp_type === 'services' &&
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
            {/*<button*/}
            {/*  onClick={copyToClipboard}*/}
            {/*  className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-default_light"*/}
            {/*>*/}
            {/*  <Copy className="w-4 h-4 mr-2"/>*/}
            {/*  Copy Code*/}
            {/*</button>*/}
            {/*<button*/}
            {/*  onClick={downloadTemplate}*/}
            {/*  className="flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-700"*/}
            {/*>*/}
            {/*  <Download className="w-4 h-4 mr-2"/>*/}
            {/*  Download*/}
            {/*</button>*/}
          </div>
          {showPreview ? (
            <PagePreview
              hero={findTemplate(compArr, selectedHero) || ''}
              services={findTemplate(compArr, selectedServices) || ''}
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