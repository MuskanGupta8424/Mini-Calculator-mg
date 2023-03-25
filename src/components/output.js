import React from 'react'
import OutputBox from './OutputBox'

const output = (props) => {
  return (
    <div>
<OutputBox value={props.answer} textSize={{fontSize:'20px'}}/>
<OutputBox value={props.user}/>
    </div>
  )
}

export default output