import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import type { Template } from "@/app/lib/types";
import { memo } from "react";

interface TemplateSelectorProps {
  templates: Template[];
  selectedTemplate: string;
  onTemplateChange: (value: string) => void;
}

export const TemplateSelector = memo(function TemplateSelector({
   templates,
   selectedTemplate,
   onTemplateChange
 }: TemplateSelectorProps) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium">Select a Template:</label>
      <Select onValueChange={onTemplateChange} value={selectedTemplate}>
        <SelectTrigger>
          <SelectValue placeholder="Choose a template" />
        </SelectTrigger>
        <SelectContent>
          {templates.map((template) => (
            <SelectItem key={template.id} value={template.name}>
              {template.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
});