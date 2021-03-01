import React, { Component } from 'react';
import { getMovies } from '../service/fakeMovieService'
import abhi from './11.jpg'
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import Like from './common/like';
class Movies extends Component {
    state = { 
        movies:getMovies(),
        
     }

     handleDelete=(element)=>
     {
        const movie= this.state.movies.filter(m=>m._id!==element._id);
            this.setState({
                movies:movie
            })
                
           
        console.log('called',element);
     }

     handleLike=(element)=>
     {
         const movies=[...this.state.movies];
         const index=movies.indexOf(element);
         movies[index]={...movies[index]}  //cloning

        //  movies[index].liked=true;
        movies[index].liked=!movies[index].liked  // toggle function
        this.setState({
                          movies
                     })
     }
     style={
         backgroundColor:'green',
         color:'white'
     }
  
    render() { 
        const count=this.state.movies.length;
        if(count===0) return <img src={abhi} alt="broken ima "/>
       
        return (  
        <div>
        <h2>showing {count}  movies in database</h2>
    <table className='table' style={this.style} >
    <thead>
        <tr >
            <th scope="col">title </th>
            <th scope="col">genre </th>
            <th scope="col">stock </th>
            <th scope="col">rate  </th>
            <th scope="col">like</th>
            <th scope="col">Button </th>
        </tr>
    </thead>
            {this.state.movies.map((element)=>
            {
                return(
         <tbody>
                <tr key={element._id}>
                    <td>{element.title}</td>
                    <td>{element.genre.name}</td>
                    <td>{element.numberInStock}</td>
                    <td>{element.dailyRentalRate}</td>
                    <td><Like liked ={element.liked} onClick={(()=>this.handleLike(element))}/></td>
                    {/* <button > {this.state.heart}</button> */}
                    <td> <button className='btn btn-danger btn-5m' onClick ={()=>this.handleDelete(element)} >Delete</button></td>
                </tr>
                </tbody>    
                )
                    
            })}
            
    </table>
        </div> );
    }
}
 
export default Movies;