import React from 'react'
import TableRow from './TableRow'

class  Table extends React.Component {
    constructor(props){
       super(props)
    }

    render(){
        console.log(this.props.row)
        let rows=[]
        for( let i=0; i<this.props.row; i++){
            rows.push(<TableRow  columns={this.props.column} color={this.props.color} />)
        }
    return (
        <table>       
          {rows}
        </table>
        
    )
}
}
export default Table
