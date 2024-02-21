import React, { Component } from 'react'
import Form from './components/Form';

export default class App extends Component {
  //1: Giai doan init
  constructor(){
    super();
    this.state = {
      name: 'Tran Huu Thuy' ,
      age: 20
    }
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
    return true;
  }


  render() {
    console.log('component re-render');
    return (
      <>
        <p>This state: {this.state.name}</p>
        <button onClick={ () => this.setState({name:"Nguyen Van A"}) }>Change</button>
        <Form/>
      </>
    )
  }
}
