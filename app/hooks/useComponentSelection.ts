import { CompRow, TemplateRow } from '@/app/types/types'
import {
  combineCSS,
  combineHTML,
  findComp,
  findTemplate,
} from '../utils/templateUtils'
import { usePersistedState } from '@/app/hooks/usePersistedState'

export const useComponentSelection = (
  templates: TemplateRow[],
  comps: CompRow[],
) => {
  const [selectedTemplate, setSelectedTemplate] = usePersistedState(
    'selectedTemplate',
    '',
  )
  const [selectedHeader, setSelectedHeader] = usePersistedState(
    'selectedHeader',
    '',
  )
  const [selectedFooter, setSelectedFooter] = usePersistedState(
    'selectedFooter',
    '',
  )
  const [selectedHero, setSelectedHero] = usePersistedState('selectedHero', '')
  const [selectedServices, setSelectedServices] = usePersistedState(
    'selectedServices',
    '',
  )

  const template = findTemplate(templates, selectedTemplate)?.borders ?? ''
  const header = findComp(comps, selectedHeader)?.html ?? ''
  const hero = findComp(comps, selectedHero)?.html ?? ''
  const services = findComp(comps, selectedServices)?.html ?? ''
  const footer = findComp(comps, selectedFooter)?.html ?? ''

  const combinedTemplateCss = combineCSS(
    findComp(comps, selectedHeader)?.css,
    findComp(comps, selectedFooter)?.css,
  )

  const combinedHomepageHtml = combineHTML(
    findComp(comps, selectedHero)?.html,
    findComp(comps, selectedServices)?.html,
  )

  const combinedHomepageCss = combineCSS(
    findComp(comps, selectedHero)?.css,
    findComp(comps, selectedServices)?.css,
  )

  return {
    selectedTemplate,
    setSelectedTemplate,
    selectedHeader,
    setSelectedHeader,
    selectedFooter,
    setSelectedFooter,
    selectedHero,
    setSelectedHero,
    selectedServices,
    setSelectedServices,
    template,
    header,
    hero,
    services,
    footer,
    combinedTemplateCss,
    combinedHomepageHtml,
    combinedHomepageCss,
  }
}
