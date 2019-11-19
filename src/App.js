import React, { Component } from 'react';
import Header from './Header';
import Table from './Table';
import Form from './Form';

import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  state = {
    authors: [
      {
        name: 'Paulo',
        book: 'React',
        price: '1000'
      },
      {
        name: 'Daniel',
        book: 'Java',
        price: '99'
      },
      {
        name: 'Marcos',
        book: 'Design',
        price: '150'
      },
      {
        name: 'Bruno',
        book: 'DevOps',
        price: '100'
      }
    ]
  };

  removeAuthor = index => {
    const { authors } = this.state;

    this.setState({
      authors: authors.filter((author, initialPos) => {
        return index !== initialPos;
      })
    });
  }

  handleSubmit = author => {
    this.setState({
      authors: [...this.state.authors, author]
    });
  }

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <Table 
            author={this.state.authors}
            removeAuthor={this.removeAuthor}
          />
          <Form
            handleSubmit={this.handleSubmit}
          />
        </div>
      </>
    );
  };
};

export default App;
