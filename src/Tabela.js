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

const TableBody = ({ autores }) => {
  return (
    <tbody>
      {autores.map((autor, index) => {
        return (
          <tr key={index}>
            <td>{autor.nome}</td>
            <td>{autor.livro}</td>
            <td>{autor.preco}</td>
            <td>
              <button type="button">Remover</button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

class Tabela extends Component {
  render() {
    const { autores } = this.props;

    return(
      <table>
        <TableHead />
        <TableBody autores={autores} />
      </table>
    );
  }
}

export default Tabela;