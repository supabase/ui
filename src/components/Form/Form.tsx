import React, { useReducer } from 'react'
import { FormContextProvider } from './FormContext'

export default function Form({ children }: any) {
  const [state, dispatch] = useReducer(reducer, null)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log(state)
  }

  function childOnChange(e: any) {
    e.persist()
    dispatch(e)
  }

  return (
    <form onSubmit={onSubmit}>
      <FormContextProvider formContextOnChange={childOnChange}>
        {children}
      </FormContextProvider>
    </form>
  )
}

function reducer(state: any, action: any) {
  if (action) {
    return {
      ...state,
      [action.target.id]: {
        value: action.target.value,
        name: action.target.name,
      },
    }
  } else {
    throw new Error()
  }
}
