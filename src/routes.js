
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Loja from './pages/Loja';
import DetalhesTablet from './pages/Produtos/ProdutoTablet';
import DetalhesNotebook from './pages/Produtos/NotebookInspiron';
import DetalhesProjetor from './pages/Produtos/ProjetorLed';

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Loja" component={Loja} />
          <Route path="/Detalhes/Tablet" component={DetalhesTablet} />
          <Route path="/Detalhes/Notebook" component={DetalhesNotebook} />
          <Route path="/Detalhes/Projetor" component={DetalhesProjetor} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Routes;