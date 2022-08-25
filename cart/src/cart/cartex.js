import React, { Component } from 'react'


export default class Cartex extends Component {
  deleteitem=()=>{
    this.props.deleteitem(this.props.prod)
  }
  render() {
    return (
        <div>
        <h1>{this.props.prod.name}</h1>
        <p>{this.props.prod.qty}</p>
        <button onClick={this.deleteitem}> delete</button>       
        </div>
    )
  }
}
