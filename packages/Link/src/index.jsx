import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { setPropTypes, defaultProps, compose, setDisplayName } from 'recompose'

const LinkElement = ({
  appearance,
  children,
  className,
  external,
  url,
  unstyled,
  ...attributes
}) => {
  const classes = classNames(['pl-link', `pl-link--${appearance}`, className])

  const target = external ? '_blank' : ''

  return (
    <a
      className={unstyled ? [] : classes}
      href={url}
      target={target}
      {...attributes}
    >
      {children}
    </a>
  )
}

const propsComponent = compose(
  setDisplayName('Link'),
  setPropTypes({
    appearance: PropTypes.oneOf(['primary', 'secondary']),
    external: PropTypes.bool,
    onClick: PropTypes.func,
    url: PropTypes.string,
    unstyled: PropTypes.bool,
  }),
  defaultProps({
    appearance: 'primary',
    external: false,
    url: '#',
    unstyled: false,
  })
)

export const Link = propsComponent(LinkElement)
