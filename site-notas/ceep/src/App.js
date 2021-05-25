import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas/index';
import FormularioCadastro from './components/FormularioCadastro/index';
import ListaDeCategorias from './components/ListaDeCategorias/index';
import './assets/App.css';
import './assets/index.css';
import Categorias from './data/Categorias';
import ArrayDeNotas from './data/Notas';

class App extends Component {

  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro categorias={this.categorias.categorias} criarNota={this.notas.criarNota} />
        <main className="conteudo-principal">
          <ListaDeCategorias 
            adicionarCategoria = {this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias}
          />
          <ListaDeNotas
            apagarNota={this.notas.apagarNota}
            notas={this.notas.notas} 
          />
        </main>
      </section>
    );
  }
}

export default App;
