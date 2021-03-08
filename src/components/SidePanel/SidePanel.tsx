import React from 'react'
// @ts-ignore
import SlidePanelStyles from './SidePanel.module.css'
import { Button, IconX, Space, Transition, Typography } from '../../index'
import { AnimationTailwindClasses } from '../../types'

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
  transition?: AnimationTailwindClasses
  transitionOverlay?: AnimationTailwindClasses
}

const SidePanel = ({
  className,
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
  transition,
  transitionOverlay,
}: Props) => {
  function stopPropagation(e: React.MouseEvent) {
    e.stopPropagation()
  }

  const left = align === 'left'
  const orientationClasses = left
    ? SlidePanelStyles['sbui-sidepanel--left']
    : SlidePanelStyles['sbui-sidepanel--right']

  let footerClasses = [SlidePanelStyles['sbui-sidepanel-footer-container']]
  if (!customFooter) {
    footerClasses.push(SlidePanelStyles['sbui-sidepanel-footer'])
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
    <Transition
      show={visible}
      transition={transitionOverlay}
      enter={SlidePanelStyles[`sbui-sidepanel-overlay--enter`]}
      enterFrom={SlidePanelStyles[`sbui-sidepanel-overlay--enterFrom`]}
      enterTo={SlidePanelStyles[`sbui-sidepanel-overlay--enterTo`]}
      leave={SlidePanelStyles[`sbui-sidepanel-overlay--leave`]}
      leaveFrom={SlidePanelStyles[`sbui-sidepanel-overlay--leaveFrom`]}
      leaveTo={SlidePanelStyles[`sbui-sidepanel-overlay--leaveTo`]}
    >
      <div onClick={() => (onCancel ? onCancel() : null)}>
        <div className={SlidePanelStyles['sbui-sidepanel-overlay-container']}>
          <div className={SlidePanelStyles['sbui-sidepanel-overlay']}></div>
        </div>

        {/* sidepanel element */}
        <div
          className={SlidePanelStyles['sbui-sidepanel-fixed']}
          onClick={onCancel}
        >
          <div className={SlidePanelStyles['sbui-sidepanel-absolute']}>
            <div
              className={
                SlidePanelStyles['sbui-sidepanel-container'] +
                ' ' +
                orientationClasses
              }
            >
              <Transition
                show={visible}
                transition={transition}
                enter={SlidePanelStyles[`sbui-sidepanel--enter`]}
                enterFrom={
                  left
                    ? SlidePanelStyles[`sbui-sidepanel--enterFrom--left`]
                    : SlidePanelStyles[`sbui-sidepanel--enterFrom`]
                }
                enterTo={SlidePanelStyles[`sbui-sidepanel--enterTo`]}
                leave={SlidePanelStyles[`sbui-sidepanel--leave`]}
                leaveFrom={SlidePanelStyles[`sbui-sidepanel--leaveFrom`]}
                leaveTo={
                  left
                    ? SlidePanelStyles[`sbui-sidepanel--leaveTo--left`]
                    : SlidePanelStyles[`sbui-sidepanel--leaveTo`]
                }
              >
                <div
                  className={
                    wide
                      ? SlidePanelStyles['sbui-sidepanel--wide']
                      : SlidePanelStyles['sbui-sidepanel--medium']
                  }
                >
                  <div
                    className={
                      SlidePanelStyles['sbui-sidepanel'] + ' ' + className
                    }
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
                      <header
                        className={SlidePanelStyles['sbui-sidepanel-header']}
                      >
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
                          <div
                            className={
                              SlidePanelStyles['sbui-sidepanel-close-container']
                            }
                          >
                            <Button
                              aria-label="Close panel"
                              onClick={onCancel}
                              type="text"
                              shadow={false}
                              style={{ padding: 0 }}
                              icon={<IconX size="xlarge" strokeWidth={2} />}
                            />
                          </div>
                        </Space>
                        <div>
                          {description && (
                            <Typography.Text type="secondary">
                              {description}
                            </Typography.Text>
                          )}
                        </div>
                      </header>
                      <div
                        className={SlidePanelStyles['sbui-sidepanel-content']}
                      >
                        {children}
                      </div>
                    </Space>
                    {!hideFooter && footerContent}
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  )
}

export default SidePanel
