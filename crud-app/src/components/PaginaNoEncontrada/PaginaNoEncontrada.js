import React from 'react';
import { Alert } from 'reactstrap';

const PaginaNoEncontrada = () => (
  <div data-testid="PaginaNoEncontrada">
    <Alert color="primary">
      Pagina No Encontrada Volver a la <a href="/" className="alert-link">Pagina Principal</a>
    </Alert>
  </div>
);


export default PaginaNoEncontrada;
