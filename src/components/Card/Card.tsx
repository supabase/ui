import React, { ReactDOM } from 'react'
import styleHandler from '../../lib/theme/styleHandler'

interface CardProps {
  children?: React.ReactNode
  className?: string
  cover?: React.ReactNode
  description?: string
  hoverable?: boolean
  style?: React.CSSProperties
  title?: string
  titleExtra?: React.ReactNode
}

function Card({
  children,
  className,
  cover,
  hoverable,
  style,
  title,
  titleExtra,
}: CardProps) {
  let __styles = styleHandler('card')

  let classes = [__styles.base]
  if (hoverable) classes.push(__styles.hoverable)
  if (className) classes.push(className)

  return (
    <div className={classes.join(' ')} style={style}>
      {title && (
        <div className={__styles.head}>
          <>{title}</>
          <>{titleExtra}</>
        </div>
      )}
      {cover}
      <div className={__styles.content}>{children}</div>
    </div>
  )
}

interface MetaProps {
  title?: string
  description?: string
  style?: React.CSSProperties
  className?: string
}

function Meta({ title, description, style, className }: MetaProps) {
  let __styles = styleHandler('card')
  return (
    <div style={style} className={className}>
      <p className={__styles.meta.head}>
        {title}
      </p>
      <p className={__styles.meta.content}>
        {description}
      </p>
    </div>
  )
}

Card.Meta = Meta
export default Card
