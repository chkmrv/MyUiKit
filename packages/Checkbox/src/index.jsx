import React from 'react'
import PropTypes from 'prop-types'
import { InputCheck } from '../../Base/src/inputCheck'
import { setPropTypes, defaultProps, compose } from 'recompose'

const CheckboxElement = props => <InputCheck {...props} type="checkbox" />

const { bool, string, func } = PropTypes

const propsComponent = compose(
  setPropTypes({
    id: string.isRequired,
    name: string,
    labelText: string,
    labelClass: string,
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

export const Checkbox = propsComponent(CheckboxElement)
