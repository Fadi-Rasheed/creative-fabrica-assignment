export interface Creator {
  id: string
  email: string
}

export interface Product {
  id: string
  creatorId: string
  createTime: string
}

export interface CreatorsProducts {
  Creators: Creator[]
  Products: Product[]
}
