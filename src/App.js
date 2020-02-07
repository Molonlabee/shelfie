import React, { Component } from 'react'
import axios from 'axios';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
        product:[]
    }
  }

  //GET
  componentDidMount() {  
    axios.get('/api/search') 
    .then(response => {
      this.setState({product: response.data})
    }) .catch(error =>{
      console.log(error);
    })
  }

  //POST

  //PUT

  //DELETE
  deleteProduct = (id) => {
    axios.delete(`/api/cancel/${id}`)
    .then(res =>{
      this.setState({product: res.data})
    })
  }



  render() {
    return (
    
      <div>
        <div className='nav'><h1>SHELFIE</h1></div>
        <h1>App</h1>
        <Dashboard />
        <Form />
        <Header />
      </div>
    );
  }
}

export default App;


