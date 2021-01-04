import React from 'react'
import Typography from '../Typography'
import './Card.css'

function Card({
  className,
  id,
  inputRef,
  label,
  labelOptional,
  layout,
  name,
  onChange,
  placeholder,
  type,
  value,
  title,
  children,
  cover,
  titleExtra,
  hoverable,
  ...props
}: any) {
  return (
    // <a
    //   href={'url'}
    //   target="_blank"
    //   className="flex flex-col rounded-md shadow-lg overflow-hidden relative transition transform hover:-translate-y-1 hover:shadow-2xl"
    // >
    <div className="sbui-card">
      {title && (
        <div className="sbui-card-head">
          <Typography.Text style={{ margin: 0 }}>{title}</Typography.Text>
          <Typography.Link style={{ margin: 0 }}>{titleExtra}</Typography.Link>
        </div>
      )}
      {cover && (
        <div className="flex-shrink-0 ">
          {cover}
        </div>
      )}
      <div className="flex-1 p-8 flex flex-col justify-between">
        <div className="flex-1">
          {/* {icons && (
            <div className="-mt-12 mb-6 flex -space-x-3">
              {iconMarkup}
            </div>
          )} */}
          {children}
        </div>
        {/* {type === 'Case Study' && postMeta.name.length > 0 && (
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <span className="sr-only">{postMeta.name}</span>
              <img className="h-10 w-10 rounded-full" src={postMeta.avatarUrl} alt="" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 dark:text-white">{postMeta.name}</p>
              <div className="flex space-x-1 text-sm text-gray-500 dark:text-dark-100">
                <time dateTime="2020-03-16">{postMeta.publishDate}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{postMeta.readLength} min read</span>
              </div>
            </div>
          </div>
        )} */}
        {/* {ctaText && <Button className="mt-5" type="secondary" text={ctaText} url={url} />} */}
      </div>
    </div>
    // </a>
  )
}

interface MetaProps {
  title?: string
  description?: string
}

function Meta({ title, description }: MetaProps) {
  return (
    <>
      <Typography.Title style={{margin: '0'}} level={5}>{title}</Typography.Title>
      <div>
      <Typography.Text type="secondary">{description}</Typography.Text>
      </div>
    </>
  )
}

Card.Meta = Meta

// Card.defaultProps = { type: 'text' }

export default Card
