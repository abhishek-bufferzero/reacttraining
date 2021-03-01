import React, { Component } from 'react';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import FavoriteIcon from '@material-ui/icons/Favorite';

class Like extends Component {
    
    render() { 
        let classes='fa fa-heart'
        if(!this.props.liked) classes+='-o'
        return ( <i className={classes} onClick={this.props.onClick}></i>
           
         );
    }
}
 
export default Like;