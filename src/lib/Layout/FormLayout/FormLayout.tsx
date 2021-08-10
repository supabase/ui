import React from 'react'
// @ts-ignore
import defaultTheme from '../../theme/defaultTheme'
// @ts-ignore
// import FormLayoutStyles from './FormLayout.module.css'

type Props = {
  align?: string
  children?: any
  className?: string
  descriptionText?: string
  error?: string
  id?: string
  label?: string
  labelOptional?: string
  layout?: 'horizontal' | 'vertical'
  style?: React.CSSProperties
  flex?: boolean
  responsive?: boolean
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  beforeLabel?: string
  afterLabel?: string
}

export function FormLayout({
  align,
  children,
  className,
  descriptionText,
  error,
  id,
  label,
  labelOptional,
  layout = 'vertical',
  style,
  flex,
  responsive = true,
  size = 'medium',
  beforeLabel,
  afterLabel,
}: Props) {
  const __styles = defaultTheme.form_layout

  let containerClasses = [__styles.container]

  containerClasses.push(__styles.size[size])

  let labelContainerClasses = []
  let dataInputContainerClasses = []

  if (layout !== 'horizontal' && !flex) {
    labelContainerClasses.push(__styles.label_horizontal_layout)
  } else {
    labelContainerClasses.push(__styles.label_vertical_layout)
  }

  if (layout !== 'horizontal') {
    dataInputContainerClasses.push(__styles.data_input_horizontal_layout)
  } else {
    dataInputContainerClasses.push(__styles.data_input_vertical_layout)
    if (align === 'right') {
      dataInputContainerClasses.push(
        __styles.data_input_vertical_layout__align_right
      )
    }
  }

  if (flex) {
    containerClasses.push(__styles.flex.base)
    if (align === 'left') {
      labelContainerClasses.push(__styles.flex.left.labels)
      dataInputContainerClasses.push(__styles.flex.left.data_input)
    }
    if (align === 'right') {
      labelContainerClasses.push(__styles.flex.right.labels)
      dataInputContainerClasses.push(__styles.flex.right.data_input)
    }
  } else {
    containerClasses.push(
      responsive ? __styles.responsive : __styles.non_responsive
    )
  }

  if (className) {
    containerClasses.push(className)
  }

  const labelled = Boolean(label || beforeLabel || afterLabel)

  return (
    <div className={containerClasses.join(' ')}>
      {labelled || labelOptional || layout === 'horizontal' ? (
        <div
          // direction={
          //   (layout && layout === 'horizontal') ||
          //   (flex && layout && layout === 'vertical')
          //     ? 'vertical'
          //     : 'horizontal'
          // }
          className={labelContainerClasses.join(' ')}
        >
          {labelled && (
            <label
              className={[__styles.label.base, __styles.label.size[size]].join(
                ' '
              )}
              htmlFor={id}
            >
              {beforeLabel && (
                <span
                  className={[
                    __styles.label_before.base,
                    __styles.label_before.size[size],
                  ].join(' ')}
                  id={id + '-before'}
                >
                  {beforeLabel}
                </span>
              )}
              {label}
              {afterLabel && (
                <span
                  className={[
                    __styles.label_after.base,
                    __styles.label_after.size[size],
                  ].join(' ')}
                  id={id + '-after'}
                >
                  {afterLabel}
                </span>
              )}
            </label>
          )}
          {labelOptional && (
            <span
              className={[
                __styles.label_optional.base,
                __styles.label_optional.size[size],
              ].join(' ')}
              id={id + '-optional'}
            >
              {labelOptional}
            </span>
          )}
        </div>
      ) : null}
      <div className={dataInputContainerClasses.join(' ')} style={style}>
        {children}
        {error && (
          <p
            className={[__styles.error.base, __styles.error.size[size]].join(
              ' '
            )}
          >
            {error}
          </p>
        )}
        {descriptionText && (
          <p
            className={[
              __styles.description.base,
              __styles.description.size[size],
            ].join(' ')}
            id={id + '-description'}
          >
            {descriptionText}
          </p>
        )}
      </div>
    </div>
  )
}
