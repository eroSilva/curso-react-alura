import React, { Component } from 'react';
import Table from './Table';

import './App.css';

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

  render() {
    return (
      <div className="App">
        <Table 
          author={this.state.authors}
          removeAuthor={this.removeAuthor}
        />
      </div>
    );
  };
};

export default App;
