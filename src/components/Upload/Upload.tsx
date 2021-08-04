import React, { useState } from 'react'
import { FormLayout } from '../../lib/Layout/FormLayout'
// @ts-ignore
import UploadStyles from './Upload.module.css'

function Upload({ label, children }: any) {
  return <h1>WIP</h1>
}

function Dragger({
  label,
  afterLabel,
  beforeLabel,
  layout,
  children,
  files,
  setFiles,
}: any) {
  const [classes, setClasses] = useState([UploadStyles['sbui-upload-dragger']])

  const draggedCssClass = UploadStyles['sbui-upload-dragger--dragged']

  const dragOver = (e: any) => {
    e.preventDefault()
    // console.log('dragOver')

    if (!classes.includes(draggedCssClass)) {
      let originalClasses = classes
      originalClasses.push(draggedCssClass)
      setClasses(originalClasses)
      console.log(classes)
    }
  }

  const dragEnter = (e: any) => {
    e.preventDefault()
    // console.log('dragEnter')
    if (!classes.includes(draggedCssClass)) {
      let originalClasses = classes
      originalClasses.push(draggedCssClass)
      setClasses(originalClasses)
      console.log(classes)
    }
  }

  const dragLeave = (e: any) => {
    e.preventDefault()
    // console.log('dragLeave'

    if (classes.includes(draggedCssClass)) {
      let newClasses = classes

      for (var i = 0; i < newClasses.length; i++) {
        if (newClasses[i] === draggedCssClass) {
          newClasses.splice(i, 1)
        }
      }
      setClasses(newClasses)
      console.log(classes)
    }
  }

  const fileDrop = (e: any) => {
    e.preventDefault()
    console.log('fileDrop')
    const newFiles = e.dataTransfer.files
    console.log(newFiles)
    console.log(classes)
    setFiles([...files, ...newFiles])
  }

  const fileUpload = (e: any) => {
    e.preventDefault()
    // console.log('fileUpload')
    const newFiles = e.target.files
    console.log(newFiles)
    console.log(classes)
    setFiles([...files, ...newFiles])
  }

  return (
    <div
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDrop={fileDrop}
    >
      <FormLayout
        label={label}
        afterLabel={afterLabel}
        beforeLabel={beforeLabel}
        layout={layout}
      >
        <label htmlFor="file-upload" className={classes.join(' ')}>
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            className="sr-only"
            onChange={fileUpload}
          />

          {children}
        </label>
      </FormLayout>
    </div>
  )
}

Upload.Dragger = Dragger
export default Upload
