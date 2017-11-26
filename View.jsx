import React from 'react';

import Input from './Input.jsx';
import List from './List.jsx';

export default class View extends React.Component{

constructor(props){
  super(props);
  this.state={
    inputValue:"",
    list:[]
  }
}

handleInputChange(e){
  this.setState({inputValue:e.target.value})
}

handleSubmitClick(){
  var temp=this.state.list;
  temp.push(this.state.inputValue);
  this.setState({list:temp,inputValue:""})
}
onClick(){
 this.setState({list:[]})
}

render(){

  return(
    <div>

    <Input value={this.state.inputValue} onInputChange={this.handleInputChange.bind(this)} onSubmitClick={this.handleSubmitClick.bind(this)}/>
    <List data={this.state.list}/>
    <input type="reset" onClick={ this.onClick.bind(this)}/>
    </div>
  )

}
}
