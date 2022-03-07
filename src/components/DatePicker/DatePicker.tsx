import React, { useState, forwardRef, useEffect } from 'react'
import { Button } from '../Button'
import { Popover } from '../Popover'

import DatePicker from 'react-datepicker'
import dayjs from 'dayjs'
import {
  IconChevronLeft,
  IconChevronRight,
  IconArrowRight,
  IconCalendar,
  Input,
} from '../../index'

import { format } from 'date-fns'

var utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

// import { IconChevronLeft, IconChevronRight } from '../Icon/icons'

interface RootProps {}

const START_DATE_DEFAULT = new Date()
const END_DATE_DEFAULT = null

function _DatePicker({}: RootProps) {
  const [open, setOpen] = useState<boolean>(false)

  const [appliedStartDate, setAppliedStartDate] = useState<any>(null)
  const [appliedEndDate, setAppliedEndDate] = useState<any>(null)

  // let classes = [DatePickerStyles['sbui-DatePicker__content']]
  // if (className) {
  //   classes.push(className)

  const [startDate, setStartDate] = useState<any>(START_DATE_DEFAULT)
  const [endDate, setEndDate] = useState<any>(END_DATE_DEFAULT)

  // }

  // useEffect(() => {
  //   if (startDate > endDate) setStartDate(endDate)
  // }, [endDate])

  // useEffect(() => {
  //   if (startDate > endDate) setEndDate(startDate)
  // }, [startDate])

  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (e: any) => {
    setIsOpen(!isOpen)
    setStartDate(e)
  }

  const handleClick = (e: any) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  function handleSubmit() {
    setOpen(false)
    setAppliedStartDate(startDate)
    setAppliedEndDate(endDate)
  }

  function handleClear() {
    setOpen(false)
    setStartDate(START_DATE_DEFAULT)
    setEndDate(END_DATE_DEFAULT)

    setAppliedStartDate(null)
    setAppliedEndDate(null)
  }

  const DEFAULT_DATE_FORMAT = 'ddd MMM YYYY HH:mm:ss'

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex items-center justify-center max-w-2xl py-20 mx-auto space-x-4">
        <div className="relative w-40">
          <Popover
            open={open}
            onOpenChange={(e) => setOpen(e)}
            size="small"
            align="center"
            side="bottom"
            header={
              <div className="flex justify-between items-center py-2">
                <div className="grow">
                  <div
                    className="
                      flex items-center justify-center gap-2
                      text-xs text-scale-1100 bg-scale-100 dark:bg-scaleA-300 border border-scale-700 h-6 rounded"
                  >
                    <input
                      pattern="[0-9]*"
                      placeholder="DD"
                      // type="text"
                      aria-describedby="DateInput-input-1696-description"
                      aria-label="Day"
                      className="w-4 bg-transparent text-center"
                      value={format(new Date(startDate), 'dd')}
                    />

                    <input
                      pattern="[0-9]*"
                      placeholder="MM"
                      // type="text"
                      aria-describedby="DateInput-input-1853-description"
                      aria-label="Month"
                      className="w-4 bg-transparent text-center"
                      value={format(new Date(startDate), 'MM')}
                    />

                    <input
                      pattern="[0-9]*"
                      placeholder="YYYY"
                      // type="text"
                      aria-describedby="DateInput-input-1860-description"
                      aria-label="Year"
                      className="w-8 bg-transparent text-center"
                      value={format(new Date(startDate), 'yyyy')}
                    />
                  </div>
                </div>
                <div className="w-12 flex items-center justify-center text-scale-900">
                  <IconArrowRight strokeWidth={2} />
                </div>
                <div className="grow">
                  <div
                    className="
                      flex items-center justify-center gap-2
                      text-xs text-scale-1100 bg-scale-100 dark:bg-scaleA-300 border border-scale-700 h-6 rounded"
                  >
                    <input
                      className="appearance-none w-4 bg-transparent text-center"
                      value={format(new Date(endDate), 'dd')}
                    />
                    <input
                      className="appearance-none w-4 bg-transparent text-center"
                      value={format(new Date(endDate), 'MM')}
                    />
                    <input
                      className="appearance-none w-8 bg-transparent text-center"
                      value={format(new Date(endDate), 'yyyy')}
                    />
                  </div>
                </div>
              </div>
            }
            overlay={
              <div className="px-3 py-4">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    const [start, end] = date
                    setStartDate(start)
                    setEndDate(end)
                  }}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  // showTimeSelect
                  // nextMonthButtonLabel=">"
                  // previousMonthButtonLabel="<"
                  // popperClassName="react-datepicker-left"
                  // customInput={<ButtonInput />}
                  // dateFormat={DEFAULT_DATE_FORMAT}
                  // dateFormat={(locale, date) => dayjs(date).format('MM-YYYY')}
                  inline
                  renderCustomHeader={({
                    date,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled,
                  }) => [
                    <div className="flex items-center justify-between px-2 py-2">
                      <div className="flex items-center justify-between w-full">
                        <button
                          onClick={decreaseMonth}
                          disabled={prevMonthButtonDisabled}
                          type="button"
                          className={`
                        ${
                          prevMonthButtonDisabled &&
                          'cursor-not-allowed opacity-50'
                        }
                        text-scale-1100 hover:text-scale-1200 focus:outline-none
                    `}
                        >
                          <IconChevronLeft size={16} strokeWidth={2} />
                        </button>
                        <span className="text-sm text-scale-1100">
                          {format(date, 'MMMM yyyy')}
                        </span>
                        <button
                          onClick={increaseMonth}
                          disabled={nextMonthButtonDisabled}
                          type="button"
                          className={`
                        ${
                          nextMonthButtonDisabled &&
                          'cursor-not-allowed opacity-50'
                        }
                        text-scale-1100 hover:text-scale-1200 focus:outline-none
                    `}
                        >
                          <IconChevronRight size={16} strokeWidth={2} />
                        </button>
                      </div>
                    </div>,
                  ]}
                />
                <div className="flex items-center justify-end gap-2 mt-4">
                  <Button type="default" onClick={() => handleClear()}>
                    Clear
                  </Button>
                  <Button onClick={() => handleSubmit()}>Apply</Button>
                </div>
              </div>
            }
          >
            <Button type="default" icon={<IconCalendar />}>
              {/* Custom */}
              {appliedStartDate && appliedEndDate ? (
                <>
                  {format(new Date(appliedStartDate), 'dd MMMM yy')} -{' '}
                  {format(new Date(appliedEndDate), 'dd MMM yy')}
                </>
              ) : (
                'Custom'
              )}
            </Button>
          </Popover>
        </div>

        {/* <div className="relative w-40">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            nextMonthButtonLabel=">"
            previousMonthButtonLabel="<"
            popperClassName="react-datepicker-right"
            customInput={<ButtonInput />}
            renderCustomHeader={({
              date,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <>
                <div className="flex items-center justify-between px-2 py-2">
                  <div className="flex items-center justify-between w-full">
                    <button
                      onClick={decreaseMonth}
                      disabled={prevMonthButtonDisabled}
                      type="button"
                      className={`
                        ${
                          prevMonthButtonDisabled &&
                          'cursor-not-allowed opacity-50'
                        }
                        text-scale-1100 hover:text-scale-1200 focus:outline-none
                    `}
                    >
                      <IconChevronLeft size={16} strokeWidth={2} />
                    </button>
                    <span className="text-sm text-scale-1100">
                      {format(date, 'MMMM yyyy')}
                    </span>
                    <button
                      onClick={increaseMonth}
                      disabled={nextMonthButtonDisabled}
                      type="button"
                      className={`
                        ${
                          nextMonthButtonDisabled &&
                          'cursor-not-allowed opacity-50'
                        }
                        text-scale-1100 hover:text-scale-1200 focus:outline-none
                    `}
                    >
                      <IconChevronRight size={16} strokeWidth={2} />
                    </button>
                  </div>
                </div>
              </>
            )}
          />
        </div>
      </div>
      <div className="flex items-center justify-center max-w-2xl py-20 mx-auto space-x-4">
        <span className="font-medium text-gray-900">Default Components:</span>
        <div className="relative w-40">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            nextMonthButtonLabel=">"
            previousMonthButtonLabel="<"
            popperClassName="react-datepicker-left"
          />
        </div>
        <div className="relative w-40">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            nextMonthButtonLabel=">"
            previousMonthButtonLabel="<"
            popperClassName="react-datepicker-right"
          />
        </div> */}
      </div>
    </div>
  )
}

const ButtonInput = forwardRef(({ value, onClick }: any, ref): any => (
  <button
    onClick={onClick}
    // @ts-ignore
    ref={ref}
    type="button"
    className="inline-flex justify-start w-full px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500"
  >
    {value}
  </button>
))

export default _DatePicker
