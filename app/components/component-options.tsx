import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import type { Component, SelectedComponent } from "@/app/lib/types";
import { memo } from "react";

interface ComponentOptionsProps {
  components: Component[];
  selectedComponents: SelectedComponent[];
  onOptionChange: (componentId: string, optionId: string) => void;
}

export const ComponentOptions = memo(function ComponentOptions({
   components,
   selectedComponents,
   onOptionChange
 }: ComponentOptionsProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Selected Components:</h3>
      <div className="flex flex-col gap-2">
        {selectedComponents.map((selectedComp) => {
          const component = components.find(c => c.id === selectedComp.id);
          return (
            <div key={selectedComp.id} className="flex items-center gap-2">
              <span className="min-w-[120px]">{component?.name}:</span>
              <Select
                value={selectedComp.option}
                onValueChange={(value) => onOptionChange(selectedComp.id, value)}
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
            </div>
          );
        })}
      </div>
    </div>
  );
});