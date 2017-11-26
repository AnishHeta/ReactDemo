import React from 'react';

export default class Gender extends React.Component{

constructor(props){
  super(props);
}

render(){

  return(
    <div>
      {this.props.gender}
    </div>
  )

}
}
