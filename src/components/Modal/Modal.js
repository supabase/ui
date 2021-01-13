import React from 'react'
import PropTypes from 'prop-types'
import './Modal.css'

import { action } from '@storybook/addon-actions'

import { Button, Transition, Icon } from './../../index'
import Typography from '../Typography'
import { Space } from '../Space'

// import addons, { mockChannel } from '@storybook/addons';

// addons.setChannel(mockChannel());

// import './Button.css'

export const SIZES = ['small', 'medium', 'large']
export const VARIANTS = ['alert', 'warning', 'success']

const Modal = ({
  className = '',
  children,
  title = 'This is the title',
  description = 'This is the description',
  variant = 'success',
  showIcon = true,
  visible = true,
  onConfirmText = 'Confirm',
  onCancelText = 'Cancel',
  onCancel,
  onConfirm,
  customFooter = undefined,
  hideFooter = false,
  loading = false,
}) => {
  let icon = {
    alert: <Icon size={24} strokeWidth={2} type="AlertCircle" />,
    warning: <Icon size={24} strokeWidth={2} type="AlertCircle" />,
    success: <Icon size={24} strokeWidth={2} type="Check" />,
  }

  let iconClasses = ['sbui-modal-icon-container']
  iconClasses.push(`sbui-modal-icon-container--${variant}`)

  const iconMarkup = showIcon && (
    <div className={iconClasses.join(' ')}>{icon[variant]}</div>
  )

  function stopPropagation(e) {
    e.stopPropagation()
  }

  return (
    <Transition
      show={visible}
      enter="ease-out duration-200"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={'sbui-modal-container ' + className}
        onClick={() => onCancel()}
      >
        <div className="sbui-modal-flex-container">
          <div className="sbui-modal-overlay-container">
            <div className="sbui-modal-overlay"></div>
          </div>
          {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
          <span className="sbui-modal-div-trick"></span>
          &#8203;
          <Transition
            show={visible}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="sbui-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
              onClick={stopPropagation}
            >
              <div className="sbui-modal-content">
                <Space size={5} style={{}}>
                  {iconMarkup}

                  <div className="">
                    <Space
                      size={4}
                      direction="vertical"
                      style={{ alignItems: 'flex-start' }}
                    >
                      <div>
                        {title && (
                          <Typography.Title
                            style={{ marginBottom: '.5rem' }}
                            level={3}
                          >
                            {title}
                          </Typography.Title>
                        )}
                        {description && (
                          <Typography.Text>{description}</Typography.Text>
                        )}
                      </div>
                      {children}
                    </Space>
                  </div>
                </Space>
              </div>

              {!hideFooter && (
                <div className="sbui-modal-footer">
                  {customFooter ? (
                    customFooter
                  ) : (
                    <React.Fragment>
                      <Space>
                        <Button type="outline" onClick={() => onCancel()}>
                          {onCancelText}
                        </Button>
                        <Button onClick={() => onConfirm()} loading={loading}>
                          {onConfirmText}
                        </Button>
                      </Space>
                    </React.Fragment>
                  )}
                </div>
              )}
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
  )
}

Modal.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  variant: PropTypes.oneOf(VARIANTS),
  showIcon: PropTypes.bool,
  className: PropTypes.string,
  onConfirmText: PropTypes.string,
  onCancelText: PropTypes.string,
  loading: PropTypes.bool,
}

export default Modal
