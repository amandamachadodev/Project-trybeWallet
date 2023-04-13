import React from 'react';
import Form from '../../component/Form/Form';
import Header from '../../component/Header/Header';
import Despesas from '../../component/Despesas/Despesas';

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
