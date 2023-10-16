import React from 'react'
import PanelSection from './PanelSection'
import './footerPanel.css'


function FooterPanel() {
  const items = [
    {
      title: "Get to Know Us",
      items: [
      "Careers",
      "Blog",
      "About Amazon",
      "Investor Relations",
      "Amazon Devices",
      "Amazon Science",
      "Make Money with Us"
  ]
    },
    {
      title: 'Make Money with Us',
      items: [
      "Sell products on Amazon",
      "Sell on Amazon Business",
      "Sell apps on Amazon",
      "Become an Affiliate",
      "Advertise Your Products",
      "Self-Publish with Us",
      "Host an Amazon Hub",
      "See More Make Money with Us"
  ]
    },
    {
      title: 'Amazon Payment Products',
      items: [
      "Amazon Business Card",
      "Shop with Points",
      "Reload Your Balance",
      "Amazon Currency Converter"
  ]
    },
    {
      title: 'Let Us Help You',
      items: [
          "Amazon and COVID-19",
          "Your Account",
          "Your Orders",
          "Shipping Rates & Policies",
          "Returns & Replacements",
          "Manage Your Content and Devices",
          "Amazon Assistant",
          "Help"
      ]
    }
  ]
  
  const mItems = items.map(item => <PanelSection title={item.title} items={item.items} key={item.title}/> )
  return (
    
      <div className='panelSection'>
          {
            mItems
          }
      </div>
  
  )
}

export default FooterPanel