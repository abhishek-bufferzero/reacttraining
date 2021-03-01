import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete';
// import _ from 'loadash'
class Calculator  extends Component {
    state = { 
        count:0,
        visible:'block',
        btn:'true'
     }
     disableBtn() {
		if (this.state.count > 0) {
			this.setState({ btn: false });
		} else {
			this.setState({ btn: true });
		}
	}
     add=()=>{
        this.setState({
          count:this.state.count+1
        },
        () => {
            this.disableBtn();
        })
      
    }
    subtract=()=>{
        this.setState({
          count:this.state.count-1
        },
        () => {
            this.disableBtn();
        })
    }
    
    handleDelete=()=> {
        this.setState({visible:"none"})
              
    }
    render() { 
      
        return ( 
                <div style={{ display: this.state.visible }}>
                     
                     <br/><br/>
                    <span  >{this.formatCount()}</span>
                    <button onClick={this.add}><AddIcon/></button>
                    <button disabled={this.state.btn} onClick={this.subtract}><RemoveIcon/></button>
                    <button onClick ={this.handleDelete} ><DeleteIcon/></button>
               

                </div>
         );
    }
    formatCount()
    {
       return  this.state.count===0 ?"Zero":this.state.count;
    }
    
}
 
export default Calculator;