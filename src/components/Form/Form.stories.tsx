import { string } from 'prop-types'
import React, { useState } from 'react'

import { Form } from '.'
import { Input, Button, Space, InputNumber } from '../../index'
import Checkbox from '../Checkbox'
import Radio from '../Radio'
import Select from '../Select'

import * as Yup from 'yup'

export default {
  title: 'Data Input/Form',
  component: Form,
}

interface Values {
  first_name: string
  last_name: string
  profession: string
  number: number | undefined
  // remember_me: boolean
  favorite_food: string
  check_3: any
  check_2: any
  check_1: any
  textarea: string
}

const INITIAL_VALUES: Values = {
  first_name: '',
  last_name: '',
  profession: '',
  number: undefined,
  // remember_me: false,
  favorite_food: 'pizza',
  check_3: false,
  check_2: true,
  check_1: false,
  textarea: '',
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

  return (
    <Form
      initialValues={{
        email: '',
        firstname: '',
      }}
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
            id="email"
            label="email"
            placeholder="something in here"
            labelOptional="This is a required field"
            validation={validateEmail}
          />
          <Input
            id="firstname"
            label="firstname"
            placeholder="something in here"
          />
          <Button loading={isSubmitting} type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      )}
    </Form>
  )
}

export const InputLevelValidationYip = () => {
  // validation schema
  const SignupSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastname: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  })

  return (
    <Form
      initialValues={{
        firstname: '',
        lastname: '',
        email: '',
      }}
      validationSchema={SignupSchema}
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
            id="firstname"
            name="firstname"
            label="firstname"
            placeholder="firstname"
          />
          <Input
            id="lastname"
            name="lastname"
            label="lastname"
            placeholder="lastname"
          />
          <Input
            id="email"
            name="email"
            label="Email"
            placeholder="This is your email"
          />
          <Button loading={isSubmitting} type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      )}
    </Form>
  )
}

export const LargerExample = () => {
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

          console.log(values)

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

          if (!values.textarea) {
            errors.textarea = 'Required'
          }

          if (!values.number) {
            errors.number = 'Required'
          }

          if (values.number <= 13) {
            errors.number = 'Must be a number above 13'
          }

          if (!values.favorite_food) {
            errors.favorite_food = 'You must select a favourite food'
          }

          // if (values.remember_me)

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
              {/* <Checkbox id="helloworld" label="Hello world" /> */}
              <Input.TextArea id="textarea" rows={5} name="textarea" />
              <Checkbox.Group
                label="Group of checkboxes"
                layout="horizontal"
                labelOptional="Optional label"
                descriptionText="You can also show label hint text here"
              >
                <Checkbox
                  name="check_1"
                  id="check_1"
                  label="Remember me"
                  description="hello world"
                />
                <Checkbox
                  name="check_2"
                  id="check_2"
                  label="Remember me"
                  description="hello world"
                />
                <Checkbox
                  name="check_3"
                  id="check_3"
                  label="Remember me"
                  description="hello world"
                />
              </Checkbox.Group>
              <Radio.Group
                layout="horizontal"
                name="favorite_food"
                label="favorite_food"
                type="cards"
              >
                <Radio value="pizza" label="Pizza" description="hello world" />
                <Radio
                  value="burger"
                  label="Burger"
                  description="hello world"
                />
                <Radio value="fries" label="Fries" description="hello world" />
              </Radio.Group>
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
