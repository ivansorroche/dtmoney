import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'PGT FORNECEDORES',
          type: 'deposit',
          category: 'Salario',
          amount: 7500,
          createdAt: new Date('2021-02-01 09:00:00'),
        },
        {
          id: 2,
          title: 'TARIFA MENSALIDADE',
          type: 'withdraw',
          category: 'TARIFA BANCARIA',
          amount: 25.90,
          createdAt: new Date('2021-02-01 10:00:00'),
        }
      ],
    })
  },
  
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

