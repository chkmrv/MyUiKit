/* eslint-disable */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import PropTypes from 'prop-types'

class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: props.value || {
        label: props.placeholder,
        value: '',
      },
      isOpen: false,
    }
    this.handleDocumentClick = this.handleDocumentClick.bind(this)
    this.fireChangeEvent = this.fireChangeEvent.bind(this)
  }
  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false)
    document.addEventListener('touchend', this.handleDocumentClick, false)
  }
  componentWillReceiveProps(newProps) {
    if (newProps.value && newProps.value !== this.state.selected) {
      this.setState({ selected: newProps.value })
    } else if (!newProps.value) {
      this.setState({
        selected: {
          label: newProps.placeholder,
          value: '',
        },
      })
    }
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, false)
    document.removeEventListener('touchend', this.handleDocumentClick, false)
  }

  handleClick(event) {
    if (this.props.onFocus && typeof this.props.onFocus === 'function') {
      this.props.onFocus(this.state.isOpen)
    }
    if (event.type === 'click' && event.button !== 0) return
    event.stopPropagation()
    event.preventDefault()

    if (!this.props.isDisabled) {
      this.setState({
        isOpen: !this.state.isOpen,
      })
    }
  }

  setValue(value, label) {
    let newState = {
      selected: {
        value,
        label,
      },
      isOpen: false,
    }
    this.fireChangeEvent(newState)
    this.setState(newState)
  }

  fireChangeEvent(newState) {
    if (newState.selected !== this.state.selected && this.props.onChange) {
      this.props.onChange(newState.selected)
    }
  }

  handleDocumentClick(event) {
    if (!ReactDOM.findDOMNode(this).contains(event.target)) {
      if (this.state.isOpen) {
        this.setState({ isOpen: false })
      }
    }
  }

  buildList() {
    let { options } = this.props

    let ops = options.map(option => {
      if (option.type === 'group') {
        let groupTitle = (
          <div className={`pl-dropdown--title`}>{option.name}</div>
        )
        let _options = option.items.map(item => this.renderOption(item))

        return (
          <div className={`pl-dropdown--group`} key={option.name}>
            {groupTitle}
            {_options}
          </div>
        )
      } else {
        return this.renderOption(option)
      }
    })

    return ops.length ? (
      ops
    ) : (
      <div className={`pl-dropdown--noresults`}>No options found</div>
    )
  }

  renderOption(option) {
    const classes = {
      ['pl-dropdown--option']: true,
      [option.className]: !!option.className,
      'is-selected': option === this.state.selected,
    }
    const optionClass = classNames(classes)

    let value = option.value
    let label = option.label || option.value || option
    if (!value) value = option.label || option

    return (
      <div
        key={value}
        className={optionClass}
        onClick={this.setValue.bind(this, value, label)}
      >
        {label}
      </div>
    )
  }

  render() {
    const { listClassName, className, isDisabled } = this.props

    const disabledClass = isDisabled ? 'pl-dropdown--disabled' : ''
    const selectedValue =
      typeof this.state.selected === 'string'
        ? this.state.selected
        : this.state.selected.label

    const dropdownClass = classNames({
      'pl-dropdown': true,
      [className]: !!className,
      'is-open': this.state.isOpen,
    })

    const listClass = classNames({
      [`pl-dropdown--list`]: true,
      [listClassName]: !!listClassName,
    })

    const arrowClass = classNames({
      [`pl-dropdown--arrow`]: true,
    })

    return (
      <div
        className={dropdownClass}
        onClick={this.handleClick.bind(this)}
        onTouchEnd={this.handleClick.bind(this)}
      >
        <div className={`pl-dropdown--control ${disabledClass}`}>
          <div className="pl-dropdown--placeholder">{selectedValue}</div>
          <span className={arrowClass} />
        </div>
        {this.state.isOpen && (
          <div className={listClass}> {this.buildList()} </div>
        )}
      </div>
    )
  }
}

Dropdown.propTypes = {
  isDisabled: PropTypes.bool,
  options: PropTypes.array,
  value: PropTypes.object,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  listClassName: PropTypes.string,
  onChange: PropTypes.func,
}

Dropdown.defaultProps = {
  placeholder: 'Select...',
  isDisabled: false,
  options: [],
}

export { Dropdown }
