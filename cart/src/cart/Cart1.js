import React, { Component } from 'react'

export default class Cart1 extends Component {
    addToCart=()=>{
        console.log("this",this);
        this.props.addToCart(this.props.prod)
    };
    
  render() {
    return (
        <div>
        <h1>{this.props.prod.name}</h1>
        <button onClick={this.addToCart.bind(this)}> Add to cart</button>
        
        </div>
    )
  }
}
