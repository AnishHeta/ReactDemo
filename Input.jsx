import React from 'react';

export default class Input extends React.Component{

constructor(props){
  super(props);
}

render(){

  return(
    <div>
      <input type="text" value={this.props.value} onChange={this.props.onInputChange}/>
      <input type="submit" onClick={this.props.onSubmitClick}/>
    </div>
  )

}
}
