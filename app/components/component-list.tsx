import { Button } from "@/app/components/ui/button";
import type { Component, SelectedComponent } from "@/app/lib/types";
import { memo } from "react";

interface ComponentListProps {
  components: Component[];
  selectedComponents: SelectedComponent[];
  onComponentToggle: (componentId: string) => void;
}

export const ComponentList = memo(function ComponentList({
   components,
   selectedComponents,
   onComponentToggle
  }: ComponentListProps) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium">Add Components:</label>
      <div className="space-y-2">
        {components.map((component) => (
          <Button
            key={component.id}
            variant={selectedComponents.some(comp => comp.id === component.id) ? "default" : "outline"}
            className="mr-2 mb-2"
            onClick={() => onComponentToggle(component.id)}
          >
            {component.name}
          </Button>
        ))}
      </div>
    </div>
  );
});