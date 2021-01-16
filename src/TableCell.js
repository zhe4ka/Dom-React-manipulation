import React from 'react'


class TableCell extends React.Component {
    constructor(props){
        super(props) 
        this.state={
            color:this.props.color
        }
     }
     changeColor(e){
         this.setState({

            color:this.props.color
         })

         
     }
    render(){
    return (
        <td  onClick={(e)=>this.changeColor(e)} style={{"background-color":this.state.color}}> </td>
    )
}
}
export default TableCell