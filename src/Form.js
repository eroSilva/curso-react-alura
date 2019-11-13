import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: '',
      book: '',
      price: '',
    }

    this.state = this.initialState;
  }

  handleInput = event => {
    const { name, value } = event.target;

    this.setState({
      [name] : value
    });
  }

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    return(
      <form>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleInput} />
        <label htmlFor="book">Livro</label>
        <input
          id="book"
          type="text"
          name="book"
          value={this.state.book}
          onChange={this.handleInput} />
        <label htmlFor="price">Preço</label>
        <input
          id="price"
          type="text"
          name="price"
          value={this.state.price}
          onChange={this.handleInput} />
        <button type="button" onClick={this.submitForm}>Salvar </button>
    </form>
    )
  }
}

export default Form;