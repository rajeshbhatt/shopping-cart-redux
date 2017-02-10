import React from 'react';
import Product from './../../components/Catalog/Product';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    const {data} = this.props;
    console.log('dataaaaaa aaaaaaaa',data);
    return (
      <div>
      { data.products &&
        data.products.map(function(product, key){
          return <Product key={key} data={product}>dsds</Product>
        })
      }
      </div>
    )
  }
}
export default ProductList;
