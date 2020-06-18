import React from 'react';
//import Child from './Child';

class Parent extends React.Component {
  
  state={
    name: 'Shreya',
    value:"",
  }

  handleClick = () => {
  	//console.log("CLICK");
  	//this.setState({name:'abc'});
  	//console.log("Value", name);
  	//this.setState({name: "XYZ"});//setState is asynchronous
  	//console.log("FUNCTION STATE", this.state); //---wrong

  	this.setState({name: "XYZ"}, () => console.log("Function State",this.state)); //callback with setState
  	this.setState({name: "XYZ"}, this.handleSubmit); //calling a function inside callback
  }

  handleSubmit = () => {
  	console.log("Coming here");
  }

  //console.log("STATE", state);------wrong!

  //console.log("THIS STATE", this.state);-----wrong!

  render() {
  	console.log("RENDER STATE", this.state); //right place to print you state
    return(
    	<div onClick={this.handleClick}>
 			{this.state.name}
    	</div>
    );
  }
}

export default Parent;