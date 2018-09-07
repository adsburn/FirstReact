import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './resources/bootstrap.min.css';
import Page2ShowBootstrapTable from './components/Page2ShowBootstrapTable'

const idata = [
    {id: 1, name: 'Gob', value: '2'},
    {id: 1.1, name: 'Gob1', value: '2.1'},
    {id: 2, name: 'Buster', value: '5'},
    {id: 2.1, name: 'Buster2', value: '6'},
    {id: 3, name: 'George Micheal', value: '4'}
];

export default class App extends Component{
    render(){
        return (
            <div>
                <p className="Table-header">Basic Table</p>
                <Page2ShowBootstrapTable dataSource={idata} />
            </div>
        )
    }
}

ReactDOM.render(
<App/>
, document.getElementById('root'));

