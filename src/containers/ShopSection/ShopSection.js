import React, { Component } from 'react'
import image1 from '../../assets/images/box1_image.jpg'
import image2 from '../../assets/images/box2_image.jpg'
import image3 from '../../assets/images/box3_image.jpg'
import image4 from '../../assets/images/box4_image.jpg'
import image5 from '../../assets/images/box5_image.jpg'
import image6 from '../../assets/images/box6_image.jpg'
import image7 from '../../assets/images/box7_image.jpg'
import image8 from '../../assets/images/box8_image.jpg'
import ShopItem from '../../components/ShopItem/ShopItem'
import './shopSection.css'

export class ShopSection extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         images: [
            {
                text: 'Clothes',
                image: image1,
                ref: ''
             },
             {
                text: 'Health & Personal Care',
                image: image2,
                ref: ''
             },
             {
                text: 'Furniture',
                image: image3,
                ref: ''
             },
             {
                text: 'Electronics',
                image: image4,
                ref: ''
             },
             {
                text: 'Beauty picks',
                image: image5,
                ref: ''
             },
             {
                text: 'Pet Care',
                image: image6,
                ref: ''
             },
             {
                text: 'New Arrival in Toys',
                image: image7,
                ref: ''
             },
             {
                text: 'Fashion Trends',
                image: image8,
                ref: ''
             }
         ]
      }
    }


    render() {
        const items = this.state.images.map(item => <ShopItem key={item.text} ItemName={item.text} itemImage={item.image} itemRef={item.ref}/>)
        return (
        <div className='shopSection'>
            {
                items
            }
        </div>
        )
    }
}

export default ShopSection