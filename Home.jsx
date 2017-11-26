import React from 'react';

import Gender from './Gender.jsx';

export default class Home extends React.Component{

constructor(props){
  super(props);
  this.state={
    gender:"Male"
  }
}

render(){

  return(
    <div>
      {this.props.name},
      {this.props.nickname}
      <Gender gender={this.state.gender}/>
    </div>
  )

}
}
