'use client';

import {useState, useCallback, useMemo, useEffect} from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { TemplateSelector } from "./template-selector";
import { ComponentList } from "./component-list";
import { ComponentOptions } from "./component-options";
import { OutputTabs } from "./output-tabs";
import { processTemplate } from "@/app/lib/template-processor";
import {SelectedComponent, Template} from "@/app/lib/types";


export function TemplateBuilder() {
  const [selectedTemplate, setSelectedTemplate] = useState<string>("");
  const [selectedComponents, setSelectedComponents] = useState<SelectedComponent[]>([]);
  const [templateData, setTemplateData] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const templates = templateData.map((t) => ({
    id: t.id,
    name: t.name,
    before_borders: t.before_borders,
    borders: t.borders,
    template_css: t.template_css,
    inline_css: t.inline_css,
    index_file: t.index_file,
    components: t.components
  }));

  const template = useMemo(() =>
      templates.find(t => t.name === selectedTemplate),
    [selectedTemplate, templates]
  );

  const componentOptions = useMemo(() => [
    {
      id: "header",
      name: "Header",
      placeholder: "{{header}}",
      options: [
        { id: "default", name: "Default Header", code: "defaultHeader" },
        { id: "slim", name: "Slim", code: "" },
        { id: "bold", name: "Bold", code: "" },
      ]
    },
    {
      id: "hero",
      name: "Hero",
      placeholder: "{{hero}}",
      options: [
        { id: "static", name: "Static Hero", code: "staticHero" },
        { id: "slider", name: "Slider", code: "" },
        { id: "form", name: "Form", code: "" },
      ]
    },
    {
      id: "services",
      name: "Services section",
      placeholder: "{{services}}",
      options: [
        { id: "two", name: "Two Columns", code: "" },
        { id: "three", name: "Three Columns", code: "" },
        { id: "four", name: "Four Columns", code: "" },
      ]
    },
    {
      id: "reviews",
      name: "Reviews section",
      placeholder: "{{reviews}}",
      options: [
        { id: "vertSlider", name: "Vertical Slider", code: "" },
        { id: "horizSlider", name: "Horizontal Slider", code: "" }
      ]
    },
    {
      id: "footer",
      name: "Footer",
      placeholder: "{{footer}}",
      options: [
        { id: "default", name: "Default Footer", code: "defaultFooter" },
        { id: "slim", name: "Slim", code: "" }
      ]
    }
  ]
    ,[]);

  const outputs = useMemo(() => {
    if (!template) {
      return {
        before_borders: "",
        borders: "",
        template_css: "",
        inline_css: "",
        index_file: ""
      };
    }

    return {
      before_borders: processTemplate(template.before_borders, componentOptions, selectedComponents),
      borders: processTemplate(template.borders, componentOptions, selectedComponents),
      template_css: processTemplate(template.template_css, componentOptions, selectedComponents),
      inline_css: processTemplate(template.inline_css, componentOptions, selectedComponents),
      index_file: processTemplate(template.index_file, componentOptions, selectedComponents),
      components: processTemplate(template.components, componentOptions, selectedComponents)
    };
  }, [template, componentOptions, selectedComponents]);

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
        console.log(result.data)
        setTemplateData(result.data);
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

      {selectedTemplate && (
        <OutputTabs
          beforeBordersOutput={outputs.before_borders}
          bordersOutput={outputs.borders}
          templateCSSOutput={outputs.template_css}
          inlineCSSOutput={outputs.inline_css}
          indexFileOutput={outputs.index_file}
        />
      )}
    </div>
  );
}