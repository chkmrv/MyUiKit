import React from 'react'
import PropTypes from 'prop-types'
import { InputCheck } from '../../Base/src/inputCheck'
import { compose, setDisplayName, setPropTypes } from 'recompose'

const RadioElement = props => <InputCheck {...props} type="radio" />

const { bool, string, func } = PropTypes

const propsComponent = compose(
  setDisplayName('Radio'),
  setPropTypes({
    id: string.isRequired,
    name: string,
    labelText: string,
    labelClass: string,
    className: string,
    isDisabled: bool,
    isChecked: bool,
    onChange: func,
    onFocus: func,
    onBlur: func,
  })
)

export const Radio = propsComponent(RadioElement)
