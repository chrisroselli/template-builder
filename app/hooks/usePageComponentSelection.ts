import { useState } from 'react'
import { CompRow } from '@/app/types/types'
import { filterCompsByType, findComp } from '../utils/templateUtils'

export const usePageComponentSelection = (comps: CompRow[]) => {
  const [selectedHero, setSelectedHero] = useState('')
  const [selectedServices, setSelectedServices] = useState('')

  const hero = findComp(comps, selectedHero)
  const services = findComp(comps, selectedServices)

  const heroOptions = filterCompsByType(comps, 'Heros')
  const servicesOptions = filterCompsByType(comps, 'Services')

  return {
    selectedHero,
    setSelectedHero,
    selectedServices,
    setSelectedServices,
    hero,
    services,
    heroOptions,
    servicesOptions,
  }
}
