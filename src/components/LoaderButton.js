import React from 'react'
import { Button, Glyphicon } from 'react-bootstrap'
//import glyph from 'glyphicons'
import './LoaderButton.css'
//import Routes from './routes'

export default ({
  isLoading,
  text,
  loadingText,
  className = '',
  disabled = false,
  ...props
}) =>
  <Button
    className={`LoaderButton ${className}`}
    disabled={disabled || isLoading}
    {...props}
  > {isLoading}
    {!isLoading ? text : loadingText}
  </Button>
