import React from 'react';
import SHOP_DATA from '../../data/shop.data';
import Collections from '../../components/collections/Collections';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div>
        <Collections collections={this.state.collections} />
      </div>
    );
  }
}

export default ShopPage;
