import { string } from 'prop-types'
import React, { useState } from 'react'

import { Form } from '.'
import { Input, Button, Space } from '../../index'

export default {
  title: 'Data Input/Form',
  component: Form,
}

export const Default = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  interface Values {
    first_name: string
    last_name: string
  }

  const initialValues: Values = { first_name: '', last_name: '' }

  return (
    <>
      <Form
        initialValues={initialValues}
        validate={(values: Values) => {
          const errors: any = {}
          if (!values.first_name) {
            errors.first_name = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.first_name)
          ) {
            errors.first_name = 'Invalid email address'
          }
          return errors
        }}
        onSubmit={(values: any, { setSubmitting }: any) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
        handleIsSubmitting={setIsSubmitting}
      >
        {({ isSubmitting }: any) => (
          <>
            <div className="space-y-4">
              <p>{isSubmitting ? 'submitting' : 'not submitting'}</p>
              <Input
                id="first_name"
                label="first name"
                placeholder="something in here"
              />
              <Input
                id="last_name"
                label="last name"
                placeholder="something in here"
              />
              {/* <button type="submit">Submit me</button> */}
              <Button loading={isSubmitting} type="primary" htmlType="submit">
                Submit
              </Button>
            </div>
          </>
        )}
      </Form>
    </>
  )
}

export const InputLevelValidation = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  function validateEmail(value: string) {
    console.log('validateEmail running')
    let error
    if (!value) {
      error = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address'
    }
    return error
  }

  return (
    <>
      <Form
        initialValues={{ first_name: '', last_name: '' }}
        onSubmit={(values: any, { setSubmitting }: any) => {
          // console.log('errors in submit', errors)
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
        handleIsSubmitting={setIsSubmitting}
      >
        <div className="space-y-4">
          <Input
            id="first_name"
            label="first name"
            placeholder="something in here"
            validation={validateEmail}
          />
          <Input
            id="last_name"
            label="last name"
            placeholder="something in here"
          />
          <Button loading={isSubmitting} type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </Form>
    </>
  )
}
