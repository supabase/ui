import { Loading } from '../Loading'

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
        <div className="h-full flex items-center justify-center">
          <Loading active={true} />
        </div>
      )
    }

    if (results?.list?.length > 0) {
      return (
        <ResultsWrapper>
          {results?.list?.map((item, resultsIndex) => {
            return (
              <a
                href=""
                tabIndex="0"
                key={item.slug + resultsIndex}
                className="cp-result group px-3 hover:bg-dark-100 focus:bg-dark-100 dark:hover:bg-dark-600 items-center text-[0.93rem] py-2 dark:text-dark-200 dark:focus:bg-dark-600 flex focus:outline-none"
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
                    <span className="cp-breadcrumb flex items-center text-[0.75rem]">
                      {item?.breadcrumbs?.map((link, breadcrumbsIndex) => (
                        <div
                          key={link}
                          className="dark:group-hover:text-white dark:group-focus:text-white opacity-50"
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
                <span className="hidden group-focus:flex group-hover:flex opacity-40 ml-auto">
                  ↵
                </span>
              </a>
            )
          })}
          <CommandPaletteHints />
        </ResultsWrapper>
      )
    }

    return <NoResults term={term} />
  }

  return <ResultsWrapper>{renderResults()}</ResultsWrapper>
}

const ResultsWrapper = ({ children }) => {
  return (
    <div className="bg-gray-200 h-[calc(410px)] overflow-y-auto relative cp-results dark:bg-dark-700">
      {children}
    </div>
  )
}

const NoResults = ({ term }) => (
  <div className="flex items-center justify-center min-h-[200px] dark:text-dark-200 opacity-50 bg-gray-200">
    No results found {term ? `for ${(<strong>{term}</strong>)}` : ''}
  </div>
)

const CommandPaletteHints = () => (
  <div className="hidden md:block text-[0.78rem] sticky bottom-0 left-0 w-full bg-gray-200/80 dark:border-dark-500/40 backdrop-blur-lg text-dark-400/60 dark:text-dark-300/50 px-4 py-2 rounded-b-lg dark:text-dark-300/80 border-t border-gray-400">
    Use{' '}
    <span className="bg-white text-dark-400/70 dark:text-dark-300/80 dark:bg-dark-500/70 px-1 py-px shadow rounded-md mr-1">
      ↑
    </span>{' '}
    and{' '}
    <span className="bg-white text-dark-400/70 dark:text-dark-300/80 dark:bg-dark-500/70 px-1 py-px shadow rounded-md mx-1">
      ↓
    </span>{' '}
    arrow keys to navigate,{' '}
    <span className="bg-white text-dark-400/70 dark:text-dark-300/80 dark:bg-dark-500/70 px-1 py-px shadow rounded-md mx-1">
      ↵
    </span>{' '}
    to select,{' '}
    <span className="mx-1 bg-white text-dark-400/70 dark:text-dark-300/80 dark:bg-dark-500/70 px-1 py-px shadow rounded-md">
      esc
    </span>{' '}
    to close
  </div>
)
