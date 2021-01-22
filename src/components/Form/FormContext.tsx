import React, { createContext, useContext } from 'react'

interface ContextProps {
  formContextOnChange: any
}
// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
const FormContext = createContext<ContextProps>({
  formContextOnChange: null,
})

export const FormContextProvider = (props: any) => {
  const { formContextOnChange } = props

  const value = {
    formContextOnChange: formContextOnChange,
  }
  return (
    <FormContext.Provider value={value} {...props}>
      {props.children}
    </FormContext.Provider>
  )
}

// context helper to avoid using a consumer component
export const useFormContext = () => {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error(
      `useFormContextOnChange must be used within a FormContextProvider.`
    )
  }
  return context
}
