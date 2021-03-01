import React, { Component } from 'react';
import './style.css'

class Assignmentone extends Component {
    state = { 
        // table: 'to delete rows when we click button ',
        data: [
            {fisrtName:"abhishek", lastname:"kumar", email:"susant@gmail.com"},
            {fisrtName:"bharath", lastname:"xyz", email:"susant@gmail.com"},
            {fisrtName:"rashmi", lastname:"xyz", email:"susant@gmail.com"},
            // {fisrtName:"abc", lastname:"xyz", email:"susant@gmail.com"},
            // {fisrtName:"abc", lastname:"xyz", email:"susant@gmail.com"},
            // {fisrtName:"abc", lastname:"xyz", email:"susant@gmail.com"},
            // {fisrtName:"abc", lastname:"xyz", email:"susant@gmail.com"},
        ],
       visible:"",
       visible2:"",
       visible3:""
     }
     deleteRow=()=>
      {
         this.setState({
            visible:'none'
             
         })
     }

     deleteRow3=()=>{
        this.setState({
            visible3:'none'}) 
     }


    render() { 
        return ( 
            <div>
                {/* <h2>{this.state.table}</h2> */}
                <table  border='rows' className='ta'  >
                <thead>
                <tr  >
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>buttons</th>
                    
                </tr>
                </thead>
                <tbody>
                <tr className={this.state.visible}>
                    <td>{this.state.data[0].fisrtName}</td>
                    <td>{this.state.data[0].lastname}</td>
                    <td>{this.state.data[0].email}</td>
                 
                    <td><button onClick={this.deleteRow}>delte</button></td>
                   
                </tr>

                
                <tr className={this.state.visible2}>
                <td>{this.state.data[1].fisrtName}</td>
                    <td>{this.state.data[1].lastname}</td>
                    <td>{this.state.data[1].email}</td>
                 
                    <td><button onClick={()=>{this.setState({visible2:'none'})}}>delte</button></td>
                   
                </tr>
                

                <tr className={this.state.visible3}>
                <td>{this.state.data[2].fisrtName}</td>
                    <td>{this.state.data[2].lastname}</td>
                    <td>{this.state.data[2].email}</td>
                 
                    <td><button onClick={this.deleteRow3}>delte</button></td>
                   
                </tr>
               
                </tbody>
            </table>
            </div>
         );
    }
}
 
export default Assignmentone;