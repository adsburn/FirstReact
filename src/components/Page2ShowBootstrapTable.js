import React from 'react';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import './../resources/react-bootstrap-table-all.min.css';

const Page2ShowBootstrapTable = (props) => {
    return (<BootstrapTable data={props.dataSource} striped hover>
                <TableHeaderColumn dataField='id' isKey>ID</TableHeaderColumn>
                <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
                <TableHeaderColumn dataField='value'>Value</TableHeaderColumn>
            </BootstrapTable>
    );
}

export default Page2ShowBootstrapTable