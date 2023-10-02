import { getAnchorRel } from '../getAnchorRel'

describe('getAnchorRel', () => {
  it('should return rel=noopener when target is _blank', () => {
    expect(getAnchorRel('_blank')).toBe('noopener')
  })
  it('should return undefined when target is NOT _blank', () => {
    expect(getAnchorRel('_self')).toBeUndefined()
  })
})
