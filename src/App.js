import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'

// import MoviesFiltration from './components/moviefilter';
// import MoviesFilter from './components/Filter/filter';

// import Heading from './components/presentation/heading';
//  import Login from './components/presentation/heading';np
// import CountersPre from './components/presentation/counterPre';
// import CountersParent from './components/CountersParent';
// import NavBar from './components/NavBar';
// import Hello from './components/hello'
// import Hii from './components/hii'
// import Example from './components/exanple';
// import Counter from './components/counter';
// import FunctionClick from './components/FunctionClick';
// import EventBind from './components/EventBind';
// import Assignmentone from './components/Assignmentone';
// import Table from './components/Table';
// import Parent from './components/Comments';
// import ConditionalReander from './components/conditionalReander';
// import Movies from './components/movies';
import  MoviesPagination from './components/pagination';
import Customers from './components/customers'
import Rentals from './components/rentals'
import NotFound from './components/notFound'
import {Route,Redirect, Switch} from 'react-router-dom'
import NavBar from './components/nav';
// import Hello from './components/hello world';

// import Person from './udemy/person';
// import Par from './udemy/parent';
// import Complex from './components/complex';
// import BindingHandler from './components/ListHandling';
// import Parentclass from './udemy/Parentclass';
// import UseStateparent from './udemy/Usestateparent' 
// import Calculator from './components/assignment2';
// import Calculator from './components/sud';

class App extends Component{
  render(){
  return (
    
    < div className="App">
     <NavBar/>
      {/* <NavBar/> */}
     {/* < role='main' className="container"> */}
     {/* <button className='btn btn-success' >Reset</button> */}
   
     {/* <input type='reset'/> */}
      
       {/* <Example/>
          <Hii/> 
     
      <FunctionClick/> 
       <EventBind/> 
       <Assignmentone/> 
       
       <Parent/> 
      
        
        */}
      
      {/* <Counter/> */}
      {/* <Movies/> */}
      {/* <Table/> */}
      {/* <Complex/> */}
      {/* <ConditionalReander/> */}
      {/* <BindingHandler/> */}
      {/* <Par/>  */}
      {/* <Parentclass/> */}
    {/* <UseStateparent/> */}
           {/* <Calculator/>
           <Calculator/>
           <Calculator/>
           <Calculator/>

           <Calculator/> */}
           {/* <CountersParent/>  */}
           {/* <MoviesPagination/> */}
           {/* <Hello/> */}
           {/* <CountersPre/> */}
           {/* <Heading/> */}
           {/* <Login/> */}
           {/* <MoviesFilter/> */}
          {/* <MoviesFiltration/> */}
           <Switch>
           <Route path="/movies" component={MoviesPagination}/>
           <Route path="/customers" component={Customers}/>
           <Route path="/rentals" component={Rentals}/> 
           <Route path="/not-found" component={NotFound}/>
           <Redirect from='/' exact to='/movies'/>
           <Redirect to='/not-found'/>
           </Switch>
            
   </div>
  );
}
}
export default App;
