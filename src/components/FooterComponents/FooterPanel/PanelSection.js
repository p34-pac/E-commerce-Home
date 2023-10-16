import React from 'react'
import PanelItem from '../../Panel/PanelItem'

function PanelSection({title, items}) {
    const mItems = items.map(item => <PanelItem className="panelItem">{item}</PanelItem>)
  return (
    <div className='panelItemSection'>
        <PanelItem className="title">
            <b>{title}</b>
        </PanelItem>
        {
            mItems
        }
    </div>
  )
}

export default PanelSection