import type { Target } from '../components/Link/types'

export const getAnchorRel = (target?: Target) => (target === '_blank' ? 'noopener' : undefined)
