import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';


class Table extends Component {
  render() {
    const products = [{
      id: 1,
      name: "Product1",
      price: 120
  }, {
      id: 2,
      name: "Product2",
      price: 80
  }];
  const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];
    return (
      <div className="Table">
        <BootstrapTable keyField='id' data={ products } columns={ columns } pagination={ paginationFactory() } />
      </div>
    );
  }
}

export default Table;
