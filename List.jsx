import React from 'react';

export default class List extends React.Component{

constructor(props){
  super(props);
}

render(){

  return(
    <div>
    {
      this.props.data.map((item,i)=>{
        return(
          <p key={i}>{item}</p>
        )
      })
    }
    </div>
  )

}
}
