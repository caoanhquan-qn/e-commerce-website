import React from 'react';
import Collections from '../../components/collections/Collections';
import { ProductContext } from '../../context/ProductContext';

class ShopPage extends React.Component {
  static contextType = ProductContext;
  render() {
    return (
      <div>
        <Collections collections={this.context.collections} />
      </div>
    );
  }
}

export default ShopPage;
