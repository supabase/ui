import { useEffect, useRef } from 'react'
import { Modal } from '../Modal'
import { IconSearch } from '../Icon/icons/IconSearch'
import { IconX } from '../Icon/icons/IconX'
import CommandPaletteResults from './CommandPaletteResults'
import CommandPaletteStyles from './CommandPalette.module.css'
import { action } from '@storybook/addon-actions'

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
        <div className={CommandPaletteStyles['sbui-cp--input-wrapper']}>
          <div className="px-2">
            <IconSearch size={18} stroke="#999" strokeWidth="1.8" />
          </div>
          <input
            ref={(el) => (inputRef.current = el)}
            onKeyDown={(e) => handleShortcuts(e)}
            value={term}
            onChange={onSearch}
            className={CommandPaletteStyles['sbui-cp--input-field']}
            placeholder="Type to search..."
          />
          {results?.list?.length > 0 ? (
            <div className={CommandPaletteStyles['sbui-cp--results-count']}>
              {results?.list?.length} results
            </div>
          ) : (
            ''
          )}
          <button
            title="Use Esc to close the Search Bar"
            onClick={onCancel}
            className={CommandPaletteStyles['sbui-cp--close-icon']}
          >
            <div>
              <IconX size={18} stroke="#888" strokeWidth="1.8" />
            </div>
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
