import React, { Component } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
class Table extends Component {
    state = { 
      //step1
        persons:[
            {firstname:"Bharath",lastName:"Gowda" ,email:25},
            {firstname:"Abhishek",lastName:"kumar" ,email:25},
            {firstname:"Rashmi",lastName:"Ranjan" ,email:25},
            {firstname:"subhendu",lastName:"Gowda" ,email:25},
            {firstname:"shalini",lastName:"shetty" ,email:25},
            {firstname:"sushanth",lastName:"Maharana" ,email:25}
        ]
     }
     
    //  stats={
    //      person:[1,2,3,5,56,7,7,8,]
    //  }
     deleteItem =(index)=>{
      
               this.state.persons.splice(index,1)
                  this.setState({
                 person:[...this.state.persons]
               })
              }

      
     

    render() { 
        return ( <div>
            
            <table class="table">
                 
                    <tr>
                      <th scope="col">FirstName</th>
                      <th scope="col">LastName</th>
                      <th scope="col">Email</th>
                      <th scope="col">Delete</th>
                    </tr>
  
  
    {this.state.persons.map((person,index)=>{
       return( <tr key="{index}">
        <td>{person.firstname}</td>
        <td>{person.lastName}</td>
        <td>{person.email}</td>
       
        {/* //step3 */}
        <td><button onClick={()=>this.deleteItem(index) } >Delete</button></td>
        
      </tr>
    );})}
   

   
  {/* </tbody> */}
</table>


        </div>);
}


}
export default Table;


