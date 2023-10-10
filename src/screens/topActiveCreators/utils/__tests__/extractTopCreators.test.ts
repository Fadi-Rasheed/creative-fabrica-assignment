import { extractTopCreators } from '../extractTopCreators'

describe('extractTopCreators', () => {
  const topCreators = 2
  const mappedData = {
    '1': {
      creatorEmail: 'aaa@gmail.com',
      productsCount: 3,
      lastActive: '1',
    },
    '2': {
      creatorEmail: 'bbb@gmail.com',
      productsCount: 3,
      lastActive: '2',
    },
    '3': {
      creatorEmail: 'ccc@gmail.com',
      productsCount: 1,
      lastActive: '2',
    },
  }

  it('returns the correct result when all arguments has been passed', () => {
    const result = extractTopCreators(topCreators, mappedData)

    expect(result).toEqual({
      topCreators: [
        {
          creatorEmail: 'bbb@gmail.com',
          productsCount: 3,
          lastActive: '2',
        },
        {
          creatorEmail: 'aaa@gmail.com',
          productsCount: 3,
          lastActive: '1',
        },
      ],
      rest: [
        {
          creatorEmail: 'ccc@gmail.com',
          productsCount: 1,
          lastActive: '2',
        },
      ],
    })
  })

  it('returns empty arrays when the data is undefined', () => {
    const result = extractTopCreators(topCreators, undefined)

    expect(result).toEqual({
      topCreators: [],
      rest: [],
    })
  })
})
