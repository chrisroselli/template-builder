import {useState} from 'react';
import {Code} from 'lucide-react';
import {PageRow} from "@/app/types/types";
import {PagePreview} from "@/app/components/Previews";
import PageView from "@/app/components/PageView";

export default function PageBuilder({ pages }: { pages: PageRow[] }) {
  const [selectedHero, setSelectedHero] = useState('');
  const [selectedServices, setSelectedServices] = useState('');
  const [showPreview, setShowPreview] = useState(true);

  const findTemplate = (selection: PageRow[], selectedItem: string) => {
    return selection.find(item => item.name === selectedItem);
  }

  const compArr = pages.map(item => item);
  const hero = findTemplate(compArr, selectedHero);
  const services = findTemplate(compArr, selectedServices);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-primary mb-6"> Page Builder</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Hero</label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2"
                onChange={(e) => setSelectedHero(e.target.value)}
                value={selectedHero}
              >
                <option value="">Select Hero</option>
                {pages.map((d) => (d.comp_type === 'hero' &&
                  <option key={d.id} value={d.name}>{d.name}</option>
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
                {pages.map((d) => (d.comp_type === 'services' &&
                  <option key={d.id} value={d.name}>{d.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex space-x-4 mb-6">
            <button
              disabled={selectedHero === '' && selectedServices === ''}
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center px-4 py-2 bg-primary-dark text-white rounded-lg hover:bg-primary-light disabled:hidden"
            >
              <Code className="w-4 h-4 mr-2"/>
              {showPreview ? 'Show Code' : 'Show Preview'}
            </button>
          </div>
          {showPreview ? (
            <PagePreview
              hero={hero ?? { html: '', css: '' }}
              services={services ?? { html: '', css: '' }}
            />
          ) : (
            <PageView
              hero={hero ?? { html: '', css: '' }}
              services={services ?? { html: '', css: '' }}
            />
          )}
        </div>
      </div>
    </div>
  );
}