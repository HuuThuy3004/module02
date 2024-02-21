import React, { Component } from 'react'
import Product from './Product'

export default class Products extends Component {
  render() {
    // Hung du lieu ve
    // let data = this.props;
    let {product} = this.props;
    console.log("1111" , product);
    return (
      <>
        {/* <br></br> List Products 
        <br></br> <Product data = {product} /> */}

        <div>
        {
            product.map(
                (item,index) => {
                    return <Product data = {item}/>
                }
            )
        }
        </div>
      </>
    )
  }
}
