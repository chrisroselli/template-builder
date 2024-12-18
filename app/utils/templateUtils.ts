import { CompRow, TemplateRow } from '@/app/types/types'

export const findTemplate = (
  selection: TemplateRow[],
  selectedItem: string,
) => {
  return selection.find((item) => item.label === selectedItem)
}

export const findComp = (selection: CompRow[], selectedItem: string) => {
  return selection.find((item) => item.label === selectedItem)
}

export const combineCSS = (...cssStrings: (string | undefined)[]) => {
  return cssStrings.filter(Boolean).join('\n\n')
}

export const combineHTML = (...htmlStrings: (string | undefined)[]) => {
  return htmlStrings.filter(Boolean).join('\n\n')
}

export const filterCompsByType = (comps: CompRow[], type: string) => {
  return comps.filter((comp) => comp.comp_type === type)
}
