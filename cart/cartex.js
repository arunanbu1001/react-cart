import React, { Component } from 'react'
import '../cart/cartex.css'


export default class Cartex extends Component {
  constructor(props){
   
    

    super(props)
  }

  
  deleteitem=(data)=>{
    this.props.deleteitem(data)
  }
  increment=(data)=>{
    const replace=this.props.additem;
    console.log('replace',replace)
  let x= replace.includes(data)
  console.log(x)
  if(!x){
      this.setState({cartitem:[...replace,data]})
  }
  else{
      data.qty=data.qty+1
      this.setState({cartitem:[...replace]})
  }


  }
  decrement=(data)=>{
    let removele=this.props.additem.filter((val)=>{
      return val != data
     })
     if((data.qty)<=1){
     this.setState({cartitem:removele})
     }
     else{
      data.qty=data.qty-1
  this.setState({ cartitem: [...this.props.additem]  });
     }
  }
  render() {
    return (
        <div className='con'>
          
          <div>
          <h1>{this.props.prod.name}</h1>
        <p>{this.props.prod.qty}</p>
        <button onClick={()=>this.deleteitem(this.props.prod)}> delete</button>
        <button onClick={()=>this.increment(this.props.prod)}> irncrementod</button>
        <button onClick={()=>this.decrement(this.props.prod)}> decrement</button>
          </div>
       
             </div>   
         
    )
  }
}
