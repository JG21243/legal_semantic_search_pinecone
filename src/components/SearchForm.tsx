'use client'

import { useState, ChangeEvent, FormEvent, useCallback, useRef, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface SearchFormProps {
  suggestedSearches: string[]
  onSearch: (query: string) => void
  placeholder?: string
  maxSuggestions?: number
}

const SearchForm = ({ 
  suggestedSearches,
  onSearch,
  placeholder = "Search legal docs or view suggestions",
  maxSuggestions = 5
}: SearchFormProps) => {
  const [query, setQuery] = useState<string>("")
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const suggestionsRef = useRef<HTMLDivElement>(null)

  const filteredSuggestions = suggestedSearches
    .filter(suggestion => 
      suggestion.toLowerCase().includes(query.toLowerCase()))
    .slice(0, maxSuggestions)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    setShowSuggestions(true)
  }

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    
    onSearch(query.trim())
    setQuery("")
    setShowSuggestions(false)
    inputRef.current?.blur()
  }, [query, onSearch])

  const handleSuggestionClick = useCallback((suggestion: string) => {
    setQuery(suggestion)
    onSearch(suggestion)
    setShowSuggestions(false)
    inputRef.current?.blur()
  }, [onSearch])

  const handleClear = useCallback(() => {
    setQuery("")
    setShowSuggestions(true)
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current && 
        !suggestionsRef.current.contains(event.target as Node) &&
        !inputRef.current?.contains(event.target as Node)
      ) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setShowSuggestions(false)
    }
  }, [])

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form 
        onSubmit={handleSubmit} 
        className="relative w-full"
        role="search"
      >
        <div className="relative">
          <Input
            ref={inputRef}
            type="search"
            value={query}
            onChange={handleInputChange}
            onFocus={() => setShowSuggestions(true)}
            onKeyDown={handleKeyDown}
            className="pr-20"
            placeholder={placeholder}
            aria-label="Search input"
            aria-controls="search-suggestions"
            aria-autocomplete="list"
            role="combobox"
            aria-expanded={showSuggestions}
          />
          
          {query && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={handleClear}
              className="absolute right-12 top-1/2 -translate-y-1/2"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
          
          <Button
            type="submit"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2"
            disabled={!query.trim()}
            aria-label="Submit search"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>

        {showSuggestions && filteredSuggestions.length > 0 && (
          <Card
            ref={suggestionsRef}
            id="search-suggestions"
            className="absolute mt-2 w-full z-10"
          >
            <CardContent className="p-0">
              <ScrollArea className="h-[300px]">
                <div className="p-4 text-sm font-medium text-muted-foreground border-b">
                  Popular searches
                </div>
                {filteredSuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-muted cursor-pointer text-sm transition-colors duration-150"
                    onClick={() => handleSuggestionClick(suggestion)}
                    role="option"
                    aria-selected={query === suggestion}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleSuggestionClick(suggestion)
                      }
                    }}
                  >
                    {suggestion}
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        )}
      </form>
    </div>
  )
}

export default SearchForm