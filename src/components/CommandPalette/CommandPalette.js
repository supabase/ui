import { useEffect, useRef } from 'react'
import { Modal } from '../Modal'
import { IconSearch } from '../Icon/icons/IconSearch'
import { IconX } from '../Icon/icons/IconX'
import CommandPaletteResults from './CommandPaletteResults'
import { action } from '@storybook/addon-actions'

const NoResults = ({ term }) => (
  <div className="flex items-center justify-center min-h-[200px] dark:text-dark-200 opacity-50 bg-gray-200">
    No results found for <strong>{term}</strong>
  </div>
)

export default function Default({
  onToggle,
  visible,
  onCancel,
  results,
  term,
  onSearch,
  loading
}) {
  let keysPressed = {}
  const resultsRef = useRef([])
  const inputRef = useRef()

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  })

  const handleKeyDown = (e) => {
    if ((e.keyCode === 75 && e.metaKey) || (e.ctrlKey && e.keyCode === 75)) {
      onToggle()
    }
  }

  const handleShortcuts = (e) => {
    keysPressed[e.key] = true
    if (e.key === 'Escape') {
      e.preventDefault()
      onCancel()
    }

    if (results?.list?.length) {
      if (e.keyCode === 40) {
        // Down arrow
        e.preventDefault()
        resultsRef.current[1].focus()
      }

      if (e.keyCode === 38) {
        // Up arrow
        e.preventDefault()
        resultsRef.current[results?.list?.length].focus()
      }
    }
  }

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      hideFooter={true}
      contentStyle={{ border: 0 }}
    >
      <div className="rounded-lg overflow-hidden">
        <div
          className={`flex items-center w-full bg-white rounded-t-lg dark:bg-scale-500`}
        >
          <div className="px-2">
            <IconSearch size={18} stroke="#999" strokeWidth="1.8" />
          </div>
          <input
            ref={(el) => (inputRef.current = el)}
            onKeyDown={(e) => handleShortcuts(e)}
            value={term}
            onChange={onSearch}
            className="text-sm md:text-base pr-3 py-3 w-full focus:outline-none bg-transparent placeholder-dark-300 dark:placeholder-dark-400 dark:text-white"
            placeholder="Type to search..."
            style={{ margin: 0 }}
          />
          {results?.list?.length > 0 ? (
            <div className="text-gray-800 px-4 text-sm whitespace-nowrap dark:text-dark-400">
              {results?.list?.length} results
            </div>
          ) : (
            ''
          )}
          <button
            title="Use Esc to close the Search Bar"
            onClick={onCancel}
            className="cursor-pointer text-gray-800 border-l border-gray-400 dark:border-dark-500 hover:text-gray-700 text-sm dark:border-dark-500/50 dark:hover:text-dark-500 opacity-60 hover:opacity-100 pl-2 pr-3"
          >
            <IconX size={18} stroke="#888" strokeWidth="1.8" />
          </button>
        </div>

        <CommandPaletteResults
          inputRef={inputRef}
          results={results}
          resultsRef={resultsRef}
          onCancel={onCancel}
          loading={loading}
          term={term}
        />
      </div>
    </Modal>
  )
}
