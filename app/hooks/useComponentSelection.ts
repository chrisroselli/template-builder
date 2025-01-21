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
  const [selectedWhyChoose, setSelectedWhyChoose] = usePersistedState(
    'selectedWhyChoose',
    '',
  )
  const [selectedReviews, setSelectedReviews] = usePersistedState(
    'selectedReviews',
    '',
  )
  const [selectedBeforeAfter, setSelectedBeforeAfter] = usePersistedState(
    'selectedBeforeAfter',
    '',
  )
  const [selectedTextBlock, setSelectedTextBlock] = usePersistedState(
    'selectedTextBlock',
    '',
  )
  const [selectedVideoBlock, setSelectedVideoBlock] = usePersistedState(
    'selectedVideoBlock',
    '',
  )

  const template = findTemplate(templates, selectedTemplate)?.borders ?? ''
  const header = findComp(comps, selectedHeader)?.html ?? ''
  const hero = findComp(comps, selectedHero)?.html ?? ''
  const services = findComp(comps, selectedServices)?.html ?? ''
  const whyChoose = findComp(comps, selectedWhyChoose)?.html ?? ''
  const reviews = findComp(comps, selectedReviews)?.html ?? ''
  const beforeAfter = findComp(comps, selectedBeforeAfter)?.html ?? ''
  const textBlock = findComp(comps, selectedTextBlock)?.html ?? ''
  const videoBlock = findComp(comps, selectedVideoBlock)?.html ?? ''
  const footer = findComp(comps, selectedFooter)?.html ?? ''

  const combinedTemplateCss = combineCSS(
    findComp(comps, selectedHeader)?.css,
    findComp(comps, selectedFooter)?.css,
  )

  const combinedHomepageHtml = combineHTML(
    findComp(comps, selectedHero)?.html,
    findComp(comps, selectedServices)?.html,
    findComp(comps, selectedWhyChoose)?.html,
    findComp(comps, selectedReviews)?.html,
    findComp(comps, selectedBeforeAfter)?.html,
    findComp(comps, selectedTextBlock)?.html,
    findComp(comps, selectedVideoBlock)?.html,
  )

  const combinedHomepageCss = combineCSS(
    findComp(comps, selectedHero)?.css,
    findComp(comps, selectedServices)?.css,
    findComp(comps, selectedWhyChoose)?.css,
    findComp(comps, selectedReviews)?.css,
    findComp(comps, selectedBeforeAfter)?.css,
    findComp(comps, selectedTextBlock)?.css,
    findComp(comps, selectedVideoBlock)?.css,
  )

  const combinedHomepageJs = combineCSS(
    findComp(comps, selectedHero)?.js,
    findComp(comps, selectedServices)?.js,
    findComp(comps, selectedWhyChoose)?.js,
    findComp(comps, selectedReviews)?.js,
    findComp(comps, selectedBeforeAfter)?.js,
    findComp(comps, selectedTextBlock)?.js,
    findComp(comps, selectedVideoBlock)?.js,
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
    selectedWhyChoose,
    setSelectedWhyChoose,
    selectedReviews,
    setSelectedReviews,
    selectedBeforeAfter,
    setSelectedBeforeAfter,
    selectedTextBlock,
    setSelectedTextBlock,
    selectedVideoBlock,
    setSelectedVideoBlock,
    template,
    header,
    hero,
    services,
    footer,
    whyChoose,
    reviews,
    beforeAfter,
    textBlock,
    videoBlock,
    combinedTemplateCss,
    combinedHomepageHtml,
    combinedHomepageCss,
    combinedHomepageJs,
  }
}
