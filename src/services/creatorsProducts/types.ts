interface Creator {
  id: string
  email: string
}

interface Product {
  id: string
  creatorId: string
  createTime: string
}

export interface CreatorsProducts {
  Creators: Creator[]
  Products: Product[]
}
