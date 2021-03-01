import React, { Component } from 'react';
import { getMovies } from '../service/fakeMovieService'
import abhi from './11.jpg'
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import Like from './common/like';
import Pagination from './common/pagination';
import {Paginate} from './utils/paginate'


class MoviesPagination extends Component {
    state = { 
        movies:getMovies(),
        pageSize:4,
        currentPage:1
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
     handlePageChange=(page)=>{
         this.setState({
             currentPage:page
         })
            console.log(page );
     }
     style={
         backgroundColor:'green',
         color:'white'
     }
  
    render() { 
        const {pageSize,currentPage,movies:allMovies}=this.state;  //destructuring with the state; so that we can remove {this.state}   from the prog
        const count=this.state.movies.length; 
        if(count===0) return <img src={abhi} alt='abhishek'/>;

        const movies= Paginate(allMovies , currentPage , pageSize)
       
        return (    
                                         
        <>
        
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
            {movies.map((element)=>
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
    

    <Pagination 
            itemsCount={count}  
            pageSize={pageSize}         
            currentPage={currentPage}
    
            /* or */
    /* pageSize={this.state.pageSize}
    currentPage={this.state.currentPage}   */ 
 onPageChange={this.handlePageChange}/>




            
        </> );
    }
}
 
export default MoviesPagination;