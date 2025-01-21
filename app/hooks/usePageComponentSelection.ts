import { CompRow } from '@/app/types/types'
import { filterCompsByType, findComp } from '../utils/templateUtils'
import { usePersistedState } from '@/app/hooks/usePersistedState'

export const usePageComponentSelection = (comps: CompRow[]) => {
  const [selectedHero, setSelectedHero] = usePersistedState(
    'selectedPageHero',
    '',
  )
  const [selectedServices, setSelectedServices] = usePersistedState(
    'selectedPageServices',
    '',
  )
  const [selectedWhyChoose, setSelectedWhyChoose] = usePersistedState(
    'selectedPageWhyChoose',
    '',
  )
  const [selectedReviews, setSelectedReviews] = usePersistedState(
    'selectedPageReviews',
    '',
  )
  const [selectedBeforeAfter, setSelectedBeforeAfter] = usePersistedState(
    'selectedPageBeforeAfter',
    '',
  )
  const [selectedTextBlock, setSelectedTextBlock] = usePersistedState(
    'selectedPageTextBlock',
    '',
  )
  const [selectedVideoBlock, setSelectedVideoBlock] = usePersistedState(
    'selectedPageVideoBlock',
    '',
  )

  const hero = findComp(comps, selectedHero)
  const services = findComp(comps, selectedServices)
  const whyChoose = findComp(comps, selectedWhyChoose)
  const reviews = findComp(comps, selectedReviews)
  const beforeAfter = findComp(comps, selectedBeforeAfter)
  const textBlock = findComp(comps, selectedTextBlock)
  const videoBlock = findComp(comps, selectedVideoBlock)

  const heroOptions = filterCompsByType(comps, 'Heros')
  const servicesOptions = filterCompsByType(comps, 'Services')
  const whyChooseOptions = filterCompsByType(comps, 'Why Choose')
  const reviewsOptions = filterCompsByType(comps, 'Reviews')
  const beforeAfterOptions = filterCompsByType(comps, 'Before After')
  const textBlockOptions = filterCompsByType(comps, 'Text Block')
  const videoBlockOptions = filterCompsByType(comps, 'Video Block')

  return {
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
    hero,
    heroOptions,
    services,
    servicesOptions,
    whyChoose,
    whyChooseOptions,
    reviews,
    reviewsOptions,
    beforeAfter,
    beforeAfterOptions,
    textBlock,
    textBlockOptions,
    videoBlock,
    videoBlockOptions,
  }
}
