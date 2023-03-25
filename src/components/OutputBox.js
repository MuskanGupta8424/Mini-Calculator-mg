import React from 'react'
import "./outputBox.css"
const OutputBox = (props) => {
  return (
    <div>
        <input type='text' readOnly className='screen' style={props.textSize} value={props.value}/>
    </div>
  )
}

export default OutputBox