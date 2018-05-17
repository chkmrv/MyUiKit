import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { setPropTypes, defaultProps, compose, setDisplayName } from 'recompose'

const ButtonElement = ({
  appearance,
  children,
  className,
  isActive,
  isDisabled,
  isLight,
  shouldFillContainer,
  size,
  intent,
  ...attributes
}) => {
  const classes = classNames([
    'pl-btn',
    `pl-btn--${appearance}`,
    {
      [`pl-btn--${size}`]: size === 'small' || size === 'large',
      [`pl-btn--${intent}`]: intent === 'transactional',
      'pl-btn--active': isActive,
      'pl-btn--disabled': isDisabled,
      'pl-btn--light': isLight,
      'pl-btn--fill': shouldFillContainer,
    },
    className,
  ])

  return (
    <button
      className={classes}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...attributes}
    >
      {children}
    </button>
  )
}
const propsComponent = compose(
  setDisplayName('Button'),
  setPropTypes({
    appearance: PropTypes.oneOf(['primary', 'secondary']),
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isLight: PropTypes.bool,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['normal', 'small', 'large']),
    intent: PropTypes.oneOf(['conversational', 'transactional']),
    shouldFillContainer: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'submit']),
  }),
  defaultProps({
    appearance: 'primary',
    isActive: false,
    isDisabled: false,
    isLight: false,
    size: 'normal',
    intent: 'conversational',
    shouldFillContainer: false,
    type: 'button',
  })
)

export const Button = propsComponent(ButtonElement)
