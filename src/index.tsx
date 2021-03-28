import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from "miragejs";
import {App} from './App';

createServer({
  models : {
    transaction:Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id:1,
          title:'venda de Super Model',
          type:'deposit',
          amount:150000,
          category:'sell',  
          createdAt:Date.now(),
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions',() => this.schema.all('transaction') )

    this.post('/transactions', (schema,request):any =>{
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction',{...data,createdAt: Date.now()})
    })

  }

  
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

