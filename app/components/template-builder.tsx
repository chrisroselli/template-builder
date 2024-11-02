'use client';

import {useState, useCallback, useMemo, useEffect} from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { TemplateSelector } from "./template-selector";
import { ComponentList } from "./component-list";
import { ComponentOptions } from "./component-options";
import { OutputTabs } from "./output-tabs";
import { templates, componentOptions } from "@/app/lib/template-data";
import { processTemplate } from "@/app/lib/template-processor";
import type { SelectedComponent } from "@/app/lib/types";

interface Pets {
  id: number;
  name: string;
  owner: string;
}

export function TemplateBuilder() {
  const [selectedTemplate, setSelectedTemplate] = useState<string>("");
  const [selectedComponents, setSelectedComponents] = useState<SelectedComponent[]>([]);
  const [pets, setPets] = useState<Pets[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const template = useMemo(() =>
      templates.find(t => t.id === selectedTemplate),
    [selectedTemplate]
  );

  const outputs = useMemo(() => {
    if (!template) {
      return {
        beforeBorders: "",
        borders: "",
        templateCSS: "",
        inlineCSS: "",
        indexFile: ""
      };
    }

    return {
      beforeBorders: processTemplate(template.beforeBordersFile, componentOptions, selectedComponents),
      borders: processTemplate(template.bordersFile, componentOptions, selectedComponents),
      templateCSS: processTemplate(template.templateCSS, componentOptions, selectedComponents),
      inlineCSS: processTemplate(template.inlineCSS, componentOptions, selectedComponents),
      indexFile: processTemplate(template.indexFile, componentOptions, selectedComponents)
    };
  }, [template, selectedComponents]);

  const handleTemplateChange = useCallback((value: string) => {
    setSelectedTemplate(value);
    setSelectedComponents([]);
  }, []);

  const handleComponentToggle = useCallback((componentId: string) => {
    setSelectedComponents(prev => {
      if (prev.some(comp => comp.id === componentId)) {
        return prev.filter(comp => comp.id !== componentId);
      }
      const component = componentOptions.find(c => c.id === componentId);
      return [...prev, { id: componentId, option: component?.options[0].id || "" }];
    });
  }, []);

  const handleComponentOptionChange = useCallback((componentId: string, optionId: string) => {
    setSelectedComponents(prev =>
      prev.map(comp =>
        comp.id === componentId ? { ...comp, option: optionId } : comp
      )
    );
  }, []);

  const handleReset = useCallback(() => {
    setSelectedTemplate("");
    setSelectedComponents([]);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setPets(result.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="w-full mx-auto">
        {pets.map((pet) => (
          <div key={pet.id}>
            <p>{pet.name}</p>
            <p className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{pet.owner}</p>
          </div>
        ))}
        <CardHeader>
          <CardTitle>Template Builder</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <TemplateSelector
              templates={templates}
              selectedTemplate={selectedTemplate}
              onTemplateChange={handleTemplateChange}
            />

            {selectedTemplate && (
              <ComponentList
                components={componentOptions}
                selectedComponents={selectedComponents}
                onComponentToggle={handleComponentToggle}
              />
            )}

            {selectedTemplate && selectedComponents.length > 0 && (
              <ComponentOptions
                components={componentOptions}
                selectedComponents={selectedComponents}
                onOptionChange={handleComponentOptionChange}
              />
            )}

            <div className="pt-4">
              <Button onClick={handleReset} variant="destructive">
                Reset
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {outputs.beforeBorders && (
        <OutputTabs
          beforeBordersOutput={outputs.beforeBorders}
          bordersOutput={outputs.borders}
          templateCSSOutput={outputs.templateCSS}
          inlineCSSOutput={outputs.inlineCSS}
          indexFileOutput={outputs.indexFile}
        />
      )}
    </div>
  );
}