import { useState } from 'react'
import { Input } from '../../index'

import { CommandPalette } from '.'

export default {
  title: 'Overlays/CommandPalette',
  component: CommandPalette,
  // argTypes: {
  //   visible: {
  //     options: [true, false],
  //     control: { type: 'radio' },
  //   },
  // },
}

const RESULTS = {
  count: 8,
  list: [
    {
      title: 'Using auth with Next.js',
      slug: 'auth-nextjs',
      breadcrumbs: ['Docs', 'Auth'],
    },
    {
      title: 'Getting started with Auth providers',
      slug: 'auth-providers',
      breadcrumbs: ['Docs', 'Auth'],
    },
    {
      title: 'Starter templates',
      slug: 'auth-providers',
      breadcrumbs: ['Docs', 'Starters'],
    },
    {
      title: 'Using auth with Next.js',
      slug: 'auth-nextjs',
      breadcrumbs: ['Docs', 'Auth'],
    },
    {
      title: 'Getting started with Auth providers',
      slug: 'auth-providers',
      breadcrumbs: ['Docs', 'Auth'],
    },
    {
      title: 'Starter templates',
      slug: 'auth-providers',
      breadcrumbs: ['Docs', 'Starters'],
    },
    {
      title: 'Using auth with Next.js',
      slug: 'auth-nextjs',
      breadcrumbs: ['Docs', 'Auth'],
    },
    {
      title: 'Getting started with Auth providers',
      slug: 'auth-providers',
      breadcrumbs: ['Docs', 'Auth'],
    },
  ],
}

const SearchBox = () => <Input placeholder="Search / Cmd + K" />

export const Default = (args) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="min-h-[600px] flex items-center justify-center">
      <div
        onClick={(e) => {
          e.stopPropagation()
          setIsVisible(!isVisible)
        }}
      >
        <SearchBox />
      </div>
      <CommandPalette
        visible={isVisible}
        onCancel={() => setIsVisible(false)}
        onToggle={() => setIsVisible(!isVisible)}
        {...args}
      />
    </div>
  )
}

export const noResults = (args) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="min-h-[600px] flex items-center justify-center">
      <div
        onClick={(e) => {
          e.stopPropagation()
          setIsVisible(!isVisible)
        }}
      >
        <SearchBox />
      </div>
      <CommandPalette
        visible={isVisible}
        onCancel={() => setIsVisible(false)}
        onToggle={() => setIsVisible(!isVisible)}
        {...args}
      />
    </div>
  )
}

export const loadingResults = (args) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="min-h-[600px] flex items-center justify-center">
      <div
        onClick={(e) => {
          e.stopPropagation()
          setIsVisible(!isVisible)
        }}
      >
        <SearchBox />
      </div>
      <CommandPalette
        visible={isVisible}
        onCancel={() => setIsVisible(false)}
        onToggle={() => setIsVisible(!isVisible)}
        {...args}
      />
    </div>
  )
}

export const interactive = (args) => {
  const [isVisible, setIsVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState({})
  const [loading, setLoading] = useState(false)

  async function handlePost(e) {
    const value = e.target.value
    setSearchTerm(value)

    try {
      setLoading(true)
      const response = await fetch(
        'https://doc-search.supabase.com/multi_search?x-typesense-api-key=t0HAJQy4KtcMk3aYGnm8ONqab2oAysJz',
        {
          method: 'POST',
          body: JSON.stringify({
            searches: [
              {
                collection: 'supabase',
                // filter_by:
                //   'language:=en && docusaurus_tag:=[default,docs-default-current]',
                // filter_by: 'language:=en',
                // group_by: 'url',
                // group_limit: 6,
                // highlight_full_fields:
                //   'hierarchy.lvl0,hierarchy.lvl1,hierarchy.lvl2,hierarchy.lvl3,hierarchy.lvl4,hierarchy.lvl5,hierarchy.lvl6,content',
                // include_fields:
                //   'hierarchy.lvl0,hierarchy.lvl1,hierarchy.lvl2,hierarchy.lvl3,hierarchy.lvl4,hierarchy.lvl5,hierarchy.lvl6,content,anchor,url,type,id',
                q: value,
                query_by:
                  'hierarchy.lvl0,hierarchy.lvl1,hierarchy.lvl2,hierarchy.lvl3,hierarchy.lvl4,hierarchy.lvl5,hierarchy.lvl6,content',
                // attributesToSnippet: [
                //   'hierarchy.lvl1:5',
                //   'hierarchy.lvl2:5',
                //   'hierarchy.lvl3:5',
                //   'hierarchy.lvl4:5',
                //   'hierarchy.lvl5:5',
                //   'hierarchy.lvl6:5',
                //   'content:5',
                // ],
                snippetEllipsisText: '...',
                highlightPreTag: '<mark>',
                highlightPostTag: '<mark>',
              },
            ],
          }),
        }
      ).then((r) => {
        return r.json()
      })

      const pluckedResult = response.results[0]
      console.log('pluckedResult', pluckedResult)

      const results = {
        count: pluckedResult.found,
        list: pluckedResult.grouped_hits.map((hit) => {
          console.log(hit)
          return {
            title: 'hello', // hit.hits.document.anchor,
            slug: 'document', // hit.hits.document.url,
            breadcrumbs: ['Docs', 'Auth'],
          }
        }),
      }

      setLoading(false)
      console.log(response)
      console.log(results)
      setResults(results)
    } catch (error) {
      setLoading(false)
      console.error(error)
    }
  }

  return (
    <>
      {/* {searchTerm} */}

      <pre style={{ color: 'red' }}>{JSON.stringify(results, null, '\t')}</pre>

      <div className="min-h-[600px] flex items-center justify-center">
        <div
          onClick={(e) => {
            e.stopPropagation()
            setIsVisible(!isVisible)
          }}
        >
          <SearchBox />
        </div>
        <CommandPalette
          loading={loading}
          term={searchTerm}
          onSearch={(e) => handlePost(e)}
          visible={isVisible}
          results={results}
          onCancel={() => setIsVisible(false)}
          onToggle={() => setIsVisible(!isVisible)}
          {...args}
        />
      </div>
    </>
  )
}

Default.args = {
  results: RESULTS,
  term: 'search term',
  onSearch: () => {},
}

noResults.args = {
  results: {
    count: 0,
    list: [],
  },
}

loadingResults.args = {
  loading: true,
}

interactive.args = {
  // loading: true,
}
