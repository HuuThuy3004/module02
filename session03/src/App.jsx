import React, { Component } from 'react'
import Products from './components/Products';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      products: [
        {
          id: 1,
          name: "Iphone 15"
        } ,
        {
          id: 2,
          name: "Samsung S23"
        } ,
      ],
      isActive: false,
      title: "Hoc lap trinh JS"
    }
  }


  render() {
    const handleClick = () => {
      this.setState(
        {
          title: "Hoc lap trinh ReactJS"
        }
      );
    }
    const name = "Tran Huu Thuy";
    const students = ["Tran" , "Thanh" , "Nguyen" , "Thao" , "Vy"];
    const obj = {
      name: "Thi Hong"
    };

    return (
      <>
        <h1>My Website</h1>
        <div>Ten : {name}</div>
        <div>Cac ten students: {students}</div>
        <div>{JSON.stringify(obj)}</div>
        <ul>
            { 
              students.map( (item , index) => {
              return <li key={index} > {item}</li>
              })
            }
        </ul>
        <p>Title: {this.state.title}</p>
        <button onClick={handleClick}>Change Name</button>
        <Products product={this.state.products} />
      </>
    )
  }
}


