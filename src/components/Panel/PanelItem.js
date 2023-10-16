import React from 'react'
function PanelItem(props) {
  return (
    <div className={props.className}>{props.children}</div>
  )
}

export default PanelItem