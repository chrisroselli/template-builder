import { useState } from 'react'
import { CompRow, TemplateRow } from '@/app/types/types'
import {
  combineCSS,
  combineHTML,
  findComp,
  findTemplate,
} from '../utils/templateUtils'

export const useComponentSelection = (
  templates: TemplateRow[],
  comps: CompRow[],
) => {
  const [selectedTemplate, setSelectedTemplate] = useState('')
  const [selectedHeader, setSelectedHeader] = useState('')
  const [selectedFooter, setSelectedFooter] = useState('')
  const [selectedHero, setSelectedHero] = useState('')
  const [selectedServices, setSelectedServices] = useState('')

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
