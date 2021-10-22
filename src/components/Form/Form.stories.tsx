import { string } from 'prop-types'
import React, { useState } from 'react'

import { Form } from '.'
import { Input, Button, Space, InputNumber } from '../../index'
import Select from '../Select'

export default {
  title: 'Data Input/Form',
  component: Form,
}

interface Values {
  first_name: string
  last_name: string
  profession: string
  number: number | undefined
}

const INITIAL_VALUES: Values = {
  first_name: '',
  last_name: '',
  profession: 'police',
  number: undefined,
}

export const Default = () => {
  return (
    <>
      <Form
        initialValues={INITIAL_VALUES}
        onSubmit={(values: any, { setSubmitting }: any) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
        validate={(values: Values) => {
          const errors: any = {}
          if (!values.first_name) {
            errors.first_name = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.first_name)
          ) {
            errors.first_name = 'Invalid email address'
          }

          if (!values.profession) {
            errors.profession = 'Required'
          }

          if (!values.number) {
            errors.number = 'Required'
          }

          if (values?.number <= 13) {
            errors.number = 'Must be a number above 13'
          }

          if (values?.number >= 33) {
            errors.number = 'Must be a number below 33'
          }

          return errors
        }}
      >
        {({ isSubmitting }: any) => (
          <>
            <div className="space-y-8">
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
              <Select
                id="profession"
                label="Profession"
                placeholder="something in here"
              >
                <Select.Option key="empty-enum" value="">
                  ---
                </Select.Option>
                <Select.Option value="teacher">Teacher</Select.Option>
                <Select.Option value="firefighter">Firefighter</Select.Option>
                <Select.Option value="police">Police</Select.Option>
              </Select>
              <InputNumber
                id="number"
                label="Number"
                placeholder="124"
                labelOptional="Must be between 13 - 31"
              />
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

  function validateProfession(value: string) {
    let error
    if (!value) {
      error = 'Required'
    }
    return error
  }

  return (
    <Form
      initialValues={INITIAL_VALUES}
      validateOnBlur
      onSubmit={(values: any, { setSubmitting }: any) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      {({ isSubmitting }: any) => (
        <div className="space-y-4">
          <Input
            id="first_name"
            label="first name"
            placeholder="something in here"
            labelOptional="This is a required field"
            validation={validateEmail}
          />
          <Input
            id="last_name"
            label="last name"
            placeholder="something in here"
          />
          <Select
            id="profession"
            label="Profession"
            placeholder="something in here"
            defaultValue="police"
            validation={validateProfession}
          >
            <Select.Option key="empty-enum" value="">
              ---
            </Select.Option>
            <Select.Option value="teacher">Teacher</Select.Option>
            <Select.Option value="firefighter">Firefighter</Select.Option>
            <Select.Option value="police">Police</Select.Option>
          </Select>
          <Button loading={isSubmitting} type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      )}
    </Form>
  )
}
