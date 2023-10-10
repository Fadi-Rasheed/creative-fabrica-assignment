import type { FC } from 'react'

import type { ICard } from './types'

export const Card: FC<ICard> = ({ title, description }) => (
  <div className="max-w-sm border border-gray-200 rounded overflow-hidden shadow-lg p-8 hover:bg-gray-100">
    <h3 className="font-bold text-xl mb-4 text-center">{title}</h3>
    <p className="text-gray-700 text-base break-words text-center">{description}</p>
  </div>
)
