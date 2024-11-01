import type { Component, SelectedComponent } from '@/app/lib/types';

export const processTemplate = (
  templateString: string,
  components: Component[],
  selectedComponents: SelectedComponent[]
): string => {
  return components.reduce((result, component) => {
    const selectedComp = selectedComponents.find(sc => sc.id === component.id);
    if (!selectedComp) {
      return result.replace(new RegExp(component.placeholder, 'g'), '');
    }

    const option = component.options.find(o => o.id === selectedComp.option);
    const replacement = option?.code || '';
    return result.replace(new RegExp(component.placeholder, 'g'), replacement);
  }, templateString);
};