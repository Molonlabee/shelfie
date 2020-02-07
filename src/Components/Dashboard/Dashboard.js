import React, { Component } from 'react';
import './Dashboard.css';
import './Product/Product';

class Dashboard extends Component {
    render() {
        return (
            <section>
                <Product />
             
               <h1>Dashboard</h1> 
               
                <div className='green-box'>
                    <img src=''/>

                    <p>image url</p>
                    <input></input>

                    <p>product name</p>
                    <input></input>

                    <p>price</p>
                    <input></input>
                   
                    <button onClick={() => this.props.deleteProduct(id)}>Cancel</button>
                    <button onClick={() => this.props.addProduct(id) }>Add to Inventory</button>
                </div>

            </section>
            
        )
    }
}

export default Dashboard;