import { useEffect } from 'react'

export function useDocumentMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title

    const metaDescription = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )

    if (metaDescription) {
      metaDescription.content = description
      return
    }

    const nextMeta = document.createElement('meta')
    nextMeta.name = 'description'
    nextMeta.content = description
    document.head.appendChild(nextMeta)
  }, [description, title])
}
