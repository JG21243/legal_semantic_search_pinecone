import { useState, ChangeEvent, FormEvent, useCallback, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface SearchFormProps {
  suggestedSearches: string[];
  onSearch: (query: string) => void;
  placeholder?: string;
  maxSuggestions?: number;
}

const SearchForm = ({ 
  suggestedSearches,
  onSearch,
  placeholder = "Search legal docs or view suggestions",
  maxSuggestions = 5
}: SearchFormProps) => {
  const [query, setQuery] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Filter suggestions based on input
  const filteredSuggestions = suggestedSearches
    .filter(suggestion => 
      suggestion.toLowerCase().includes(query.toLowerCase()))
    .slice(0, maxSuggestions);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setShowSuggestions(true);
  };

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    onSearch(query.trim());
    setQuery("");
    setShowSuggestions(false);
    inputRef.current?.blur();
  }, [query, onSearch]);

  const handleSuggestionClick = useCallback((suggestion: string) => {
    setQuery(suggestion);
    onSearch(suggestion);
    setShowSuggestions(false);
    inputRef.current?.blur();
  }, [onSearch]);

  const handleClear = useCallback(() => {
    setQuery("");
    setShowSuggestions(true);
    inputRef.current?.focus();
  }, []);

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current && 
        !suggestionsRef.current.contains(event.target as Node) &&
        !inputRef.current?.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form 
        onSubmit={handleSubmit} 
        className="relative w-full"
        role="search"
      >
        <div className="relative">
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={handleInputChange}
            onFocus={() => setShowSuggestions(true)}
            onKeyDown={handleKeyDown}
            className="w-full px-4 py-2 pr-24 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            placeholder={placeholder}
            aria-label="Search input"
            aria-controls="search-suggestions"
            aria-autocomplete="list"
            role="combobox"
            aria-expanded={showSuggestions}
          />
          
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute top-1/2 transform -translate-y-1/2 right-14 text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          
          <button
            type="submit"
            className="absolute top-1/2 transform -translate-y-1/2 right-2 w-10 h-10 flex items-center justify-center bg-indigo-600 text-white rounded-lg transition-all duration-200 hover:bg-indigo-700 disabled:opacity-50 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={!query.trim()}
            aria-label="Submit search"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>

        {showSuggestions && filteredSuggestions.length > 0 && (
          <div
            ref={suggestionsRef}
            id="search-suggestions"
            className="absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-10"
            role="listbox"
          >
            <div className="px-4 py-2 text-gray-700 font-semibold border-b border-gray-100">
              Popular searches
            </div>
            {filteredSuggestions.map((suggestion, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 transition-colors duration-150"
                onClick={() => handleSuggestionClick(suggestion)}
                role="option"
                aria-selected={query === suggestion}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleSuggestionClick(suggestion);
                  }
                }}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchForm;