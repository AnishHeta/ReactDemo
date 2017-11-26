import React from 'react';

export default class Content extends React.Component{

constructor(props){
  super(props);
}

render(){

  return(
    <div>
      {this.props.age}
      <br/>
      <input type="submit" onClick={this.props.ageChange}/>
    </div>
  )

}
}
