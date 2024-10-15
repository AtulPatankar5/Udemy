import React, { Component } from 'react'

export default class ClassRef extends Component {
    constructor(props){
        super(props);
        this.iElement=React.createRef();
    }
    componentDidMount(){
        // this.iElement.focus();
        this.iElement.current.focus();
  }
    render() {
    return (
      <div>
        <input text="text"/>
        <hr></hr>
        {/* <input text="text" ref={(ele)=> this.iElement=ele}/> */}
        <input text="text" ref={this.iElement}/>
        <hr></hr>
        {/* <button onClick={()=>this.iElement.focus()}>Focus</button> */}
        <button onClick={()=>this.iElement.current.focus()}>Focus</button>

      </div>
    )
  }
}
