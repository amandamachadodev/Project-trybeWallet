import React from 'react';
import Form from '../component/Form';
import Header from '../component/Header';
import Despesas from '../component/Despesas';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <Despesas />
      </div>
    );
  }
}

export default Wallet;
