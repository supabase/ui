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
    // {
    //   title: 'Starter templates',
    //   slug: 'auth-providers',
    //   breadcrumbs: ['Docs', 'Starters'],
    // },
    // {
    //   title: 'Using auth with Next.js',
    //   slug: 'auth-nextjs',
    //   breadcrumbs: ['Docs', 'Auth'],
    // },
    // {
    //   title: 'Getting started with Auth providers',
    //   slug: 'auth-providers',
    //   breadcrumbs: ['Docs', 'Auth'],
    // },
    // {
    //   title: 'Starter templates',
    //   slug: 'auth-providers',
    //   breadcrumbs: ['Docs', 'Starters'],
    // },
    // {
    //   title: 'Using auth with Next.js',
    //   slug: 'auth-nextjs',
    //   breadcrumbs: ['Docs', 'Auth'],
    // },
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
