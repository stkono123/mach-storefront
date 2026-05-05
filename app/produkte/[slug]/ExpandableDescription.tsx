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
        className="text-slate-600 text-sm leading-relaxed [&_h1]:text-xl [&_h1]:font-bold [&_h1]:mb-3 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:mb-2 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mb-2 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-3 [&_li]:mb-1 [&_strong]:font-semibold [&_strong]:text-slate-700"
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-3 text-sm font-bold text-teal-700 hover:text-teal-900 transition-colors text-left block"
      >
        {expanded ? '▲ Weniger anzeigen' : '▼ Mehr anzeigen'}
      </button>
    </div>
  )
}
