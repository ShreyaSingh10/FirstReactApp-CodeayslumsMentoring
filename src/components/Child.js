import React from 'react';

class Child extends React.Component {
  state={
    name: "abc"
  }

  handleClick= () => {
  	//this.props.handleTheClick(this.state.name);
  }

  render() {
  	//console.log("Props", this.props);
    return(
    	<div >
    		{this.props.name}
    	</div>
    );
  }
}

export default Child;