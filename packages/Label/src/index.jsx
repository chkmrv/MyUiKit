import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { setDisplayName, setPropTypes, compose, defaultProps } from 'recompose'

const propsComponent = compose(
  setDisplayName('Label'),
  setPropTypes({
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,
    htmlFor: PropTypes.string.isRequired,
  }),
  defaultProps({
    isDisabled: false,
    isRequired: false,
  })
)

const LabelElement = ({
  children,
  isDisabled,
  isRequired,
  htmlFor,
  className,
  ...attributes
}) => {
  const classes = classNames([
    'pl-label',
    {
      'pl-label--disabled': isDisabled,
      'pl-label--required': isRequired,
    },
    className,
  ])

  return (
    <label htmlFor={htmlFor} className={classes} {...attributes}>
      {children}
      {isRequired && (
        <span className="pl-label-required-indicator" role="presentation">
          *
        </span>
      )}
    </label>
  )
}

export const Label = propsComponent(LabelElement)
