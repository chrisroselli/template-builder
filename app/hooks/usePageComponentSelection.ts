import { CompRow } from '@/app/types/types'
import { filterCompsByType, findComp } from '../utils/templateUtils'
import { usePersistedState } from '@/app/hooks/usePersistedState'

export const usePageComponentSelection = (comps: CompRow[]) => {
  const [selectedHero, setSelectedHero] = usePersistedState('selectedHero', '')
  const [selectedServices, setSelectedServices] = usePersistedState(
    'selectedServices',
    '',
  )
  const [selectedWhyChoose, setSelectedWhyChoose] = usePersistedState(
    'selectedWhyChoose',
    '',
  )

  const hero = findComp(comps, selectedHero)
  const services = findComp(comps, selectedServices)
  const whyChoose = findComp(comps, selectedWhyChoose)

  const heroOptions = filterCompsByType(comps, 'Heros')
  const servicesOptions = filterCompsByType(comps, 'Services')
  const whyChooseOptions = filterCompsByType(comps, 'Why Choose')

  return {
    selectedHero,
    setSelectedHero,
    selectedServices,
    setSelectedServices,
    hero,
    services,
    heroOptions,
    servicesOptions,
    selectedWhyChoose,
    setSelectedWhyChoose,
    whyChoose,
    whyChooseOptions,
  }
}
