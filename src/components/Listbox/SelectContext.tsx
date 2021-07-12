import React, { createContext, useContext } from 'react'

interface ContextProps {
  formContextOnChange: any
}
// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
const SelectContext = createContext<ContextProps>({
  formContextOnChange: null,
})

export const SelectContextProvider = (props: any) => {
  const { formContextOnChange } = props

  const value = {
    formContextOnChange: formContextOnChange,
  }
  return (
    <SelectContext.Provider value={value} {...props}>
      {props.children}
    </SelectContext.Provider>
  )
}

// context helper to avoid using a consumer component
export const useSelectContext = () => {
  const context = useContext(SelectContext)
  if (context === undefined) {
    throw new Error(
      `useFormContextOnChange must be used within a FormContextProvider.`
    )
  }
  return context
}
