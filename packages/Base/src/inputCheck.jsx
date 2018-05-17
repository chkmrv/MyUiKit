import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Label } from '../../Label/src'
import { setPropTypes, defaultProps, compose, setDisplayName } from 'recompose'

const InputCheckElement = ({
  id,
  name,
  type,
  labelText,
  labelClass,
  className,
  isChecked,
  isDisabled,
  onChange,
  onFocus,
  onBlur,
  ...attributes
}) => {
  const classes = classNames([
    `pl-${type}`,
    { [`pl-${type}--disabled`]: isDisabled },
    className,
  ])

  const labelClasses = classNames([
    { [`pl-${type}--disabled`]: isDisabled },
    labelClass,
  ])

  return (
    <div className={`pl-${type}`}>
      <input
        id={id}
        name={name}
        type={type}
        className={classes}
        checked={isChecked}
        disabled={isDisabled}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        {...attributes}
      />
      {labelText && (
        <Label
          htmlFor={id}
          className={labelClasses}
          isDisabled={false}
          isRequired={false}
        >
          {labelText}
        </Label>
      )}
    </div>
  )
}

const { bool, string, func } = PropTypes

const propsComponent = compose(
  setDisplayName('InputBase'),
  setPropTypes({
    id: string.isRequired,
    type: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
    name: string,
    labelText: string,
    labelClass: string,
    className: string,
    isDisabled: bool,
    isChecked: bool,
    onChange: func,
    onFocus: func,
    onBlur: func,
  }),
  defaultProps({
    labelText: ' ',
    isDisabled: false,
    isChecked: false,
  })
)

export const InputCheck = propsComponent(InputCheckElement)
