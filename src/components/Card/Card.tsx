import type { FC } from 'react'

import type { ICard } from './types'

export const Card: FC<ICard> = ({ title, description }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg px-6 py-4">
    <h3 className="font-bold text-xl mb-2">{title}</h3>
    <p className="text-gray-700 text-base">{description}</p>
  </div>
)
