import React, { Component } from 'react'
import "./cart1.css"

export default class Cart1 extends Component {
  
    addToCart=()=>{
        console.log("this",this);
        this.props.addToCart(this.props.prod)
    };
    
  render() {
    return (
        <div className='cen'>
        
        <h1>{this.props.prod.name}</h1>
        <button onClick={this.addToCart.bind(this)}> Add to cart</button>
        
        </div>
    )
  }
}
