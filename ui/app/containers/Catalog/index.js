/*
 *
 * Catalog
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectCatalog from './selectors';
import productCatalog from './selectors';
import {loadProducts} from './actions';
import ProductList from './ProductList';

export class Catalog extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = {
      modal : false
    }
  }
  render() {
    const {Catalog, products} = this.props;
    const productCount = Object.keys(Catalog).length;
    const showProducts = productCount >0 ? true : false;
    console.log('products',typeof Catalog, Catalog);
    Catalog.products && Catalog.products.map(function(item,index){
      return console.log('hi');
    });
    return (
      <div className="containers">
        {
          showProducts &&
          <ProductList data={Catalog} >

          </ProductList>
        }


      </div>
    );
  }
  componentWillMount(){
    this.props.load();
  }
}

Catalog.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Catalog: makeSelectCatalog(),
});



function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    load: ()=>{
      dispatch(loadProducts())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
