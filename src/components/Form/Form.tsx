import { useReducer } from 'react'
import {
  Formik,
  FormikConfig,
  FormikState,
  FormikComputedProps,
  useFormik as UseFormik,
} from 'formik'
import { FormContextProvider } from './FormContext'

interface Props extends FormikConfig<any>, Partial<FormikState<any>> {
  children: any
  handleIsSubmitting?: any
  handleIsValidating?: any
}

function errorReducer(state: any, action: any) {
  console.log('action', action)
  console.log('state', state)
  if (action) {
    return {
      ...state,
      [action.key]: action.error,
    }
  } else {
    throw new Error()
  }
}

// function reducer(state: any, action: any) {
//   if (action) {
//     return {
//       ...state,
//       [action.target.id]: {
//         value: action.target.value,
//         name: action.target.name,
//       },
//     }
//   } else {
//     throw new Error()
//   }
// }

export default function Form({ validate, ...rest }: any) {
  // const [state, dispatch] = useReducer(reducer, null)

  const [fieldLevelErrors, dispatchErrors] = useReducer(errorReducer, null)

  const { handleIsSubmitting, handleIsValidating } = rest

  // function childOnChange(e: any) {
  //   e.persist()
  //   dispatch(e)
  // }

  function handleFieldLevelValidation(key: any, error: string) {
    dispatchErrors({ key, error })
  }

  // function HandleFieldLevelErrors() {
  //   console.log('fieldLevelErrors, should be obj', fieldLevelErrors)
  //   return fieldLevelErrors
  // }

  console.log('final fieldLevelErrors', fieldLevelErrors)

  return (
    <Formik
      {...rest}
      validate={
        validate ||
        function () {
          return fieldLevelErrors
        }
      }
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,

        isSubmitting,
        isValidating,
        // status,
        // submitCount,
        /* and other goodies */
      }) => {
        if (handleIsSubmitting) handleIsSubmitting(isSubmitting)
        if (handleIsValidating) handleIsValidating(isValidating)

        return (
          <form onSubmit={handleSubmit}>
            <FormContextProvider
              values={values}
              errors={errors}
              formContextOnChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              fieldLevelValidation={handleFieldLevelValidation}
              children={rest.children}
              // children={props.children({
              //   /** map of field names to specific error for that field */
              //   // errors,
              //   // /** map of field names to whether the field has been touched */
              //   // touched,
              //   /** whether the form is currently submitting */
              //   isSubmitting,
              //   /** whether the form is currently validating (prior to submission) */
              //   isValidating,
              //   /** Number of times user tried to submit the form */
              //   // submitCount,
              // })}
            />
          </form>
        )
      }}
    </Formik>
  )
}

// function reducer(state: any, action: any) {
//   if (action) {
//     return {
//       ...state,
//       [action.target.id]: {
//         value: action.target.value,
//         name: action.target.name,
//       },
//     }
//   } else {
//     throw new Error()
//   }
// }
