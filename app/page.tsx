'use client';
import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {gsBeforeBorders, gsBorders, gsTemplateCSS, gsInlineCSS, gsIndexFile, defaultHeader, defaultFooter, staticHero} from "@/app/api/php/phpFiles";

interface Template {
  id: string;
  name: string;
  beforeBordersFile?: string;
  bordersFile: string;
  templateCSS?: string;
  inlineCSS?: string;
  indexFile?: string;
}

interface ComponentOption {
  id: string;
  name: string;
  code: string;
}

interface Component {
  id: string;
  name: string;
  options: ComponentOption[];
  placeholder: string;
}

interface SelectedComponent {
  id: string;
  option: string;
}

const templates: Template[] = [
  {
    id: 'gs',
    name: 'Gutter Shutter',
    beforeBordersFile: gsBeforeBorders,
    bordersFile: gsBorders,
    templateCSS: gsTemplateCSS,
    inlineCSS: gsInlineCSS,
    indexFile: gsIndexFile
  },
  {
    id: 'krs',
    name: 'Klaus Roofing Systems',
    beforeBordersFile: gsBeforeBorders,
    bordersFile: gsBorders,
    templateCSS: gsTemplateCSS,
    inlineCSS: gsInlineCSS
  },
  {
    id: 'newleaf',
    name: 'New Leaf',
    beforeBordersFile: gsBeforeBorders,
    bordersFile: gsBorders,
    templateCSS: gsTemplateCSS,
    inlineCSS: gsInlineCSS
  },
];

const componentOptions: Component[] = [
  {
    id: 'header',
    name: 'Header',
    placeholder: '{{header}}',
    options: [
      { id: 'default', name: 'Default Header', code: defaultHeader },
      { id: 'slim', name: 'Slim', code: defaultHeader },
      { id: 'bold', name: 'Bold', code: defaultHeader },
    ]
  },
  {
    id: 'hero',
    name: 'Hero',
    placeholder: '{{hero}}',
    options: [
      { id: 'static', name: 'Static Hero', code: staticHero },
      { id: 'slider', name: 'Slider', code: defaultHeader },
      { id: 'form', name: 'Form', code: defaultHeader },
    ]
  },
  {
    id: 'services',
    name: 'Services section',
    placeholder: '{{services}}',
    options: [
      { id: 'two', name: 'Two Columns', code: defaultHeader },
      { id: 'three', name: 'Three Columns', code: defaultHeader },
      { id: 'four', name: 'Four Columns', code: defaultHeader },
    ]
  },
  {
    id: 'reviews',
    name: 'Reviews section',
    placeholder: '{{reviews}}',
    options: [
      { id: 'vertSlider', name: 'Vertical Slider', code: defaultHeader },
      { id: 'horizSlider', name: 'Horizontal Slider', code: defaultHeader }
    ]
  },
  {
    id: 'footer',
    name: 'Footer',
    placeholder: '{{footer}}',
    options: [
      { id: 'default', name: 'Default Footer', code: defaultFooter },
      { id: 'slim', name: 'Slim', code: defaultHeader }
    ]
  }
];

