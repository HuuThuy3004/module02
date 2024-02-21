import React, {Component } from 'react'
import Children from './Children'

export default class Parent extends Component {
  getAge = (age)=>{
    console.log("Age",age);
  }
  
  render() {
    const {name} = this.props;
    return (
      <>
        <div>parent</div>
        <Children name={name} age={this.getAge}></Children>
      </>
    )
  }
}