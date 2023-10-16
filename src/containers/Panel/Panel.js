import React, { Component } from 'react';
import PanelItem from '../../components/Panel/PanelItem';
import './panel.css';

export default class Panel extends Component {
  render() {
    return (
      <div className='panel'>
        <PanelItem className="panelFill">
          <PanelItem className="panelAll">All</PanelItem>
          <PanelItem className="panelOps">
            <PanelItem className="OLC">Today's Deals </PanelItem>
            <PanelItem className="OLC">Customer Service</PanelItem>
            <PanelItem className="OLC">Registry</PanelItem>
            <PanelItem className="OLC">Gift Cards</PanelItem>
            <PanelItem className="OLC">Sell</PanelItem>
          </PanelItem>
        </PanelItem>
        <PanelItem className="panelDeals">
          <b>Shop deals in Electronics</b>
        </PanelItem>
      </div>
    )
  }
}
