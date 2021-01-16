import React, { Component } from 'react';
import './App.css';
import Table from './Table'


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      numCol:1,
      numRow:1,
      color: 'green',
    }
  }
  addRow(){
    this.setState({
      numRow: this.state.numRow+1
    })
  }

  addColumn(){
    this.setState({
      numCol: this.state.numCol+1
  })
}
  
  removeColumn(){
    this.setState({
      numCol: this.state.numCol-1
    })
  }
  removeRow(){
    this.setState({
      numRow: this.state.numRow-1
    })
  }

  addColor(e){
    this.setState({
      color:e.target.value
    })
  }
render(){
  return (
<div >
      <Table row={this.state.numRow } column={this.state.numCol} color={this.state.color}/>
      <br></br>
    <div class="buttons">
    <button onClick={(e)=>this.addRow(e)} >Add Row </button>
    <button onClick={(e)=>this.addColumn(e)} > Add a Column</button>
    <button onClick={(e)=>this.removeRow(e)} >Remove Row </button>
    <button onClick={(e)=>this.removeColumn(e)}> Remove a Column</button>
     <button>Change Color of a cell</button>
    <select onChange={(e)=>this.addColor(e)} > 
      <option value="green">Green</option>
      <option value="bisque">Bisque</option>
      <option value="pink">Pink</option>
    </select>
    {/* <button id="clear">Clear </button>   */}
 </div>
 </div>
  );
}
}
export default App;
