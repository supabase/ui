import { Loading } from '../Loading'
import CommandPaletteStyles from './CommandPalette.module.css'

export default function CommandPaletteResults({
  results,
  inputRef,
  resultsRef,
  onCancel,
  loading,
  term,
}) {
  const handlePagesShortcuts = ({ e, activeIndex }) => {
    if (e.keyCode === 38) {
      // Handle arrow up key
      const focusArea =
        activeIndex === 1
          ? inputRef.current
          : resultsRef.current[activeIndex - 1]
      focusArea.focus()
      e.preventDefault()
    }

    if (e.keyCode === 40) {
      // Handle arrow down key
      const focusArea =
        activeIndex === results?.list?.length
          ? inputRef.current
          : resultsRef.current[activeIndex + 1]
      focusArea.focus()
      e.preventDefault()
    }

    if (e.keyCode === 13) {
      // Handle enter key
      handleNavigate({ e, activeIndex })
      e.preventDefault()
    }
  }

  const handleNavigate = ({ e, activeIndex }) => {
    e.preventDefault()
    const activeResult = resultsRef.current[activeIndex]
    activeResult.click()
    onCancel()
  }

  const renderResults = () => {
    if (loading) {
      return (
        <div
          className={CommandPaletteStyles['sbui-cp--results-loader-wrapper']}
        >
          <Loading active={true} />
        </div>
      )
    }

    if (results?.list?.length > 0) {
      return (
        <div className={CommandPaletteStyles['sbui-cp--results-list-wrapper']}>
          {results?.list?.map((item, resultsIndex) => {
            return (
              <a
                href=""
                tabIndex="0"
                key={item.slug + resultsIndex}
                className={`group ${CommandPaletteStyles['sbui-cp--result-item']}`}
                ref={(el) => (resultsRef.current[resultsIndex + 1] = el)}
                onKeyDown={(e) => {
                  handlePagesShortcuts({ e, activeIndex: resultsIndex + 1 })
                }}
                onClick={(e) =>
                  handleNavigate({ e, activeIndex: resultsIndex + 1 })
                }
              >
                <span className="flex flex-col">
                  <span className="">{item.title}</span>
                  {item?.breadcrumbs?.length > 0 ? (
                    <span
                      className={
                        CommandPaletteStyles[
                          'sbui-cp--result-breadcrumbs-wrapper'
                        ]
                      }
                    >
                      {item?.breadcrumbs?.map((link, breadcrumbsIndex) => (
                        <div
                          key={link}
                          className={
                            CommandPaletteStyles[
                              'sbui-cp--result-breadcrumbs-item'
                            ]
                          }
                        >
                          {link}
                          {breadcrumbsIndex < item.breadcrumbs.length - 1 ? (
                            <span className="px-1">{`>`}</span>
                          ) : (
                            ''
                          )}
                        </div>
                      ))}
                    </span>
                  ) : (
                    ''
                  )}
                </span>
                <span
                  className={
                    CommandPaletteStyles['sbui-cp--result-return-icon']
                  }
                >
                  ↵
                </span>
              </a>
            )
          })}
        </div>
      )
    }

    return <NoResults term={term} />
  }

  return (
    <ResultsWrapper>
      {renderResults()}
      {!loading && results?.list?.length > 0 ? <CommandPaletteHints /> : ''}
    </ResultsWrapper>
  )
}

const ResultsWrapper = ({ children }) => {
  return (
    <div className={CommandPaletteStyles['sbui-cp--results-wrapper']}>
      {children}
    </div>
  )
}

const NoResults = ({ term }) => (
  <div className={CommandPaletteStyles['sbui-cp--no-results-wrapper']}>
    No results found {term ? `for ${(<strong>{term}</strong>)}` : ''}
  </div>
)

const CommandPaletteHints = () => (
  <div className={CommandPaletteStyles['sbui-cp--hints-wrapper']}>
    Use{' '}
    <span className={CommandPaletteStyles['sbui-cp--hints-highlight']}>↑</span>{' '}
    and{' '}
    <span className={CommandPaletteStyles['sbui-cp--hints-highlight']}>↓</span>{' '}
    arrow keys to navigate,{' '}
    <span className={CommandPaletteStyles['sbui-cp--hints-highlight']}>↵</span>{' '}
    to select,{' '}
    <span className={CommandPaletteStyles['sbui-cp--hints-highlight']}>
      esc
    </span>{' '}
    to close
  </div>
)
