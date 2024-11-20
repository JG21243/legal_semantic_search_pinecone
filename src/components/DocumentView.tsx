'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { sanitizeString } from '../lib/utils'

interface DocumentViewProps {
  document: {
    metadata: {
      title: string
      plaintiff: string
      defendant: string
      date: string
      topic: string
      outcome: string
      pageContent: string
    }
    content: string
  }
  quote: string
  onBack: () => void
}

export default function DocumentView({ document, quote, onBack }: DocumentViewProps): JSX.Element {
  const contentRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (contentRef.current && quote) {
      setIsLoading(true)
      setError(null)
      try {
        const content = contentRef.current.innerHTML
        const highlightedContent = content.replace(
          new RegExp(quote, 'gi'),
          match => `<mark class="bg-yellow-200 dark:bg-yellow-800">${match}</mark>`
        )
        contentRef.current.innerHTML = highlightedContent

        const highlight = contentRef.current.querySelector('mark')
        if (highlight) {
          highlight.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      } catch (err) {
        setError('An error occurred while processing the document.')
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }
  }, [quote])

  if (!document) {
    return <div className="text-center p-4">No document found</div>
  }

  return (
    <div className="flex flex-col min-h-screen bg-background dark:bg-gray-900">
      <Card className="sticky top-0 z-10 rounded-none shadow-md">
        <CardHeader className="p-4">
          <Button variant="ghost" onClick={onBack} className="mb-2" aria-label="Back to search results">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to search
          </Button>
          <CardTitle className="text-2xl font-bold text-primary dark:text-primary-foreground">{document.metadata.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
            <div>
              <span className="font-semibold text-primary dark:text-primary-foreground">Topic:</span> {document.metadata.topic}
            </div>
            <div>
              <span className="font-semibold text-primary dark:text-primary-foreground">Verdict:</span> {document.metadata.outcome}
            </div>
            <div>
              <span className="font-semibold text-primary dark:text-primary-foreground">Year:</span> {new Date(document.metadata.date).toLocaleDateString()}
            </div>
          </div>
        </CardContent>
      </Card>
      <main className="flex-1 p-4 overflow-auto">
        <Card>
          <CardContent className="p-4">
            {isLoading ? (
              <div className="text-center">Loading document content...</div>
            ) : error ? (
              <div className="text-center text-red-500">{error}</div>
            ) : (
              <div
                ref={contentRef}
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: sanitizeString(document.metadata.pageContent) }}
              />
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}