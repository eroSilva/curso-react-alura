import React, { Component } from 'react';

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Autores</th>
        <th>Livros</th>
        <th>Preços</th>
        <th>Remover</th>
      </tr>
    </thead>
  );
};

const TableBody = ({ 
  authors,
  removeAuthor
}) => {
  return (
    <tbody>
      {authors.map((author, index) => {
        return (
          <tr key={index}>
            <td>{author.name}</td>
            <td>{author.book}</td>
            <td>{author.price}</td>
            <td>
              <button type="button" onClick={() => removeAuthor(index)}>Remover</button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

class Table extends Component {
  render() {
    const { author, removeAuthor } = this.props;

    return(
      <table>
        <TableHead />
        <TableBody 
          authors={author}
          removeAuthor={removeAuthor}
       />
      </table>
    );
  }
}

export default Table;