import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Container } from 'react-bootstrap';
import "./table.scss"

interface tablePropsInterface{
  topTunes: any
  viewDetail: (data: any) => void;
}

class Table extends Component <tablePropsInterface, {}>{


  rowEvents =   {
    onClick: ({}, row: object, {}) => {
        this.props.viewDetail(row)
    }
  }


  render() {
  const columns = [{
      dataField: 'im:name.label',
      text: 'Song Name'
    }, {
      dataField: 'im:artist.label',
      text: 'Artist'
    }, {
      dataField: 'im:price.label',
      text: 'Price'
    }];
    return (
      <Container>
        {
        this.props.topTunes.length === 0 ?
        'No data':
        <BootstrapTable 
          keyField='id.attributes.im:id' 
          data={ this.props.topTunes }
          columns={ columns }
          rowEvents={ this.rowEvents }
          pagination={ paginationFactory() }
          />
       
      }
        
      </Container>
    );
  }
}

export default Table;
