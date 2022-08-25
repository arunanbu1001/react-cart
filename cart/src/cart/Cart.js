import React, { Component } from 'react'
import Cartex from './cartex'
import Cart1 from './Cart1';
import '../cart/cartex.css'
import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers';

export default class Cart extends Component {
    constructor(){
        super();
        this.state = {
            cartitem: [],
            products: [{
                id:1,
                name :"APPACHI" ,
                qty:1
            },
               {
                   id:2,
                name : "RC",
                qty:1
            } ,
                {
                    id:3,
                name : "RE",
                qty:1
                }

            ],
        };
    }

    addToCart=(data)=>{
        const replace=this.state.cartitem
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
        // this.setState({cartitem: [...this.state.cartitem, data]})
        
    };
    deleteitem = (prod) => {
        console.log("removing", prod);
        var a = this.state.cartitem;
        var b = prod.id;
        console.log(a);
        var d = a.some((p) => p.id == b);
        console.log(d);
        if (d == true) {
          let index = a.indexOf(prod);
          prod.qty = 1;
          console.log(index);
          a.splice(index, 1);
          this.setState({ cartitem: [...this.state.cartitem] });
        } else {
          console.log("not present");
        }
      };
    
  render() {
    return (
      <div className='cart1'>
          <div className='cart2'>
          {this.state.products.map((prod,index)=>( 
          <Cart1 key={index} prod={prod} addToCart={this.addToCart} />
         ))}
         </div>
         <div className='cart2'>
         <h1> cart items</h1>
         {this.state.cartitem.map((prod,index)=>( 
          <Cartex key={index} prod={prod} deleteitem={this.deleteitem}/>
         ))}
         </div>
          
      </div>
    )
  }
}
