'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, FileText, Calendar, Tag, Gavel } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { ScrollArea } from "@/components/ui/scroll-area"
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
        const content = document.content || document.metadata.pageContent
        const highlightedContent = content.replace(
          new RegExp(quote, 'gi'),
          match => `<mark class="bg-yellow-200 dark:bg-yellow-800">${match}</mark>`
        )
        contentRef.current.innerHTML = sanitizeString(highlightedContent)

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
  }, [quote, document])

  if (!document) {
    return <div className="text-center p-4">No document found</div>
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Card className="sticky top-0 z-10 rounded-none shadow-md">
        <CardHeader className="p-4">
          <Button variant="ghost" onClick={onBack} className="mb-2 hover:bg-secondary" aria-label="Back to search results">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to search
          </Button>
          <CardTitle className="text-2xl font-bold text-primary">{document.metadata.title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {document.metadata.plaintiff} v. {document.metadata.defendant}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="flex flex-wrap gap-4 text-sm">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {new Date(document.metadata.date).toLocaleDateString()}
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Tag className="h-3 w-3" />
              {document.metadata.topic}
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Gavel className="h-3 w-3" />
              {document.metadata.outcome}
            </Badge>
          </div>
        </CardContent>
      </Card>
      <main className="flex-1 p-4 overflow-hidden">
        <Card className="h-full">
          <CardContent className="p-4 h-full">
            <ScrollArea className="h-[calc(100vh-200px)]">
              {isLoading ? (
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ) : error ? (
                <div className="text-center text-red-500 p-4 bg-red-50 rounded-md">
                  <FileText className="h-8 w-8 mx-auto mb-2" />
                  {error}
                </div>
              ) : (
                <div
                  ref={contentRef}
                  className="prose dark:prose-invert max-w-none"
                />
              )}
            </ScrollArea>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}