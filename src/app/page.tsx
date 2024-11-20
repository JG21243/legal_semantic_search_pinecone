'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import SearchForm from '@/components/SearchForm'
import DocumentView from '@/components/DocumentView'
import { type Document } from './types/document'
import { sanitizeString } from '../lib/utils'
import { Loader2, X, Search } from 'lucide-react'

interface SearchResult {
  metadata: Document['metadata']
  content: string
}

const runBootstrapProcedure = async () => {
  const response = await fetch('/api/bootstrap', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    const body = await response.json()
    console.error(body)
    throw new Error(`API request failed with status ${response.status}`)
  }
}

const checkAndBootstrapIndex = async (
  setIsBootstrapping: (isBootstrapping: boolean) => void,
  setIsIndexReady: (isIndexReady: boolean) => void
) => {
  setIsBootstrapping(true)
  try {
    await runBootstrapProcedure()
    setIsIndexReady(true)
  } catch (error) {
    console.error('Failed to bootstrap index:', error)
  } finally {
    setIsBootstrapping(false)
  }
}

const handleSearch = async (
  query: string,
  setResults: (results: SearchResult[]) => void,
  setIsSearching: (isSearching: boolean) => void
) => {
  setIsSearching(true)
  try {
    const response = await fetch('/api/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })

    if (!response.ok) {
      const body = await response.json()
      console.error(body)
      throw new Error(`API request failed with status ${response.status}`)
    }

    const { results } = await response.json()
    setResults(results)
  } catch (error) {
    console.error('Search failed:', error)
  } finally {
    setIsSearching(false)
  }
}

const suggestedSearches = [
  'Cases about personal freedoms being violated',
  'How much power does the commerce clause give Congress?',
  'Cases about personal rights or congressional overreach?',
  'Cases involving the ability to pay for an attorney',
  'Cases about the right to remain silent',
  'Landmark cases that shaped freedom of speech laws',
  'Cases where defendant was found with a gun',
  'What cases involved personal rights or congressional overreach?',
  'Cases where the judge expressed grave concern'
]

export default function Home() {
  const [isBootstrapping, setIsBootstrapping] = useState(false)
  const [isIndexReady, setIsIndexReady] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [selectedDocument, setSelectedDocument] = useState<SearchResult | null>(null)

  useEffect(() => {
    checkAndBootstrapIndex(setIsBootstrapping, setIsIndexReady)
  }, [])

  const clearResults = () => {
    setQuery('')
    setResults([])
  }

  if (selectedDocument) {
    return (
      <DocumentView
        document={selectedDocument}
        quote={selectedDocument.metadata.pageContent}
        onBack={() => setSelectedDocument(null)}
      />
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-primary">Legal Document Search</h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        {isBootstrapping ? (
          <div className="flex items-center justify-center space-x-2">
            <Loader2 className="h-6 w-6 animate-spin" />
            <p className="text-muted-foreground">Preparing legal documents...</p>
          </div>
        ) : isIndexReady ? (
          <>
            <div className="max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-center">What are you looking for?</h2>
              <p className="text-center mb-6 text-muted-foreground">Use natural language to search through legal documents.</p>
              <SearchForm
                suggestedSearches={suggestedSearches}
                onSearch={(query: string) => {
                  handleSearch(query, setResults, setIsSearching)
                  setQuery(query)
                }}
              />
            </div>
            {isSearching ? (
              <div className="flex justify-center items-center space-x-2">
                <Loader2 className="h-6 w-6 animate-spin" />
                <p className="text-muted-foreground">Searching...</p>
              </div>
            ) : results.length > 0 && query ? (
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm text-muted-foreground">
                    {results.length} result{results.length !== 1 && 's'} for <span className="font-medium text-foreground">{query}</span>
                  </p>
                  <Button variant="ghost" size="sm" onClick={clearResults}>
                    <X className="h-4 w-4 mr-2" />
                    Clear results
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.map((result, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                      onClick={() => setSelectedDocument(result)}
                    >
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{result.metadata.title}</h3>
                        <blockquote className="text-sm italic text-muted-foreground mb-4 line-clamp-3">
                          &quot;{sanitizeString(result.metadata.pageContent)}&quot;
                        </blockquote>
                        <div className="text-sm space-y-1">
                          <p><span className="font-medium">Topic:</span> {result.metadata.topic}</p>
                          <p><span className="font-medium">Verdict:</span> {result.metadata.outcome}</p>
                          <p><span className="font-medium">Year:</span> {new Date(result.metadata.date).getFullYear()}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center text-muted-foreground">
                No results. Try a different search query.
              </div>
            )}
          </>
        ) : (
          <div className="text-center text-muted-foreground">
            Failed to prepare the search index. Please try refreshing the page.
          </div>
        )}
      </main>
      <footer className="bg-muted py-4">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Legal Document Search. All rights reserved.
        </div>
      </footer>
    </div>
  )
}