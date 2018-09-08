import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class Page2ShowReactTable extends React.Component {
    
    myColumns = [
        { Header: 'ID', accessor: 'id', Cell: props => <span className='number'>{props.value}</span> },
        { Header: 'Name', accessor: 'name' }, 
        { Header: props => <span>VALUE</span>, accessor: 'value' }
    ]

    render() {
        return (
            <ReactTable data={this.props.dataSource} columns={this.myColumns} />    
        );
    }
}

export default Page2ShowReactTable;