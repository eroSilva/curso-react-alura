import React, { Component } from 'react';

import Button from '../Button';

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
        <div className="row">
          <div className="input-field col s4">
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInput}
              className="validade"
            />
          </div>
          <div className="input-field col s4">
            <label htmlFor="book">Livro</label>
            <input
              id="book"
              type="text"
              name="book"
              value={this.state.book}
              onChange={this.handleInput}
              className="validade"
            />
          </div>
          <div className="input-field col s4">
            <label htmlFor="price">Preço</label>
            <input
              id="price"
              type="text"
              name="price"
              value={this.state.price}
              onChange={this.handleInput}
              className="validade"
            />
          </div>
          <div className="col s12">
            {/* <button type="button" className="waves-effect waves-light btn blue darken-3" onClick={this.submitForm}>Salvar </button> */}
            <Button
              backgroundColor='green'
            >
              Salvar
            </Button>
          </div>
      </div>
    </form>
    )
  }
}

export default Form;