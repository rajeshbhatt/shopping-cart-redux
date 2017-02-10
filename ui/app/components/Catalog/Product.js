import React from 'react';
import {Link} from 'react-router';

const divStyle = {
  display: 'block',
  width: '250px',
  minHeight: '120px',
  overflow: 'hidden',
  float: 'left'
};
const imgStyle = {
  width: '90%'
}
const itemContainer = {
  padding: '5px',
  border: '1px solid #c5c5c5',
  overflow: 'hidden',
  width: '250px',
  display: 'inline-block',
  marginRight: '5px',
  boxSizing: 'border-box'
}
class Product extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    var url = 'http://static1.jassets.com/p/'+ this.props.data.image  + '.jpg';  // @todo remove this
    return (
      <div style={itemContainer}>
        <Link to="/" activeStyle={{ color: 'red' }}>
          <div className="p-img-container" style={divStyle}>
            <img src={url} alt="Product Image" style={imgStyle}/>
            <article>
              Product desc testing
            </article>
          </div>
        </Link>
      </div>
    )
  }
}
export default Product;