const TemplateBuilder: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [selectedComponents, setSelectedComponents] = useState<SelectedComponent[]>([]);
  const [beforeBordersOutput, setbeforeBordersOutput] = useState<string>('');
  const [bordersOutput, setBordersOutput] = useState<string>('');
  const [templateCSSOutput, setTemplateCSSOutput] = useState<string>('');
  const [inlineCSSOutput, setInlineCSSOutput] = useState<string>('');
  const [indexFileOutput  , setIndexFileOutput] = useState<string>('');

  const handleTemplateChange = (value: string) => {
    setSelectedTemplate(value);
    setSelectedComponents([]);
  };

  const handleComponentToggle = (componentId: string) => {
    setSelectedComponents((prev) => {
      if (prev.some(comp => comp.id === componentId)) {
        return prev.filter((comp) => comp.id !== componentId);
      } else {
        const component = componentOptions.find(c => c.id === componentId);
        return [...prev, { id: componentId, option: component?.options[0].id || '' }];
      }
    });
  };

  const handleComponentOptionChange = (componentId: string, optionId: string) => {
    setSelectedComponents((prev) =>
      prev.map((comp) =>
        comp.id === componentId ? { ...comp, option: optionId } : comp
      )
    );
  };

  const handleReset = () => {
    setSelectedTemplate('');
    setSelectedComponents([])
    setbeforeBordersOutput('');
    setBordersOutput('');
  };

  useEffect(() => {
    const generateBeforeBordersFile = () => {
      if (!selectedTemplate) return '';

      const template = templates.find(t => t.id === selectedTemplate);
      if (!template) return '';

      const bBF = template.beforeBordersFile;

      componentOptions.forEach(component => {
        const selectedComp = selectedComponents.find(sc => sc.id === component.id);
        if (selectedComp) {
          const option = component.options.find(o => o.id === selectedComp.option);
          const replacement = option?.code || '';
          bBF.replace(component.placeholder, replacement);
        } else {
          bBF.replace(component.placeholder, '');
        }
      });

      return bBF;
    };
    const generateBordersFile = () => {
      if (!selectedTemplate) return '';

      const template = templates.find(t => t.id === selectedTemplate);
      if (!template) return '';

      const bF = template.bordersFile;

      componentOptions.forEach(component => {
        const selectedComp = selectedComponents.find(sc => sc.id === component.id);
        if (selectedComp) {
          const option = component.options.find(o => o.id === selectedComp.option);
          const replacement = option?.code || '';
          bF.replace(component.placeholder, replacement);
        } else {
          bF.replace(component.placeholder, '');
        }
      });

      return bF;
    };
    const generateTemplateCSSFile = () => {
      if (!selectedTemplate) return '';

      const template = templates.find(t => t.id === selectedTemplate);
      if (!template) return '';

      const tCSSF = template.templateCSS;

      componentOptions.forEach(component => {
        const selectedComp = selectedComponents.find(sc => sc.id === component.id);
        if (selectedComp) {
          const option = component.options.find(o => o.id === selectedComp.option);
          const replacement = option?.code || '';
          tCSSF.replace(component.placeholder, replacement);
        } else {
          tCSSF.replace(component.placeholder, '');
        }
      });

      return tCSSF;
    };
    const generateInlineCSSFile = () => {
      if (!selectedTemplate) return '';

      const template = templates.find(t => t.id === selectedTemplate);
      if (!template) return '';

      const iCSS = template.inlineCSS;

      componentOptions.forEach(component => {
        const selectedComp = selectedComponents.find(sc => sc.id === component.id);
        if (selectedComp) {
          const option = component.options.find(o => o.id === selectedComp.option);
          const replacement = option?.code || '';
          iCSS.replace(component.placeholder, replacement);
        } else {
          iCSS.replace(component.placeholder, '');
        }
      });

      return iCSS;
    };
    const generateIndexFile = () => {
      if (!selectedTemplate) return '';

      const template = templates.find(t => t.id === selectedTemplate);
      if (!template) return '';

      const iF = template.indexFile;

      componentOptions.forEach(component => {
        const selectedComp = selectedComponents.find(sc => sc.id === component.id);
        if (selectedComp) {
          const option = component.options.find(o => o.id === selectedComp.option);
          const replacement = option?.code || '';
          iF.replace(component.placeholder, replacement);
        } else {
          iF.replace(component.placeholder, '');
        }
      });

      return iF;
    };

    setbeforeBordersOutput(generateBeforeBordersFile());
    setBordersOutput(generateBordersFile());
    setTemplateCSSOutput(generateTemplateCSSFile())
    setInlineCSSOutput(generateInlineCSSFile())
    setIndexFileOutput(generateIndexFile())
  }, [selectedTemplate, selectedComponents]);

  return (
    <div className="space-y-6">
      <Card className="w-full mx-auto">
        <CardHeader>
          <CardTitle>Template Builder</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium">Select a Template:</label>
              <Select onValueChange={handleTemplateChange} value={selectedTemplate}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a template" />
                </SelectTrigger>
                <SelectContent>
                  {templates.map((template) => (
                    <SelectItem key={template.id} value={template.id}>
                      {template.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedTemplate && (
              <div>
                <label className="block mb-2 text-sm font-medium">Add Components:</label>
                <div className="space-y-2">
                  {componentOptions.map((component) => (
                    <Button
                      key={component.id}
                      variant={selectedComponents.some(comp => comp.id === component.id) ? "default" : "outline"}
                      className="mr-2 mb-2"
                      onClick={() => handleComponentToggle(component.id)}
                    >
                      {component.name}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {selectedTemplate && selectedComponents.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Selected Components:</h3>
                <ul className="flex gap-2 space-y-2">
                  {selectedComponents.map((selectedComp) => {
                    const component = componentOptions.find(c => c.id === selectedComp.id);
                    return (
                      <li key={selectedComp.id} className="flex items-center space-x-2">
                        <span>{component?.name}:</span>
                        <Select
                          value={selectedComp.option}
                          onValueChange={(value) => handleComponentOptionChange(selectedComp.id, value)}
                        >
                          <SelectTrigger className="w-[180px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {component?.options.map((option) => (
                              <SelectItem key={option.id} value={option.id}>
                                {option.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            <div className="pt-4">
              <Button onClick={handleReset} variant="destructive">
                Reset
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {beforeBordersOutput && (
        <Tabs defaultValue="before-borders" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="before-borders">Before Borders</TabsTrigger>
            <TabsTrigger value="borders">Borders</TabsTrigger>
            <TabsTrigger value="template-css">Template CSS</TabsTrigger>
            <TabsTrigger value="inline-css">Inline CSS</TabsTrigger>
            <TabsTrigger value="index-page">Index page</TabsTrigger>
          </TabsList>
          <TabsContent value="before-borders">
            <Card className="w-full mx-auto">
              <CardHeader>
                <CardTitle>Before Borders</CardTitle>
              </CardHeader>
              <CardContent>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code>{beforeBordersOutput}</code>
            </pre>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="borders">
            <Card className="w-full mx-auto">
              <CardHeader>
                <CardTitle>Borders</CardTitle>
              </CardHeader>
              <CardContent>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code>{bordersOutput}</code>
            </pre>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="template-css">
            <Card className="w-full mx-auto">
              <CardHeader>
                <CardTitle>Template CSS</CardTitle>
              </CardHeader>
              <CardContent>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code>{templateCSSOutput}</code>
            </pre>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="inline-css">
            <Card className="w-full mx-auto">
              <CardHeader>
                <CardTitle>Inline CSS</CardTitle>
              </CardHeader>
              <CardContent>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code>{inlineCSSOutput}</code>
            </pre>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="index-page">
            <Card className="w-full mx-auto">
              <CardHeader>
                <CardTitle>Index page</CardTitle>
              </CardHeader>
              <CardContent>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code>{indexFileOutput}</code>
            </pre>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

export default TemplateBuilder;