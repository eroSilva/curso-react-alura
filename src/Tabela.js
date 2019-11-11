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

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>Paulo</td>
        <td>React</td>
        <td>1000</td>
        <td>
          <button type="button">Remover</button>
        </td>
      </tr>
      <tr>
        <td>João</td>
        <td>React</td>
        <td>1000</td>
        <td>
          <button type="button">Remover</button>
        </td>
      </tr>
      <tr>
        <td>Ricardo</td>
        <td>React</td>
        <td>1000</td>
        <td>
          <button type="button">Remover</button>
        </td>
      </tr>
    </tbody>
  );
};

class Tabela extends Component {
  render() {
    return(
      <table>
        <TableHead />
        <TableBody />
      </table>
    );
  }
}

export default Tabela;