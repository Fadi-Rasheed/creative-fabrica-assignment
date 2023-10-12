import { mapProductsToCreators } from '../mapProductsToCreators'

describe('mapProductsToCreators', () => {
  const data = {
    Creators: [
      {
        id: '1',
        email: 'aaa@gmail.com',
      },
      {
        id: '2',
        email: 'bbb@gmail.com',
      },
    ],
    Products: [
      {
        id: 'prod_1',
        creatorId: '1',
        createTime: '2023-04-06T21:01:59.752638+02:00',
      },
      {
        id: 'prod_2',
        creatorId: '1',
        createTime: '2023-04-05T17:03:59.752633+02:00',
      },
      {
        id: 'prod_3',
        creatorId: '1',
        createTime: '2023-04-07T17:03:59.752633+02:00',
      },
    ],
  }

  const mappedData = {
    '1': {
      creatorEmail: 'aaa@gmail.com',
      lastActive: '2023-04-07T17:03:59.752633+02:00',
      productsCount: 3,
    },
  }

  it('returns the correct result when all arguments has been passed', () => {
    const result = mapProductsToCreators(data)

    expect(result).toEqual(mappedData)
  })

  it('returns empty arrays when the data is undefined', () => {
    const result = mapProductsToCreators(undefined)

    expect(result).toEqual(undefined)
  })
})
