import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './resources/bootstrap.min.css';
import Page2ShowBootstrapTable from './components/Page2ShowBootstrapTable'
import Page2ShowReactTable from './components/Page2ShowReactTable'

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
                <h1>Sample Bootstrap table</h1>
                <Page2ShowBootstrapTable dataSource={idata} />
                <h1>Sample React table</h1>
                <Page2ShowReactTable dataSource={idata} />
            </div>
        )
    }
}

ReactDOM.render(
<App/>
, document.getElementById('root'));

