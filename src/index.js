import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
//import '../node_modules/react-bootstrap-table/css/BootstrapTable.min.all.css';
import registerServiceWorker from './registerServiceWorker';

var idata = [
    {id: 1, name: 'Gob', value: '2'}
    ,{id: 1.1, name: 'Gob1', value: '2.1'}
    ,{id: 2, name: 'Buster', value: '5'}
    ,{id: 2.1, name: 'Buster2', value: '6'}
    ,{id: 3, name: 'George Micheal', value: '4'}
];


class Table1 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data} >
          <TableHeaderColumn isKey dataField='id'>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='name'>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='value'>
            Value
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

class iApp extends Component{
    render(){
        return (
            <div>
                <p className="Table-header">Basic Table</p>
                <Table1 data={idata}/>
            </div>
        )
    }
}



ReactDOM.render(<iApp/>, document.getElementById('root'));

//alert(document.head.innerHTML);
//alert(document.body.innerHTML);
registerServiceWorker();

