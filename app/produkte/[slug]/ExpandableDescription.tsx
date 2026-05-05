'use client'

import { useState } from 'react'

export function ExpandableDescription({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="mb-8">
      <div
        style={expanded ? {} : {
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical' as any,
          WebkitLineClamp: 7,
          overflow: 'hidden',
        }}
        className="text-slate-600 text-sm leading-relaxed"
      >
        {text}
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-3 text-sm font-bold text-teal-700 hover:text-teal-900 transition-colors text-left block"
      >
        {expanded ? '▲ Weniger anzeigen' : '▼ Mehr anzeigen'}
      </button>
    </div>
  )
}
