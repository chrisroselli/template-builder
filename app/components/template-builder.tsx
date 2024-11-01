'use client';

import { useState, useCallback, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { TemplateSelector } from "./template-selector";
import { ComponentList } from "./component-list";
import { ComponentOptions } from "./component-options";
import { OutputTabs } from "./output-tabs";
import { templates, componentOptions } from "@/app/lib/template-data";
import { processTemplate } from "@/app/lib/template-processor";
import type { SelectedComponent } from "@/app/lib/types";

export function TemplateBuilder() {
  const [selectedTemplate, setSelectedTemplate] = useState<string>("");
  const [selectedComponents, setSelectedComponents] = useState<SelectedComponent[]>([]);

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