import React from 'react'
import './SlideOver.css'
import { Button, Icon, Space, Transition, Typography } from '../../index'

interface Props {
  className?: string
  children?: React.ReactNode
  title?: string
  description?: string
  visible: boolean
  wide?: boolean
  loading?: boolean
  align?: 'right' | 'left'
  alignFooter?: 'right' | 'left'
  hideFooter?: boolean
  customFooter?: React.ReactNode
  onCancel?: any
  onCancelText?: string
  onConfirm?: any
  onConfirmText?: string
}

const SlideOver = ({
  className = '',
  children,
  title,
  description,
  visible = true,
  wide = false,
  loading,
  align = 'right',
  alignFooter = 'right',
  hideFooter = false,
  customFooter = undefined,
  onConfirm,
  onCancel,
  onConfirmText = 'Confirm',
  onCancelText = 'Cancel',
}: Props) => {
  function stopPropagation(e: React.MouseEvent) {
    e.stopPropagation()
  }

  const left = align === 'left'
  const orientationClasses = left ? 'left-0 pr-10' : 'right-0 pl-10'

  let footerClasses = ['sbui-slideover-footer-container']
  if (!customFooter) {
    footerClasses.push('sbui-slideover-footer')
  }

  const footerContent = customFooter ? (
    <div className={footerClasses.join(' ')}>{customFooter}</div>
  ) : (
    <div className={footerClasses.join(' ')}>
      <Space
        style={{
          width: '100%',
          justifyContent: alignFooter === 'right' ? 'flex-end' : 'flex-start',
        }}
      >
        <Button
          disabled={loading}
          type="outline"
          onClick={() => (onCancel ? onCancel() : null)}
        >
          {onCancelText}
        </Button>
        <Button
          loading={loading}
          onClick={() => (onConfirm ? onConfirm() : null)}
        >
          {onConfirmText}
        </Button>
      </Space>
    </div>
  )

  return (
    <React.Fragment>
      {/* Background overlay */}
      <Transition
        show={visible}
        enter="ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="sbui-slideover-overlay-container">
          <div className="sbui-slideover-overlay"></div>
        </div>
      </Transition>

      {/* SlideOver element */}
      <div className="sbui-slideover-fixed" onClick={onCancel}>
        <div className="sbui-slideover-absolute">
          <section className={'sbui-slideover-container ' + orientationClasses}>
            <Transition
              show={visible}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom={left ? '-translate-x-full' : 'translate-x-full'}
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo={left ? '-translate-x-full' : 'translate-x-full'}
            >
              <div className={'w-screen ' + (wide ? 'max-w-2xl' : 'max-w-md')}>
                <div
                  className={'sbui-slideover ' + className}
                  onClick={stopPropagation}
                >
                  <Space
                    size={6}
                    direction="vertical"
                    style={{
                      minHeight: '0',
                      flex: '1 1 0%',
                      overflowY: 'scroll',
                    }}
                  >
                    <header className="sbui-slideover-header">
                      <Space
                        size={3}
                        direction="row"
                        style={{
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        {title && (
                          <Typography.Title className="m-0" level={4}>
                            {title}
                          </Typography.Title>
                        )}
                        <div className="sbui-slideover-close-container">
                          <Button
                            aria-label="Close panel"
                            onClick={onCancel}
                            type="text"
                            shadow={false}
                            icon={
                              <Icon size="xlarge" type="X" strokeWidth={2} />
                            }
                          />
                        </div>
                      </Space>
                      <div>
                        {description && (
                          <Typography.Text>{description}</Typography.Text>
                        )}
                      </div>
                    </header>
                    <div className="sbui-slideover-content">{children}</div>
                  </Space>
                  {!hideFooter && footerContent}
                </div>
              </div>
            </Transition>
          </section>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SlideOver
