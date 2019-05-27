import React from 'react';
import withToggle from '../hocs/withToggle'

function OnOffButton(props) {
  let {toggle} = props
  return (
    <button style={StyleSheet.button} onClick={toggle.handleChange}>
      <h1>{toggle.value ? 'ON' : 'OFF'}</h1>
    </button>
  )
}

export default withToggle(OnOffButton)

let styles = {
  button: {
    border: '1px solid orange',
    borderRadius: '3px',
    padding: 20,
    margin: 20
  }
}